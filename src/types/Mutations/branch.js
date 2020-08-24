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

const UpdateBranch = (
  parent,
  { id, address, phone, email, name, description, image, servicesId },
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

  if (servicesId) {
    const connectServices = servicesId.map((serviceId) => {
      return {
        id: serviceId,
      }
    })
    branchData['services'] = { connect: connectServices }
  }

  const branch = ctx.prisma.branch.update({
    where: { id: id },
    data: branchData,
  })
  return branch
}

module.exports = { CreateBranch, UpdateBranch }
