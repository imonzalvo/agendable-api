const { createConnectObject } = require('../../utils')
const CreateEmployee = async (
  parent,
  { givenName, familyName, userId, phone, branchesId, servicesId, businessId },
  ctx,
) => {
  const connectBranches = createConnectObject(branchesId)
  const connectServices = createConnectObject(servicesId)
  const employee = await ctx.prisma.employee.create({
    data: {
      givenName,
      familyName,
      phone,
      user: { connect: userId },
      business: { connect: businessId },
      branches: { connect: connectBranches },
      services: { connect: connectServices },
    },
  })
  return employee
}

const UpdateEmployee = (
  parent,
  { id, givenName, familyName, userId, phone, branchesId, servicesId },
  ctx,
) => {
  const connectBranches = createConnectObject(branchesId)
  const connectServices = createConnectObject(servicesId)

  const employee = ctx.prisma.employee.update({
    where: { id: id },
    data: {
      givenName,
      familyName,
      phone,
      user: { connect: userId },
      branches: { connect: connectBranches },
      services: { connect: connectServices },
    },
  })
  return employee
}

module.exports = { CreateEmployee, UpdateEmployee }
