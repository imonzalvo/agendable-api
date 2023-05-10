const { APP_SECRET, getUserId, asyncForEach } = require('../../utils')

const CreateService = async (
  parent,
  { name, price, currency, duration, description, branchesId, categoryId },
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
    if (!branch) {
      throw new Error(`Branch not found`)
    }
    const validBranch =
      branch.categories.filter((c) => c.id === categoryId).length > 0
    // if (!validBranch) {
    //   throw new Error(`Branch does not have category ${categoryId}`)
    // }
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

const SetUpServices = async (parent, { data: servicesData }, ctx) => {
  console.log('services ', servicesData)
  const ownerId = getUserId(ctx.req)
  const { business } = await ctx.prisma.user.findUnique({
    where: {
      id: ownerId,
    },
    include: {
      business: {
        include: {
          branches: {
            select: {
              id: true,
            },
          },
          categories: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  })
  console.log('business', business)

  const services = await Promise.all(
    servicesData.map((service) =>
    ctx.prisma.service.create({
        data: {
          name: service.name,
          price: service.price,
          currency: service.currency,
          duration: service.duration,
          description: service.description,
          branchesIDs: [business.branches[0].id],
          categoryId: business.categories[0].id,
          businessId: business.id,
        },
      }),
    ),
  )

  // const createData = servicesData.map((service) => ({
  //   name: service.name,
  //   price: service.price,
  //   currency: service.currency,
  //   duration: service.duration,
  //   description: service.description,
  //   branchesIDs: [business.branches[0].id],
  //   categoryId: business.categories[0].id,
  //   businessId: business.id,
  // }))

  // const service = await ctx.prisma.service.createMany({
  //   data: createData,
  // })
  console.log('services', services)
  return services
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

  if (categoryId) {
    const validCategory =
      service.branches[0].business.categories.filter((c) => c.id === categoryId)
        .length > 0
    if (!validCategory) {
      throw new Error(`Category ${categoryId} not valid`)
    }
    serviceData['category'] = { connect: { id: categoryId } }
  }

  service = await ctx.prisma.service.update({
    where: { id: id },
    data: serviceData,
  })
  return service
}

const DeleteService = (parent, { id }, ctx) => {
  const service = ctx.prisma.service.delete({
    where: { id },
  })
  return service
}

module.exports = { CreateService, UpdateService, SetUpServices, DeleteService }
