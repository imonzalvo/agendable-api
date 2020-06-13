const { getUserId } = require('../../utils')

const me = {
  type: 'User',
  nullable: true,
  resolve: (parent, args, ctx) => {
    const userId = getUserId(ctx)
    return ctx.prisma.user.findOne({
      where: {
        id: userId,
      },
    })
  },
}

module.exports = { me }
