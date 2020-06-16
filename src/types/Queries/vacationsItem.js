const getVacationsItem = (parent, { id }, ctx) => {
  return ctx.prisma.vacationsItem.findOne({
    where: {
      id: id,
    },
  })
}

const getVacationsItems = (parent, ctx) => {
  return ctx.prisma.vacationsItem.findMany()
}

module.exports = { getVacationsItem, getVacationsItems }
