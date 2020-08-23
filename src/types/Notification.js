const { objectType } = require('@nexus/schema')

const Notification = objectType({
  name: 'Notification',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.type()
    t.model.seen()
    t.model.createdAt()
    t.model.user({ pagination: false })
  },
})

module.exports = {
  Notification,
}
