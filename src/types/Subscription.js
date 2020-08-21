const { withFilter } = require('graphql-subscriptions')
const { stringArg, objectType } = require('@nexus/schema')
const Subscription = objectType({
  name: 'Subscription',
  definition(t) {
    t.field('newBooking', {
      type: 'Booking',
      args: {
        branchId: stringArg({ required: false }),
      },
      subscribe: withFilter(
        (parent, { branchId }, ctx) => ctx.pubsub.asyncIterator('NEW_BOOKING'),
        (payload, { branchId }) => {
          return payload.newBooking.branch.id === branchId
        },
      ),
    })
    t.field('deletedBooking', {
      type: 'Booking',
      args: {
        branchId: stringArg({ required: false }),
      },
      subscribe: withFilter(
        (parent, { branchId }, ctx) =>
          ctx.pubsub.asyncIterator('DELETED_BOOKING'),
        (payload, { branchId }) => {
          return payload.deletedBooking.branch.id === branchId
        },
      ),
    })
    t.field('updatedBooking', {
      type: 'Booking',
      args: {
        branchId: stringArg({ required: false }),
      },
      subscribe: withFilter(
        (parent, { branchId }, ctx) =>
          ctx.pubsub.asyncIterator('UPDATED_BOOKING'),
        (payload, { branchId }) => {
          return payload.updatedBooking.branch.id === branchId
        },
      ),
    })
  },
})

module.exports = {
  Subscription,
}
