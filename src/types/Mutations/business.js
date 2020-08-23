const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId } = require('../../utils')

const CreateBusiness = (
  parent,
  { name, email, phone, handle, website, instagramUrl, facebookUrl },
  ctx,
) => {
  const ownerId = getUserId(ctx)

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

  const business = ctx.prisma.business.create({
    data: businessData,
  })
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

module.exports = { CreateBusiness, UpdateBusiness }
