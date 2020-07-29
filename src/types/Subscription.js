const { withFilter } = require('graphql-yoga')
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
        (parent, { branchId }, ctx) =>
          ctx.pubsub.asyncIterator('PUBLISHED_POST'),
        (payload, { branchId }) => payload.newBooking.branch.id === branchId,
      ),
    })
  },
})

module.exports = {
  Subscription,
}
