const { objectType, stringArg, intArg } = require('@nexus/schema')
const UserType = require('nexus-prisma').User

const User = objectType({
  name: UserType.$name,
  definition(t) {
    t.field(UserType.id)
    t.field(UserType.name)
    t.field(UserType.phone)
    t.field(UserType.email)
    t.field(UserType.givenName)
    t.field(UserType.familyName)
    t.field(UserType.userType)
    t.field(UserType.verifyToken)
    t.field(UserType.posts)
    t.field(UserType.business)
    t.field(UserType.bookings)
    t.list.field('notifications', {
      type: 'Notification',
      nullable: true,
      args: {
        take: intArg(),
        after: stringArg(),
      },
      resolve: (parent, args, ctx) => {
        const paginationQuery = {
          where: { userId: parent.id },
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
