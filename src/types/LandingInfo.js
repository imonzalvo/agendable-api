const { objectType } = require('@nexus/schema')

const LandingInfo = objectType({
  name: 'LandingInfo',
  definition(t) {
    t.model.id()
    t.model.cta()
    t.model.images()
    t.model.business()
    t.model.displayName()
    t.model.description()
  },
})

module.exports = {
  LandingInfo,
}
