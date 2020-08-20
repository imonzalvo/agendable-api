const {
  getDatesRange,
  generateQueryObjectFromDateRange,
  getDateFromMomentDate,
} = require('../../../utils')

const getEmployeeAvailableDays = async (
  parent,
  { employeeId, startDate, endDate },
  ctx,
) => {
  const datesRange = getDatesRange(startDate, endDate)
  const queryWhereObject = generateQueryObjectFromDateRange(datesRange)

  const employeeDaysBokings = await ctx.prisma.booking.findMany({
    where: {
      employeeId,
      OR: queryWhereObject,
    },
  })

  let availableDates = new Set()
  employeeDaysBokings.forEach((booking) => {
    const bookingDate = getDateFromMomentDate(booking.start)
    availableDates.add(bookingDate)
  })

  const sortedAvailableDates = datesRange.filter(
    (date) => !availableDates.has(date),
  )

  return sortedAvailableDates
}

module.exports = { getEmployeeAvailableDays }
