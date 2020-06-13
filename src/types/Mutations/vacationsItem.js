const CreateVacationsItem = (parent, { from, to, employeeId }, ctx) => {
  const vacationsItem = ctx.prisma.vacationsItem.create({
    data: {
      from,
      to,
      employee: { connect: { id: Number(employeeId) } },
    },
  })
  return vacationsItem
}

const UpdateVacationsItem = (parent, { id, from, to }, ctx) => {
  const vacationsItem = ctx.prisma.vacationsItem.update({
    where: { id: Number(id) },
    data: {
      from,
      to,
    },
  })
  return vacationsItem
}

module.exports = { CreateVacationsItem, UpdateVacationsItem }
