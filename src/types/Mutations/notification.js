const UpdateNotification = (parent, { id, seen }, ctx) => {
  const notification = ctx.prisma.notification.update({
    where: { id: id },
    data: {
      seen,
    },
  })
  return notification
}

module.exports = { UpdateNotification }
