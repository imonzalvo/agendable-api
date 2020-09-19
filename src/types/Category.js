const { objectType } = require('@nexus/schema')

const Category = objectType({
  name: 'Category',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.Business()
    t.model.branches()
    t.model.services()
  },
})

module.exports = {
  Category,
}
