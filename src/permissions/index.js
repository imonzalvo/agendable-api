const { rule, shield, allow } = require('graphql-shield')
const { getUserId } = require('../utils')

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
  isAdminUser: rule()(async (parent, args, context) => {
    const userId = getUserId(context)
    const user = await context.prisma.user.findOne({
      where: {
        id: Number(userId),
      },
    })
    return user.userType === 'ADMIN'
  }),
  isPostOwner: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context)
    const author = await context.prisma.post
      .findOne({
        where: {
          id: Number(id),
        },
      })
      .author()
    return userId === author.id
  }),
  isBusinessOwner: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context)
    const owner = await context.prisma.business
      .findOne({
        where: {
          id: Number(id),
        },
      })
      .owner()
    return userId === owner.id
  }),
  isBranchBusinessOwner: rule()(async (parent, { id, branchId }, context) => {
    const userId = getUserId(context)
    branch = branchId ? branchId : id
    const owner = await context.prisma.branch
      .findOne({
        where: {
          id: Number(branch),
        },
      })
      .business()
      .owner()
    return userId === owner.id
  }),
  branchesOwner: rule()(async (parent, { branchesId }, context) => {
    const userId = getUserId(context)
    const userBusiness = await context.prisma.user
      .findOne({
        where: {
          id: Number(userId),
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
}

const permissions = shield(
  {
    Query: {
      me: rules.isAuthenticatedUser,
      filterPosts: rules.isAuthenticatedUser,
      post: rules.isAuthenticatedUser,
      getBusiness: allow,
      getBusinesses: rules.isAdminUser,
      getBranch: allow,
      getBranches: allow,
      getService: allow,
      getServices: allow,
      getEmployee: allow,
      getEmployees: allow,
      getBooking: rules.isAdminUser,
      getBookings: rules.isAdminUser,
      getBookingsByBranch: rules.isAdminUser,
      getBookingsByBusiness: rules.isAdminUser,
    },
    User: {
      '*': allow,
    },
    Mutation: {
      createDraft: rules.isAuthenticatedUser,
      deletePost: rules.isPostOwner,
      publish: rules.isPostOwner,
      createBusiness: rules.isAdminUser,
      updateBusiness: rules.isBusinessOwner,
      createBranch: rules.isAdminUser,
      updateBranch: rules.isBranchBusinessOwner,
      createService: rules.branchesOwner,
      createEmployee: rules.branchesOwner,
      updateEmployee: rules.isAdminUser,
      createBooking: rules.isBranchBusinessOwner,
    },
  },
  { debug: true },
)

module.exports = {
  permissions,
}
