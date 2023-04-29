const { objectType } = require('@nexus/schema')
const LandingInfoType = require('nexus-prisma').LandingInfo

const LandingInfo = objectType({
  name: LandingInfoType.$name,
  definition(t) {
    t.field(LandingInfoType.id)
    t.field(LandingInfoType.cta)
    t.field(LandingInfoType.images)
    t.field(LandingInfoType.business)
    t.field(LandingInfoType.displayName)
    t.field(LandingInfoType.description)
  },
})

module.exports = {
  LandingInfo,
}
