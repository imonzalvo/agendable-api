const { objectType } = require('@nexus/schema')
const BookingType = require('nexus-prisma').Booking

const Booking = objectType({
  name: 'Booking',
  definition(t) {
    t.field(BookingType.id)
    t.field(BookingType.start)
    t.field(BookingType.end)
    t.field(BookingType.status)
    t.field(BookingType.client)
    t.field(BookingType.branch)
    t.field(BookingType.services)
    t.field(BookingType.employee)
    t.field(BookingType.clientEmail)
    t.field(BookingType.clientPhone)
    t.field(BookingType.clientName)
    t.field(BookingType.clientFamilyName)
  },
})

module.exports = {
  Booking,
}
