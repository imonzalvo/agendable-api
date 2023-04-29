const { objectType } = require('@nexus/schema')
const CategoryType = require('nexus-prisma').Category

const Category = objectType({
  name: 'Category',
  definition(t) {
    t.field(CategoryType.id)
    t.field(CategoryType.name)
    t.field(CategoryType.Business)
    t.field(CategoryType.branches)
  },
})

module.exports = {
  Category,
}
