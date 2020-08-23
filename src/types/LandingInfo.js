const { objectType } = require('@nexus/schema')

const LandingInfo = objectType({
  name: 'LandingInfo',
  definition(t) {
    t.model.id()
    t.model.cta()
    t.model.images()
    t.model.website()
    t.model.business()
    t.model.displayName()
    t.model.description()
    t.model.facebookUrl()
    t.model.instagramUrl()
  },
})

module.exports = {
  LandingInfo,
}
