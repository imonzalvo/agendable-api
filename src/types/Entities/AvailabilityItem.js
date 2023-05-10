const { objectType } = require('@nexus/schema')
const AvailabilityItemType = require('nexus-prisma').AvailabilityItem

const AvailabilityItem = objectType({
  name: AvailabilityItemType.$name,
  definition(t) {
    t.field(AvailabilityItemType.id)
    t.field(AvailabilityItemType.day)
    t.field(AvailabilityItemType.from)
    t.field(AvailabilityItemType.to)
    t.field(AvailabilityItemType.employee)
  },
})

module.exports = {
  AvailabilityItem,
}
