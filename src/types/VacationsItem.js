const { objectType } = require('@nexus/schema')

const VacationsItem = objectType({
  name: 'VacationsItem',
  definition(t) {
    t.model.id()
    t.model.from()
    t.model.to()
    t.model.employee()
  },
})

module.exports = {
  VacationsItem,
}
