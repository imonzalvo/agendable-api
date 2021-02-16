const getEmployee = (parent, { id }, ctx) => {
  return ctx.prisma.employee.findUnique({
    where: {
      id: id,
    },
  });
}

const getEmployees = (parent, ctx) => {
  return ctx.prisma.employee.findMany()
}

module.exports = { getEmployee, getEmployees }
