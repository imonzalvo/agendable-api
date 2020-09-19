const { objectType } = require('@nexus/schema')

const Service = objectType({
  name: 'Service',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.price()
    t.model.currency()
    t.model.duration()
    t.model.branches()
    t.model.description()
    t.model.employees()
    t.model.bookings()
    t.model.category()
  },
})

module.exports = {
  Service,
}
