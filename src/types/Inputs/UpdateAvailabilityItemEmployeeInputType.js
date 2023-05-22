const { inputObjectType } = require('@nexus/schema')

const UpdateAvailabilityItemEmployeeInputType = inputObjectType({
  name: 'UpdateAvailabilityItemEmployeeInputType',
  definition(t) {
    t.string('id', { required: false })
    t.string('day', { required: true })
    t.string('from', { required: true })
    t.string('to', { required: true })
  },
})

module.exports = { UpdateAvailabilityItemEmployeeInputType }
