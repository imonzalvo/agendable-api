const { objectType } = require('@nexus/schema')
const BranchType = require('nexus-prisma').Branch

const Branch = objectType({
  name: 'Branch',
  definition(t) {
    t.field(BranchType.id)
    t.field(BranchType.address)
    t.field(BranchType.phone)
    t.field(BranchType.email)
    t.field(BranchType.name)
    t.field(BranchType.description)
    t.field(BranchType.image)
    t.field(BranchType.business)
    t.field(BranchType.services)
    t.field(BranchType.employees)
    t.field(BranchType.bookings)
    t.field(BranchType.categories)
  },
})

module.exports = {
  Branch,
}
