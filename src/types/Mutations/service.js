const { APP_SECRET, getUserId } = require('../../utils')

const CreateService = async (
  parent,
  { name, price, currency, duration, description, branchesId },
  ctx,
) => {
  console.log('here 1', ctx['here'])
  const connectBranches = branchesId.map((branchId) => {
    return {
      id: branchId,
    }
  })
  const service = ctx.prisma.service.create({
    data: {
      name,
      price,
      currency,
      duration,
      description,
      branches: { connect: connectBranches },
    },
  })
  return service
}

module.exports = { CreateService }
