const { objectType } = require('@nexus/schema')
const BusinessImageType = require('nexus-prisma').BusinessImage

const BusinessImage = objectType({
  name: BusinessImageType.$name,
  definition(t) {
    t.field(BusinessImageType.id)
    t.field(BusinessImageType.url)
    t.field(BusinessImageType.landingInfo)
  },
})

module.exports = {
  BusinessImage,
}
