const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId, disconnectObject } = require('../../utils')

const CreateBranch = async (
  parent,
  { address, phone, email, name, description, image },
  ctx,
) => {
  const ownerId = getUserId(ctx)
  const userBusiness = await ctx.prisma.business.findMany({
    where: {
      owner: {
        id: ownerId,
      },
    },
    include: {
      categories: { select: { id: true } },
    },
  })

  const branch = ctx.prisma.branch.create({
    data: {
      address,
      name,
      email,
      phone,
      description,
      image,
      categories: { connect: userBusiness[0].categories },
      business: { connect: { id: userBusiness[0].id } },
    },
  })
  return branch
}

const UpdateBranch = async (
  parent,
  {
    id,
    address,
    phone,
    email,
    name,
    description,
    image,
    servicesId,
    categoriesId,
  },
  ctx,
) => {
  const branchData = {
    address,
    name,
    email,
    phone,
    description,
    image,
  }

  let branch = await ctx.prisma.branch.findUnique({
    where: { id: id },
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
      services: {
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
  })

  console.log('holaaaa', branch)
  if (servicesId) {
    const connectServices = servicesId.map((serviceId) => {
      return {
        id: serviceId,
      }
    })

    const oldServices = branch.services.map((s) => s.id)
    const disconnectServices = disconnectObject(oldServices, servicesId)
    branchData['services'] = {
      connect: connectServices,
      disconnect: disconnectServices,
    }
  }

  if (categoriesId) {
    const oldCategories = branch.categories.map((cat) => cat.id)
    const disconnectCategories = disconnectObject(oldCategories, categoriesId)

    const connectServices = categoriesId.map((categoryId) => {
      const validCategory =
        branch.business.categories.filter((c) => c.id === categoryId).length > 0
      if (!validCategory) {
        throw new Error(`Category ${categoryId} not valid`)
      }
      return {
        id: categoryId,
      }
    })
    branchData['categories'] = {
      connect: connectServices,
    }
    if (disconnectCategories.length > 0) {
      branchData['categories']['disconnect'] = disconnectCategories
    }
  }

  branch = await ctx.prisma.branch.update({
    where: { id: id },
    data: branchData,
  })
  return branch
}

const DeleteBranch = async (parent, { id }, ctx) => {
  const branch = await ctx.prisma.branch.delete({
    where: { id },
    include: {
      branch: { include: { business: true } },
    },
  })
  return branch
}

const AddCategoriesToBranch = async (
  parent,
  { businessId, categories },
  ctx,
) => {
  await asyncForEach(categories, (id) =>
    ctx.prisma.category.create({
      data: {
        name: id,
        Business: { connect: { id: businessId } },
      },
    }),
  )

  return ctx.prisma.business.findUnique({ where: { id: businessId } });
}

module.exports = {
  CreateBranch,
  UpdateBranch,
  DeleteBranch,
  AddCategoriesToBranch,
}
