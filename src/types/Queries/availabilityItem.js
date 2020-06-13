const getAvailabilityItem = (parent, { id }, ctx) => {
  return ctx.prisma.availabilityItem.findOne({
    where: {
      id: Number(id),
    },
  })
}

const getAvailabilityItems = (parent, ctx) => {
  return ctx.prisma.availabilityItem.findMany()
}

module.exports = { getAvailabilityItem, getAvailabilityItems }
