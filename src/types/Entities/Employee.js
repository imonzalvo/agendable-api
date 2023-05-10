const { objectType, stringArg, intArg } = require('nexus')
const { getEmployeeAvailableTime } = require('../Queries/singleQueries/getEmployeeAvailableTime')
const EmployeeType = require('nexus-prisma').Employee

const Employee = objectType({
  name: "Employee",
  definition(t) {
    t.field(EmployeeType.id)
    t.field(EmployeeType.givenName)
    t.field(EmployeeType.familyName)
    t.field(EmployeeType.user)
    t.field(EmployeeType.phone)
    t.field(EmployeeType.services)
    t.field(EmployeeType.branches)
    t.field(EmployeeType.bookings)
    t.field(EmployeeType.availability)
    t.field(EmployeeType.vacations)
    t.field(EmployeeType.business)
    t.list.field('availableTime', {
      type: 'EmployeeAvailableTime',
      nullable: true,
      args: {
        date: stringArg(),
        duration: intArg(),
      },
      resolve: (parent, args, ctx) => getEmployeeAvailableTime(parent, {...args, id: parent.id}, ctx),
    })
  },
})

module.exports = {
  Employee,
}
