const { objectType } = require('@nexus/schema')

const Employee = objectType({
  name: 'Employee',
  definition(t) {
    t.model.id()
    t.model.givenName()
    t.model.familyName()
    t.model.user()
    t.model.phone()
    t.model.services()
    t.model.branches()
    t.model.bookings()
  },
})

module.exports = {
  Employee,
}
