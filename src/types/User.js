const { objectType, stringArg, intArg } = require('@nexus/schema')

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.givenName()
    t.model.familyName()
    t.model.userType()
    t.model.verifyToken()
    t.model.posts({ pagination: true, filtering: true })
    t.model.business({ pagination: false })
    t.model.bookings({ pagination: false })
    t.list.field('notifications', {
      type: 'Notification',
      nullable: true,
      args: {
        take: intArg(),
        after: stringArg(),
      },
      resolve: (parent, args, ctx) => {
        const paginationQuery = {
          where: { userId: root.id },
          take: args.take,
          orderBy: {
            createdAt: 'desc',
          },
        }
        if (args.after) {
          paginationQuery['cursor'] = { id: args.after }
        }
        return ctx.prisma.notification.findMany(paginationQuery)
      },
    })
  },
})

module.exports = {
  User,
}
