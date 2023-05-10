const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId, asyncForEach } = require('../../utils')
const CreateBusiness = async (
  parent,
  {
    name,
    email,
    phone,
    handle,
    categories,
    website,
    instagramUrl,
    facebookUrl,
  },
  ctx,
) => {
  const ownerId = getUserId(ctx.req)

  let businessData = {
    name,
    email,
    phone,
    handle,
    owner: { connect: { id: ownerId } },
  }

  if (website) {
    businessData['website'] = website
  }
  if (instagramUrl) {
    businessData['instagramUrl'] = instagramUrl
  }
  if (facebookUrl) {
    businessData['facebookUrl'] = facebookUrl
  }

  const business = await ctx.prisma.business.create({
    data: businessData,
  })

  await asyncForEach(categories, async (id) =>
    ctx.prisma.category.create({
      data: {
        name: id,
        Business: { connect: { id: business.id } },
      },
    }),
  )

  return business
}

const UpdateBusiness = (
  parent,
  { id, name, email, phone, handle, website, instagramUrl, facebookUrl },
  ctx,
) => {
  const business = ctx.prisma.business.update({
    where: { id: id },
    data: {
      name,
      email,
      phone,
      handle,
      website,
      instagramUrl,
      facebookUrl,
    },
  })
  return business
}

const DeleteBusiness = (parent, { id }, ctx) => {
  const business = ctx.prisma.business.delete({
    where: { id: id },
  })
  return business
}

const AddCategoriesToBusiness = async (
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

  return ctx.prisma.business.findUnique({ where: { id: businessId } })
}

const SetUpBusiness = async (
  parent,
  {
    name,
    email,
    phone,
    handle,
    address,
    description,
    categories,
    website,
    instagramUrl,
    facebookUrl,
  },
  ctx,
) => {
  const ownerId = getUserId(ctx.req)

  const branchData = {
    address,
    name,
    email,
    phone,
    description,
  }

  let businessData = {
    name,
    email,
    phone,
    handle,
    owner: { connect: { id: ownerId } },
    branches: {
      create: branchData,
    },
  }

  if (website) {
    businessData['website'] = website
  }
  if (instagramUrl) {
    businessData['instagramUrl'] = instagramUrl
  }
  if (facebookUrl) {
    businessData['facebookUrl'] = facebookUrl
  }

  const business = await ctx.prisma.business.create({
    data: businessData,
    include: {
      branches: {
        select: {
          id: true,
        },
      },
    },
  })

  // There will only be one branch on the newly
  // created business.
  const connectBranch = [{ id: business.branches[0].id }]

  if (!!categories && categories.length) {
    await asyncForEach(categories, async (id) =>
      ctx.prisma.category.create({
        data: {
          name: id,
          Business: { connect: { id: business.id } },
          branches: { connect: connectBranch },
        },
      }),
    )
  } else {
    await ctx.prisma.category.create({
      data: {
        name: 'Otros',
        Business: { connect: { id: business.id } },
        branches: { connect: connectBranch },
      },
    })
  }

  return business
}

module.exports = {
  CreateBusiness,
  UpdateBusiness,
  AddCategoriesToBusiness,
  SetUpBusiness,
  DeleteBusiness,
}
