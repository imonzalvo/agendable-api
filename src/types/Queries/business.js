const { getUserId } = require('../../utils')

const getBusiness = (parent, { id }, ctx) => {
  return ctx.prisma.business.findOne({
    where: {
      id: id,
    },
  })
}

const getBusinessByHandle = async (parent, { handle }, ctx) => {
  console.log('handle', handle)
  const businsses = await ctx.prisma.business.findMany()
  console.log('hola', businsses)
  return businsses.filter((business) => business.handle === handle)[0]
}

const getBusinesses = (parent, ctx) => {
  return ctx.prisma.business.findMany()
}

module.exports = { getBusiness, getBusinesses, getBusinessByHandle }
