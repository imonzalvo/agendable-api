const { rule, shield, allow, deny } = require('graphql-shield')
const { getUserId } = require('../utils')

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const authHeader = context.req.get('Authorization')

    const userId = getUserId(context.req)
    return Boolean(userId)
  }),
  isAdminUser: rule()(async (parent, args, context) => {
    const authHeader = context.req.get('Authorization')

    const userId = getUserId(context.req)
    const user = await context.prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    return user.userType === 'ADMIN'
  }),
  isBookingBusinessAdminUser: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context.req)
    if (!userId) {
      return false
    }
    const user = await context.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        userType: true,
        business: {
          select: {
            id: true,
          },
        },
      },
    })
    if (!user.business) {
      return false
    }
    const booking = await context.prisma.booking.findUnique({
      where: { id },
      select: {
        branch: {
          select: {
            business: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    })
    if (!booking) {
      return true
    }
    const isBusinessAdmin = user.business.id === booking.branch.business.id
    return isBusinessAdmin && user.userType === 'ADMIN'
  }),
  isPostOwner: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context.req)
    const author = await context.prisma.post
      .findUnique({
        where: {
          id: id,
        },
      })
      .author()
    return userId === author.id
  }),
  isNotOwner: rule()(async (parent, args, context) => {
    const userId = getUserId(context.req)
    
    if (!userId) {
      return false
    }
    const user = await context.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        userType: true,
        business: {
          select: {
            id: true,
          },
        },
      },
    })
    
    return !user.business
  }),
  isBusinessOwner: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context.req)
    const owner = await context.prisma.business
      .findUnique({
        where: {
          id: id,
        },
      })
      .owner()
    return userId === owner.id
  }),
  isEmployeeEmployer: rule()(async (parent, { employeeId }, context) => {
    const userId = getUserId(context.req)
    const user = await context.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        business: {
          include: {
            branches: {
              include: {
                employees: true,
              },
            },
          },
        },
      },
    })
    const isEmployer = user.business.branches.some((branch) => {
      return branch.employees.some((employee) => employee.id === employeeId)
    })
    return isEmployer
  }),
  isBranchBusinessOwner: rule()(async (parent, { id, branchId }, context) => {
    const userId = getUserId(context.req)
    if (!userId) {
      return false
    }
    branch = branchId ? branchId : id
    const owner = await context.prisma.branch
      .findUnique({
        where: {
          id: branch,
        },
      })
      .business()
      .owner()
    return userId === owner.id
  }),
  branchesOwner: rule()(async (parent, { branchesId }, context) => {
    const userId = getUserId(context.req)
    const userBusiness = await context.prisma.user
      .findUnique({
        where: {
          id: userId,
        },
      })
      .business()
    const branchesBusiness = await context.prisma.branch.findMany({
      where: {
        id: {
          in: branchesId,
        },
      },
      select: {
        business: {
          select: { id: true },
        },
      },
    })

    const reducer = (acc, current) => {
      return acc && current.business.id == userBusiness.id
    }

    const areBranchesFromUserBusiness = branchesBusiness.reduce(reducer, true)
    return areBranchesFromUserBusiness
  }),

  //Fields
  //Branch -> Bookings
  branchBookings: rule()(async ({ id }, args, context) => {
    const userId = getUserId(context.req)
    if (!userId) {
      return false
    }
    const owner = await context.prisma.branch
      .findUnique({
        where: {
          id,
        },
      })
      .business()
      .owner()
    return userId === owner.id
  }),
}

const permissions = shield(
  {
    Query: {
      me: rules.isAuthenticatedUser,
      filterPosts: rules.isAuthenticatedUser,
      post: rules.isAuthenticatedUser,
      getBusiness: allow,
      getBusinesses: deny,
      getBranch: allow,
      getBranches: allow,
      getService: allow,
      getServices: allow,
      getEmployee: allow,
      getEmployees: allow,
      getBooking: rules.isBookingBusinessAdminUser,
      getBookings: deny,
      getBookingsByBranch: rules.isBranchBusinessOwner,
      getBookingsByBusiness: rules.isBusinessOwner,
    },
    User: {
      '*': allow,
    },
    Branch: {
      bookings: rules.branchBookings,
    },
    Mutation: {
      createDraft: rules.isAuthenticatedUser,
      deletePost: rules.isPostOwner,
      publish: rules.isPostOwner,
      createBusiness: rules.isNotOwner,
      setUpBusiness: rules.isNotOwner,
      updateBusiness: rules.isBusinessOwner,
      createBranch: rules.isAdminUser,
      updateBranch: rules.isBranchBusinessOwner,
      deleteBooking: rules.isBookingBusinessAdminUser,
      updateBooking: rules.isBookingBusinessAdminUser,
      createService: rules.branchesOwner,
      setUpServices: rules.isAdminUser,
      createEmployee: rules.branchesOwner,
      updateEmployee: rules.isAdminUser,
      createBooking: allow,
      createAvailabilityItem: rules.isEmployeeEmployer,
      createVacationsItem: rules.isEmployeeEmployer,
    },
  },
  { debug: true },
)

module.exports = {
  permissions,
}
