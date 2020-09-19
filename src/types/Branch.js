const { objectType } = require('@nexus/schema')

const Branch = objectType({
  name: 'Branch',
  definition(t) {
    t.model.id()
    t.model.address()
    t.model.phone()
    t.model.email()
    t.model.name()
    t.model.description()
    t.model.image()
    t.model.business()
    t.model.services()
    t.model.employees()
    t.model.bookings()
    t.model.categories()
  },
})

module.exports = {
  Branch,
}
