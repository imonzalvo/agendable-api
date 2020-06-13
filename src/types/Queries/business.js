const { getUserId } = require('../../utils')

const getBusiness = (parent, { id }, ctx) => {
  return ctx.prisma.business.findOne({
    where: {
      id: id,
    },
  })
}

const getBusinesses = (parent, ctx) => {
  return ctx.prisma.business.findMany()
}

module.exports = { getBusiness, getBusinesses }
