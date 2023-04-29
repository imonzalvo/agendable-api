const { APP_SECRET, getUserId, asyncForEach } = require('../../utils')

const CreateService = async (
  parent,
  { name, price, currency, duration, description, branchesId },
  ctx,
) => {
  const ownerId = getUserId(ctx.req)
  const userBusiness = await ctx.prisma.business.findMany({
    where: {
      owner: {
        id: ownerId,
      },
    },
  })
  await asyncForEach(branchesId, async (id) => {
    const branch = await ctx.prisma.branch.findUnique({
      where: { id: id },
      select: {
        categories: {
          select: { id: true },
        },
      },
    })
    if(!branch) {
      throw new Error(`Branch not found`)
    }
  })
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
      Business: { connect: { id: userBusiness[0].id } },
    },
  })
  return service
}

const UpdateService = async (
  parent,
  { id, name, price, currency, duration, description },
  ctx,
) => {
  const serviceData = {
    id,
    name,
    price,
    currency,
    duration,
    description,
  }

  let service = await ctx.prisma.service.findUnique({
    where: { id: id },
    select: {
      branches: {
        select: {
          business: {
            select: {
              categories: {
                select: {
                  id: true,
                },
              },
            },
          },
        },
      },
    },
  })

  service = await ctx.prisma.service.update({
    where: { id: id },
    data: serviceData,
  })
  return service
}

module.exports = { CreateService, UpdateService }
