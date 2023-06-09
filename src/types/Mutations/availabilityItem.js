const CreateAvailabilityItem = (parent, { day, from, to, employeeId }, ctx) => {
  const availabilityItem = ctx.prisma.availabilityItem.create({
    data: {
      day,
      from,
      to,
      employee: { connect: { id: employeeId } },
    },
  })
  return availabilityItem
}

const UpdateAvailabilityItem = (parent, { id, day, from, to }, ctx) => {
  const business = ctx.prisma.availabilityItem.update({
    where: { id: id },
    data: {
      day,
      from,
      to,
    },
  })
  return business
}

module.exports = { CreateAvailabilityItem, UpdateAvailabilityItem }
