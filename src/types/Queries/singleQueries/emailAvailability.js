const emailAvailability = async (parent, { email }, ctx) => {
  const usersWithEmail = await ctx.prisma.user.findMany({
    where: {
      email: email,
    },
  })
  return usersWithEmail.length === 0
}

module.exports = { emailAvailability }
