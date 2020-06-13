const { objectType } = require('@nexus/schema')

const Booking = objectType({
  name: 'Booking',
  definition(t) {
    t.model.id()
    t.model.start()
    t.model.end()
    t.model.status()
    t.model.client()
    t.model.branch()
    t.model.services()
    t.model.employee()
    t.model.clientEmail()
    t.model.clientPhone()
    t.model.clientName()
    t.model.clientFamilyName()
  },
})

module.exports = {
  Booking,
}
