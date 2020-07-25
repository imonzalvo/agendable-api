const moment = require('moment')

const parseTime = (time) => {
  return `${time.hour() < 9 ? '0' + time.hour() : time.hour()}:${
    time.minute() < 9 ? '0' + time.minute() : time.minute()
  }`
}

const bookingsToMoment = (items) => {
  return items.map((item) => {
    return { start: moment(item.start), end: moment(item.end) }
  })
}

const availabilityToMoment = (items, date) => {
  return items.map((item) => {
    const itemStartHour = item.from.split(':')[0]
    const itemStartMinutes = item.from.split(':')[1]
    const itemEndingHour = item.to.split(':')[0]
    const itemEndingMinutes = item.to.split(':')[1]

    const from = moment(date).hour(itemStartHour).minutes(itemStartMinutes)
    const to = moment(date).hour(itemEndingHour).minutes(itemEndingMinutes)
    return { from: from, to: to }
  })
}

const sortAvailabilityItems = (availabilityItems, date) => {
  const formattedAvailability = availabilityToMoment(availabilityItems, date)
  return formattedAvailability.sort((left, right) => left.from.diff(right.from))
}

const sortBookings = (bookings) => {
  const formattedBookings = bookingsToMoment(bookings)
  return formattedBookings.sort((left, right) => left.start.diff(right.start))
}

const isTodayVacation = (vacations, date) => {
  const reducer = (acc, item) => {
    let startDate = moment(item.from)
    let endDate = moment(item.to)
    let currentDate = moment(date)

    return acc || moment(currentDate).isBetween(startDate, endDate)
  }

  return vacations.reduce(reducer, false)
}

const isVacationToday = (from, to, date) => {
  const start = moment(from)
  const end = moment(to)
  const isToday =
    start.isSame(date, 'year') &&
    start.isSame(date, 'month') &&
    start.isSame(date, 'day') &&
    end.isSame(date, 'year') &&
    end.isSame(date, 'month') &&
    start.isSame(date, 'day')
  return isToday
}

const getDayVacations = (vacations, date) =>
  vacations
    .filter((vacation) => isVacationToday(vacation.from, vacation.to, date))
    .map((item) => {
      item.start = moment(item.from)
      item.end = moment(item.to)
      return { start: moment(item.start), end: moment(item.end) }
    })

const formattedAvailabilityItems = (availability, duration) => {
  let res = []
  // cambieé en el diff el orden puse primero el to y despues el from, sino daba negativo. kevin.
  availability.forEach(
    (item) =>
      (res =
        item.to.diff(item.from) > duration
          ? [...res, { from: parseTime(item.from), to: parseTime(item.to) }]
          : res),
  )
  return res
}

const availableTime = (availabilityItems, bookings, duration) => {
  const getAvailableTime = (time, bookings, i) => {
    if (i == bookings.length) {
      return []
    } else {
      return shouldAddInterval(time, bookings[i].start)
        ? [
            { from: parseTime(time), to: parseTime(bookings[i].start) },
            ...getAvailableTime(bookings[i].end, bookings, i + 1),
          ]
        : [...getAvailableTime(bookings[i].end, bookings, i + 1)]
    }
  }

  const shouldAddInterval = (left, right) => {
    return right.diff(left, 'minutes') > duration - 1
  }

  return availabilityItems.map((availability) => {
    const bookingsOnAvailability = bookings.filter(
      (booking) =>
        (booking.start.isAfter(availability.from) ||
          booking.start.isSame(availability.from)) &&
        booking.end.isBefore(availability.to),
    )
    const bookingsOnAvailabilityAmount = bookingsOnAvailability.length
    if (bookingsOnAvailability.length > 1) {
      return [
        ...getAvailableTime(availability.from, bookingsOnAvailability, 0),
        {
          from: parseTime(
            bookingsOnAvailability[bookingsOnAvailabilityAmount - 1].end,
          ),
          to: parseTime(availability.to),
        },
      ]
    } else if (bookingsOnAvailability.length == 1) {
      let res = []
      //Should add first interval
      res = shouldAddInterval(
        availability.from,
        bookingsOnAvailability[0].start,
      )
        ? [
            ...res,
            {
              from: parseTime(availability.from),
              to: parseTime(bookingsOnAvailability[0].start),
            },
          ]
        : res
      //Should add second interval
      res = shouldAddInterval(bookingsOnAvailability[0].end, availability.to)
        ? [
            ...res,
            {
              from: parseTime(bookingsOnAvailability[0].end),
              to: parseTime(availability.to),
            },
          ]
        : res
      return res
    } else {
      return {
        from: parseTime(availability.from),
        to: parseTime(availability.to),
      }
    }
  })
}

const queryObject = (id, day, dayOfTheWeek) => ({
  where: {
    id: id,
  },
  select: {
    availability: {
      where: {
        day: dayOfTheWeek,
      },
      select: {
        from: true,
        to: true,
        day: true,
      },
    },
    vacations: {
      select: {
        from: true,
        to: true,
      },
    },
    bookings: {
      where: {
        start: {
          startsWith: day,
        },
      },
      select: {
        start: true,
        end: true,
      },
    },
  },
})

const getEmployeeAvailableTime = async (
  parent,
  { id, date, duration },
  ctx,
) => {
  const day = date.split('T')[0] //2020-01-25
  const dayOfTheWeek = moment(date).format('dddd').toUpperCase()

  const {
    availability,
    vacations,
    bookings,
  } = await ctx.prisma.employee.findOne(queryObject(id, day, dayOfTheWeek))

  if (isTodayVacation(vacations, date)) {
    return []
  }

  const dayVacations = getDayVacations(vacations, date)
  const bookingsAndVacations = bookings.concat(dayVacations)
  const sortedBookingsAndVacations = sortBookings(bookingsAndVacations)
  const sortedAvailabilityItems = sortAvailabilityItems(availability, date)

  //No bookings today
  if (sortedBookingsAndVacations.length == 0) {
    return formattedAvailabilityItems(sortedAvailabilityItems, duration)
  }

  const availableTimeEmployee = availableTime(
    sortedAvailabilityItems,
    sortedBookingsAndVacations,
    duration,
  )
  const flattenAvailableTimes = [].concat.apply([], availableTimeEmployee)

  return flattenAvailableTimes
}

module.exports = { getEmployeeAvailableTime }
