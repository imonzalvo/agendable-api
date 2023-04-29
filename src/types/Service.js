const { objectType } = require('@nexus/schema')
const ServiceType = require('nexus-prisma').Service

const Service = objectType({
  name: 'Service',
  definition(t) {
    t.field(ServiceType.id)
    t.field(ServiceType.name)
    t.field(ServiceType.price)
    t.field(ServiceType.currency)
    t.field(ServiceType.duration)
    t.field(ServiceType.branches)
    t.field(ServiceType.description)
    t.field(ServiceType.employees)
    t.field(ServiceType.bookings)
  },
})

module.exports = {
  Service,
}
