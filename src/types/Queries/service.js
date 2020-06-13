const { getUserId } = require('../../utils')

const getService = (parent, { id }, ctx) => {
  return ctx.prisma.service.findOne({
    where: {
      id: id,
    },
  })
}

const getServices = (parent, ctx) => {
  return ctx.prisma.service.findMany()
}

module.exports = { getService, getServices }
