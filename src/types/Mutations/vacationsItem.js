const moment = require('moment')

const getDatesRange = (from, to) => {
  let currentDate = moment(from)
  const lastDay = moment(to)
  let res = []
  while (currentDate.isBefore(lastDay)) {
    const rawDate = currentDate.format('YYYY-MM-DD')
    res.push(rawDate)
    currentDate = currentDate.add(1, 'days')
    console.log('res', res)
  }
  return res
}

const generateQueryWhereObject = (range) => {
  return range.map((day) => {
    return {
      start: {
        startsWith: day,
      },
    }
  })
}

const generateBatchDeleteObject = (bookings) => {
  return bookings.map((booking) => {
    return { id: booking.id }
  })
}
const CreateVacationsItem = async (parent, { from, to, employeeId }, ctx) => {
  const vacationsStart = moment(from)
  const vacationsEnd = moment(to)

  const vacationsDateRange = getDatesRange(from, to)
  const queryWhereObject = generateQueryWhereObject(vacationsDateRange)
  const employeeDayBokings = await ctx.prisma.booking.findMany({
    where: {
      employeeId,
      OR: queryWhereObject,
    },
  })

  const bookingsOnVacation = employeeDayBokings.filter((booking) => {
    return moment(booking.start).isBetween(vacationsStart, vacationsEnd)
  })

  const batchDeleteObject = generateBatchDeleteObject(bookingsOnVacation)

  await ctx.prisma.booking.deleteMany({
    where: {
      OR: batchDeleteObject,
    },
  })

  const vacationsItem = ctx.prisma.vacationsItem.create({
    data: {
      from,
      to,
      employee: { connect: { id: employeeId } },
    },
  })
  return vacationsItem
}

const UpdateVacationsItem = (parent, { id, from, to }, ctx) => {
  const vacationsItem = ctx.prisma.vacationsItem.update({
    where: { id: id },
    data: {
      from,
      to,
    },
  })
  return vacationsItem
}

module.exports = { CreateVacationsItem, UpdateVacationsItem }
