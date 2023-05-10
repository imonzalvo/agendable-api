const { objectType } = require('@nexus/schema')

const EmployeeAvailableTime = objectType({
  name: 'EmployeeAvailableTime',
  definition(t) {
    t.string('from')
    t.string('to')
  },
})

module.exports = {
  EmployeeAvailableTime,
}
