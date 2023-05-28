const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId, asyncForEach } = require('../../utils')
const { CreateLandingInfo } = require('./landingInfo')
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
    configuration: {
      enableEmailNotifications: true,
      scheduleMinutesSeparation: 15,
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
    Configuration: {
      create: {
        enableEmailsNotifications: true,
        scheduleMinutesSeparation: 30,
      },
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

  const landingInfo = await CreateLandingInfo(
    parent,
    {
      cta: 'Aqui va su titulo!',
      businessId: business.id,
      displayName: business.name,
      description: description,
      // TODO: Set default image
      logoUrl:
        'https://www.academiadechoferesdelparque.com.uy/images/academialogo.svg',
      imagesUrl: [
        'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.6435-9/64595531_2556091514409261_4583925518784528384_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZjqDZj5ZrwEAX-2qPn1&_nc_ht=scontent.fmvd1-1.fna&oh=00_AfB6BvG49Nerb90o6_OfyyW8BDpHWc4CbSgHUd4KUvUw4w&oe=64793FE3',
      ],
    },
    ctx,
  )

  console.log('landingInfo', landingInfo)

  return business
}

module.exports = {
  CreateBusiness,
  UpdateBusiness,
  AddCategoriesToBusiness,
  SetUpBusiness,
  DeleteBusiness,
}
