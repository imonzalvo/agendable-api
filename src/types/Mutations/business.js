const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId } = require('../../utils')

const CreateBusiness = (parent, { name, email, phone, handle }, ctx) => {
  const ownerId = getUserId(ctx)
  console.log('here123123')
  const business = ctx.prisma.business.create({
    data: {
      name,
      email,
      phone,
      handle,
      owner: { connect: { id: ownerId } },
    },
  })
  return business
}

const UpdateBusiness = (parent, { id, name, email, phone, handle }, ctx) => {
  const business = ctx.prisma.business.update({
    where: { id: id },
    data: {
      name,
      email,
      phone,
      handle,
    },
  })
  return business
}

module.exports = { CreateBusiness, UpdateBusiness }
