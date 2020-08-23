const { objectType } = require('@nexus/schema')

const BusinessImage = objectType({
  name: 'BusinessImage',
  definition(t) {
    t.model.id()
    t.model.url()
    t.model.LandingInfo()
  },
})

module.exports = {
  BusinessImage,
}
