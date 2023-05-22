const { inputObjectType } = require('@nexus/schema')

const CreateEmployeesInputType = inputObjectType({
  name: 'CreateEmployeesInputType',
  definition(t) {
    t.string('givenName', { required: true })
    t.string('familyName', { required: true })
    t.string('phone', { required: false })
    t.field('availabilityItems', {
      type: AvailabilityItemEmployeeInputType,
      list: true,
    })
  },
})

const AvailabilityItemEmployeeInputType = inputObjectType({
  name: 'AvailabilityItemEmployeeInputType',
  definition(t) {
    t.string('day', { required: true })
    t.string('from', { required: true })
    t.string('to', { required: true })
  },
})

module.exports = { CreateEmployeesInputType, AvailabilityItemEmployeeInputType }
