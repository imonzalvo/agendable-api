const { getUserId } = require('../../utils')

const getBranch = (parent, { id }, ctx) => {
  return ctx.prisma.branch.findOne({
    where: {
      id: id,
    },
  })
}

const getBranches = (parent, ctx) => {
  return ctx.prisma.branch.findMany()
}

module.exports = { getBranch, getBranches }
