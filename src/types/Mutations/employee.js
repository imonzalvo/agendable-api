const { createConnectObject, getUserId } = require('../../utils')
const CreateEmployee = async (
  parent,
  {
    givenName,
    familyName,
    userId,
    phone,
    branchesId,
    servicesId,
    businessId,
    availabilityItems,
  },
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
      business: { connect: { id: businessId } },
      branches: { connect: connectBranches },
      services: { connect: connectServices },
    },
  })

  if (!!availabilityItems) {
    await Promise.all(
      availabilityItems.map((availabilityItem) => {
        return ctx.prisma.availabilityItem.create({
          data: {
            day: availabilityItem.day,
            from: availabilityItem.from,
            to: availabilityItem.to,
            employee: { connect: { id: employee.id } },
          },
        })
      }),
    )
  }

  return employee
}

const SetUpEmployees = async (parent, { data: employeesData }, ctx) => {
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
          services: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  })

  const createdEmployees = await Promise.all(
    employeesData.map((employee) =>
      ctx.prisma.employee.create({
        data: {
          givenName: employee.givenName,
          familyName: employee.familyName,
          phone: employee.phone,
          branches: { connect: business.branches },
          business: { connect: { id: business.id } },
          services: { connect: business.services },
        },
      }),
    ),
  )

  const createdAvailabilityItems = await Promise.all(
    employeesData.map((employee) => {
      return Promise.all(
        employee.availabilityItems.map((availabilityItem) => {
          const employee = createdEmployees.find(
            (employee) =>
              employee.givenName == employee.givenName &&
              employee.familyName == employee.familyName,
          )

          return ctx.prisma.availabilityItem.create({
            data: {
              day: availabilityItem.day,
              from: availabilityItem.from,
              to: availabilityItem.to,
              employee: { connect: { id: employee.id } },
            },
          })
        }),
      )
    }),
  )
  return createdEmployees
}

const UpdateEmployee = async (
  parent,
  {
    id,
    givenName,
    familyName,
    userId,
    phone,
    branchesId,
    servicesId,
    availabilityItems,
  },
  ctx,
) => {
  const connectBranches = createConnectObject(branchesId)
  const connectServices = createConnectObject(servicesId)

  const existingAvailabilityItems = await ctx.prisma.availabilityItem.findMany({
    where: { employeeId: id },
  })

  if (!!availabilityItems) {
    // Create new availability items
    const newAvailabilityItems = availabilityItems.filter((item) => !item.id)

    await Promise.all(
      newAvailabilityItems.map((availabilityItem) => {
        return ctx.prisma.availabilityItem.create({
          data: {
            day: availabilityItem.day,
            from: availabilityItem.from,
            to: availabilityItem.to,
            employee: { connect: { id } },
          },
        })
      }),
    )

    // Delete old availability items
    const removedAvailabilityItems = existingAvailabilityItems.filter(
      ({ id: id1 }) => !availabilityItems.some(({ id: id2 }) => id2 === id1),
    )
    await Promise.all(
      removedAvailabilityItems.map((availabilityItem) => {
        return ctx.prisma.availabilityItem.delete({
          where: { id: availabilityItem.id },
        })
      }),
    )

    // Update modified availability items
    const modifiedAvailabilityItems = availabilityItems.filter(
      ({ id: id1, from: oldFrom, to: oldTo }) => {
        const newItem = existingAvailabilityItems.find((item) => item.id == id1)
        if (!newItem) {
          return false
        }
        const isModified = newItem.from != oldFrom || newItem.to != oldTo

        return isModified
      },
    )

    await Promise.all(
      modifiedAvailabilityItems.map((availabilityItem) => {
        return ctx.prisma.availabilityItem.update({
          where: { id: availabilityItem.id },
          data: {
            from: availabilityItem.from,
            to: availabilityItem.to,
            day: availabilityItem.day,
          },
        })
      }),
    )
  }

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

const DeleteEmployee = (parent, { id }, ctx) => {
  const employee = ctx.prisma.employee.delete({
    where: { id },
  })
  return employee
}

module.exports = {
  CreateEmployee,
  UpdateEmployee,
  SetUpEmployees,
  DeleteEmployee,
}
