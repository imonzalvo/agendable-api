const { objectType } = require('@nexus/schema')

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.givenName()
    t.model.familyName()
    t.model.userType()
    t.model.posts({ pagination: false })
    t.model.business({ pagination: false })
    t.model.bookings({ pagination: false })
  },
})

module.exports = {
  User,
}
