const { inputObjectType } = require('@nexus/schema')

const LandingInfoInputType = inputObjectType({
  name: 'LandingInfoInputType',
  definition(t) {
    t.string('cta', { required: false })
    t.string('website', { required: false })
    t.string('businessId', { required: true })
    t.list.string('imagesUrl', { required: true })
    t.string('displayName', { required: true })
    t.string('description', { required: true })
    t.string('facebookUrl', { required: false })
    t.string('instagramUrl', { required: false })
  },
})

module.exports = { LandingInfoInputType }
