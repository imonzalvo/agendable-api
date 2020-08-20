const {
  generateQueryObjectFromDateRange,
  getDatesRange,
} = require('../../utils')

const getBooking = (parent, { id }, ctx) => {
  return ctx.prisma.booking.findOne({
    where: {
      id: id,
    },
  })
}

const getBookings = (parent, ctx) => {
  return ctx.prisma.booking.findMany()
}

const getBookingsByBranch = (parent, { branchId }, ctx) => {
  return ctx.prisma.booking.findMany({
    where: {
      branchId,
    },
  })
}

const getBookingsByBusiness = async (parent, { id }, ctx) => {
  const businessBranches = await ctx.prisma.business.findOne({
    where: {
      id: id,
    },
    select: {
      branches: {
        select: {
          id: true,
        },
      },
    },
  })
  const branchesId = businessBranches.branches.map((branch) => branch.id)
  return ctx.prisma.booking.findMany({
    where: {
      branchId: { in: branchesId },
    },
  })
}

const getBookingsByDate = async (
  parent,
  { branchId, startDate, endDate, employeeId },
  ctx,
) => {
  const datesRange = getDatesRange(startDate, endDate)
  const queryDatesObject = generateQueryObjectFromDateRange(datesRange)
  const queryObject = { OR: queryDatesObject }
  if (branchId) {
    const branch = await ctx.prisma.branch.findOne({
      where: { id: branchId },
    })

    if (!branch) {
      throw new Error(`Branch does not exist`)
    }

    queryObject['branchId'] = branchId
  }

  if (employeeId) {
    const employee = await ctx.prisma.employee.findOne({
      where: { id: employeeId },
    })

    if (!employee) {
      throw new Error(`Employee does not exist`)
    }

    queryObject['employeeId'] = employeeId
  }

  const bookings = await ctx.prisma.booking.findMany({
    where: queryObject,
  })

  return bookings
}

module.exports = {
  getBooking,
  getBookings,
  getBookingsByDate,
  getBookingsByBranch,
  getBookingsByBusiness,
}
