const { objectType, stringArg, intArg } = require('nexus')
const { getEmployeeAvailableTime } = require('./Queries/singleQueries/getEmployeeAvailableTime')

const Employee = objectType({
  name: 'Employee',
  definition(t) {
    t.model.id()
    t.model.givenName()
    t.model.familyName()
    t.model.user()
    t.model.phone()
    t.model.services()
    t.model.branches()
    t.model.bookings()
    t.model.availability()
    t.model.vacations()
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
