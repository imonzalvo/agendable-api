const { objectType } = require('@nexus/schema')
const { Employee } = require('../Entities/Employee')
const EmployeeList = objectType({
  name: 'EmployeeList',
  definition(t) {
    t.list.field('employees', {
      type: Employee,
      resolve(root, args, ctx) {
        return root
      },
    })
  },
})

module.exports = {
  EmployeeList,
}
