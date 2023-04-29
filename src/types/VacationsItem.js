const { objectType } = require('@nexus/schema')
const VacationsItemType = require('nexus-prisma').VacationsItem

const VacationsItem = objectType({
  name: VacationsItemType.$name,
  definition(t) {
    t.field(VacationsItemType.id)
    t.field(VacationsItemType.from)
    t.field(VacationsItemType.to)
    t.field(VacationsItemType.employee)
  },
})

module.exports = {
  VacationsItem,
}
