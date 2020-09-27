const { idArg, queryType, stringArg, intArg } = require('@nexus/schema')
const { getUserId } = require('../utils')
const { me } = require('./Queries/user')
const {
  getBusinesses,
  getBusiness,
  getBusinessByHandle,
} = require('./Queries/business')
const { getBranches, getBranch } = require('./Queries/branch')
const { getServices, getService } = require('./Queries/service')
const { getEmployees, getEmployee } = require('./Queries/employee')
const {
  getEmployeeAvailableTime,
} = require('./Queries/singleQueries/getEmployeeAvailableTime')
const {
  emailAvailability,
} = require('./Queries/singleQueries/emailAvailability')
const {
  getEmployeeAvailableDays,
} = require('./Queries/singleQueries/getEmployeeAvailableDays')
const {
  getBusinessEmployees,
} = require('./Queries/singleQueries/getBusinessEmployees')
const {
  getBookings,
  getBooking,
  getBookingsByDate,
  getBookingsByBranch,
  getBookingsByBusiness,
} = require('./Queries/booking')
const {
  getAvailabilityItem,
  getAvailabilityItems,
} = require('./Queries/availabilityItem')
const {
  getVacationsItem,
  getVacationsItems,
} = require('./Queries/vacationsItem')

const { BookingsWhereType } = require('./Inputs/BookingsWhereInputType')
const Query = queryType({
  definition(t) {
    t.field('me', me)

    t.field('getBusiness', {
      type: 'Business',
      nullable: true,
      args: {
        id: stringArg(),
      },
      resolve: (parent, args, ctx) => getBusiness(parent, args, ctx),
    })

    t.field('getBusinessByHandle', {
      type: 'Business',
      nullable: true,
      args: {
        handle: stringArg(),
      },
      resolve: (parent, args, ctx) => getBusinessByHandle(parent, args, ctx),
    })

    t.list.field('getBusinesses', {
      type: 'Business',
      nullable: true,
      resolve: (parent, args, ctx) => getBusinesses(parent, ctx),
    })

    t.field('getBranch', {
      type: 'Branch',
      nullable: true,
      args: {
        id: stringArg(),
      },
      resolve: (parent, args, ctx) => getBranch(parent, args, ctx),
    })

    t.list.field('getBranches', {
      type: 'Branch',
      nullable: true,
      resolve: (parent, args, ctx) => getBranches(parent, ctx),
    })

    t.field('getService', {
      type: 'Service',
      nullable: true,
      args: {
        id: stringArg(),
      },
      resolve: (parent, args, ctx) => getService(parent, args, ctx),
    })

    t.list.field('getServices', {
      type: 'Service',
      nullable: true,
      resolve: (parent, args, ctx) => getServices(parent, ctx),
    })

    t.field('getEmployee', {
      type: 'Employee',
      nullable: true,
      args: {
        id: stringArg(),
      },
      resolve: (parent, args, ctx) => getEmployee(parent, args, ctx),
    })

    t.list.field('getEmployees', {
      type: 'Employee',
      nullable: true,
      resolve: (parent, args, ctx) => getEmployees(parent, ctx),
    })

    t.field('getBooking', {
      type: 'Booking',
      nullable: true,
      args: {
        id: stringArg(),
      },
      resolve: (parent, args, ctx) => getBooking(parent, args, ctx),
    })

    t.list.field('getBookings', {
      type: 'Booking',
      args: {
        where: BookingsWhereType,
      },
      nullable: true,
      resolve: (parent, args, ctx) => getBookings(parent, ctx),
    })

    t.list.field('getBookingsByBranch', {
      type: 'Booking',
      args: {
        branchId: stringArg(),
      },
      nullable: true,
      resolve: (parent, args, ctx) => getBookingsByBranch(parent, args, ctx),
    })

    t.list.field('getBookingsByBusiness', {
      type: 'Booking',
      args: {
        id: stringArg(),
      },
      nullable: true,
      resolve: (parent, args, ctx) => getBookingsByBusiness(parent, args, ctx),
    })

    t.list.field('getBookingsByDate', {
      type: 'Booking',
      args: {
        branchId: stringArg(),
        employeeId: stringArg(),
        startDate: stringArg({ required: true }),
        endDate: stringArg({ required: true }),
      },
      nullable: true,
      resolve: (parent, args, ctx) => getBookingsByDate(parent, args, ctx),
    })

    t.field('getAvailabilityItem', {
      type: 'AvailabilityItem',
      args: {
        id: idArg(),
      },
      nullable: true,
      resolve: (parent, args, ctx) => getAvailabilityItem(parent, args, ctx),
    })

    t.list.field('getAvailabilityItems', {
      type: 'AvailabilityItem',
      nullable: true,
      resolve: (parent, args, ctx) => getAvailabilityItems(parent, ctx),
    })

    t.field('getVacationsItem', {
      type: 'VacationsItem',
      args: {
        id: idArg(),
      },
      nullable: true,
      resolve: (parent, args, ctx) => getVacationsItem(parent, args, ctx),
    })

    t.list.field('getVacationsItems', {
      type: 'VacationsItem',
      nullable: true,
      resolve: (parent, args, ctx) => getVacationsItems(parent, ctx),
    })

    t.list.field('getEmployeeAvailableTime', {
      type: 'EmployeeAvailableTime',
      nullable: true,
      args: {
        id: idArg(),
        date: stringArg(),
        duration: intArg(),
      },
      resolve: (parent, args, ctx) =>
        getEmployeeAvailableTime(parent, args, ctx),
    })

    t.list.string('getEmployeeAvailableDays', {
      // type: 'EmployeeAvailableDays',
      nullable: true,
      args: {
        employeeId: idArg(),
        startDate: stringArg(),
        endDate: stringArg(),
      },
      resolve: (parent, args, ctx) =>
        getEmployeeAvailableDays(parent, args, ctx),
    })

    t.field('emailAvailability', {
      type: 'Boolean',
      nullable: true,
      args: {
        email: stringArg(),
      },
      resolve: (parent, args, ctx) => emailAvailability(parent, args, ctx),
    })

    t.list.field('getBusinessEmployees', {
      type: 'Employee',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (parent, args, ctx) => getBusinessEmployees(parent, args, ctx),
    })

    t.list.field('feed', {
      type: 'Post',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.post.findMany({
          where: { published: true },
        })
      },
    })

    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.post.findMany({
          where: {
            OR: [
              {
                title: {
                  contains: searchString,
                },
              },
              {
                content: {
                  contains: searchString,
                },
              },
            ],
          },
        })
      },
    })

    t.field('post', {
      type: 'Post',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.post.findOne({
          where: {
            id: Number(id),
          },
        })
      },
    })
  },
})

module.exports = {
  Query,
}
