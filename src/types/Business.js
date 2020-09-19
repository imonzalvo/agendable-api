const { objectType } = require('@nexus/schema')

const Business = objectType({
  name: 'Business',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.phone()
    t.model.handle()
    t.model.website()
    t.model.categories()
    t.model.facebookUrl()
    t.model.instagramUrl()
    t.model.owner()
    t.model.landing()
    t.model.branches()
    t.model.services()
  },
})

module.exports = {
  Business,
}
