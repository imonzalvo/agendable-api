const getAvailabilityItem = (parent, { id }, ctx) => {
  return ctx.prisma.availabilityItem.findUnique({
    where: {
      id: id,
    },
  });
}

const getAvailabilityItems = (parent, ctx) => {
  return ctx.prisma.availabilityItem.findMany()
}

module.exports = { getAvailabilityItem, getAvailabilityItems }
