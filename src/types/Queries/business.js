const { getUserId } = require('../../utils')

const getBusiness = (parent, { id }, ctx) => {
  return ctx.prisma.business.findOne({
    where: {
      id: id,
    },
  })
}

const getBusinessByHandle = async (parent, { handle }, ctx) => {
  const businsses = await ctx.prisma.business.findOne({
    where: {
      handle: handle,
    },
  })
  return businsses
}

const getBusinesses = (parent, ctx) => {
  return ctx.prisma.business.findMany()
}

module.exports = { getBusiness, getBusinesses, getBusinessByHandle }
