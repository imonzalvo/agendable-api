const { objectType } = require('@nexus/schema')

const Business = objectType({
  name: 'Business',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.phone()
    t.model.handle()
    t.model.owner()
    t.model.branches()
  },
})

module.exports = {
  Business,
}
