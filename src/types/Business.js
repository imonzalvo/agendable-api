const { objectType } = require('@nexus/schema')
const BusinessType = require('nexus-prisma').Business


const Business = objectType({
  name: BusinessType.$name,
  definition(t) {
    t.field(BusinessType.id)
    t.field(BusinessType.name)
    t.field(BusinessType.email)
    t.field(BusinessType.phone)
    t.field(BusinessType.handle)
    t.field(BusinessType.website)
    t.field(BusinessType.categories)
    t.field(BusinessType.facebookUrl)
    t.field(BusinessType.instagramUrl)
    t.field(BusinessType.owner)
    t.field(BusinessType.landing)
    t.field(BusinessType.branches)
    t.field(BusinessType.services)
    t.field(BusinessType.employee)
  },
})

module.exports = {
  Business,
}
