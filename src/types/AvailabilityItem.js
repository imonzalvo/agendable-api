const { objectType } = require('@nexus/schema')

const AvailabilityItem = objectType({
  name: 'AvailabilityItem',
  definition(t) {
    t.model.id()
    t.model.day()
    t.model.from()
    t.model.to()
    t.model.employee()
  },
})

module.exports = {
  AvailabilityItem,
}
