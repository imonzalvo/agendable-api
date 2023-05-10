const { objectType } = require('@nexus/schema')
const { EmployeeAvailableTime } =  require('./EmployeeAvailableTime');

const EmployeesAvailableTime = objectType({
  name: 'EmployeesAvailableTime',
  definition(t) {
    t.string('id')
    t.list.field('availability', { type: EmployeeAvailableTime })
  },
})

module.exports = {
  EmployeesAvailableTime,
}
