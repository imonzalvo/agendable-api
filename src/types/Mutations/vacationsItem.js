const CreateVacationsItem = (parent, { from, to, employeeId }, ctx) => {
  const vacationsItem = ctx.prisma.vacationsItem.create({
    data: {
      from,
      to,
      employee: { connect: { id: employeeId } },
    },
  })
  return vacationsItem
}

const UpdateVacationsItem = (parent, { id, from, to }, ctx) => {
  const vacationsItem = ctx.prisma.vacationsItem.update({
    where: { id: id },
    data: {
      from,
      to,
    },
  })
  return vacationsItem
}

module.exports = { CreateVacationsItem, UpdateVacationsItem }
