const getAvailabilityItem = (parent, { id }, ctx) => {
  return ctx.prisma.availabilityItem.findOne({
    where: {
      id: id,
    },
  })
}

const getAvailabilityItems = (parent, ctx) => {
  return ctx.prisma.availabilityItem.findMany()
}

module.exports = { getAvailabilityItem, getAvailabilityItems }
