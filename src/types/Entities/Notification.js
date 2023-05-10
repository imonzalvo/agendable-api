const { objectType } = require('@nexus/schema')
const NotificationType = require('nexus-prisma').Notification

const Notification = objectType({
  name: 'Notification',
  definition(t) {
    t.field(NotificationType.id)
    t.field(NotificationType.title)
    t.field(NotificationType.type)
    t.field(NotificationType.seen)
    t.field(NotificationType.createdAt)
    t.field(NotificationType.user)
  },
})

module.exports = {
  Notification,
}
