const { APP_SECRET, getUserId, asyncForEach } = require('../../utils')

const CreateService = async (
  parent,
  { name, price, currency, duration, description, branchesId, categoryId },
  ctx,
) => {
  const ownerId = getUserId(ctx)
  const userBusiness = await ctx.prisma.business.findMany({
    where: {
      owner: {
        id: ownerId,
      },
    },
  })
  await asyncForEach(branchesId, async (id) => {
    const branch = await ctx.prisma.branch.findOne({
      where: { id: id },
      select: {
        categories: {
          select: { id: true },
        },
      },
    })
    const validBranch =
      branch.categories.filter((c) => c.id === categoryId).length > 0
    if (!validBranch) {
      throw new Error(`Branch does not gave category ${categoryId}`)
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
      category: { connect: { id: categoryId } },
      Business: { connect: { id: userBusiness[0].id } },
    },
  })
  return service
}

const UpdateService = async (
  parent,
  { id, name, price, currency, duration, description, categoryId },
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

  let service = await ctx.prisma.service.findOne({
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

  if (categoryId) {
    const validCategory =
      branches[0].business.categories.filter((c) => c.id === categoryId)
        .length > 0
    if (!validCategory) {
      throw new Error(`Category ${categoryId} not valid`)
    }
    serviceData['category'] = { connect: categoryId }
  }

  service = await ctx.prisma.service.update({
    where: { id: id },
    data: serviceData,
  })
  return service
}

module.exports = { CreateService, UpdateService }
