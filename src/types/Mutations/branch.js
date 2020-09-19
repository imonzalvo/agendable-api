const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId } = require('../../utils')

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
  })
  const branch = ctx.prisma.branch.create({
    data: {
      address,
      name,
      email,
      phone,
      description,
      image,
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

  let branch = await ctx.prisma.branch.findOne({
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
    },
  })

  if (servicesId) {
    const connectServices = servicesId.map((serviceId) => {
      return {
        id: serviceId,
      }
    })
    branchData['services'] = { connect: connectServices }
  }

  if (categoriesId) {
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
    branchData['categories'] = { connect: connectServices }
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

  return ctx.prisma.business.findOne({ where: { id: businessId } })
}

module.exports = {
  CreateBranch,
  UpdateBranch,
  DeleteBranch,
  AddCategoriesToBranch,
}
