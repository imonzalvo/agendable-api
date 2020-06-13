const getEmployee = (parent, { id }, ctx) => {
  return ctx.prisma.employee.findOne({
    where: {
      id: id,
    },
  })
}

const getEmployees = (parent, ctx) => {
  return ctx.prisma.employee.findMany()
}

module.exports = { getEmployee, getEmployees }
