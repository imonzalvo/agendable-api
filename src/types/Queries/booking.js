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

const getBookingsByBusiness = async (parent, { businessId }, ctx) => {
  const businessBranches = await ctx.prisma.business.findOne({
    where: {
      id: businessId,
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

module.exports = {
  getBooking,
  getBookings,
  getBookingsByBranch,
  getBookingsByBusiness,
}
