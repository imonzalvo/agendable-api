Object.defineProperty(Array.prototype, 'flat', {
  value: function (depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten,
      )
    }, [])
  },
})

const getBusinessEmployees = async (parent, { id }, ctx) => {
  const { branches } = await ctx.prisma.business.findUnique({
    where: {
      id,
    },
    select: {
      branches: {
        select: {
          employees: true,
        },
      },
    },
  })

  const formattedEmployees = branches.map((branch) => branch.employees).flat()
  const uniqueEmployees = formattedEmployees.filter(
    (v, i, a) => a.findIndex((t) => t.id === v.id) === i,
  )
  return uniqueEmployees
}
module.exports = { getBusinessEmployees }
