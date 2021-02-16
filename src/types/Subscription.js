// const { withFilter } = require('graphql-yoga')
const { stringArg, objectType, subscriptionType, field } = require('nexus')
const Subscription = subscriptionType({
  name: 'Subscription',
  definition(t) {
    t.field('newBooking', {
      type: 'Booking',
      args: {
        branchId: stringArg({ required: false }),
      },
      subscribe(_root, _args, ctx) {
        return ctx.pubsub.asyncIterator('NEW_BOOKING')
      },
      resolve(payload, {branchId}) {
        console.log("resolving", payload, branchId)
        if(payload.newBooking.branch.id === branchId) {
          return payload.newBooking
        }
      },
    })
    t.field('deletedBooking', {
      type: 'Booking',
      args: {
        branchId: stringArg({ required: false }),
      },
      subscribe(_root, _args, ctx) {
        return ctx.pubsub.asyncIterator('DELETED_BOOKING')
      },
      resolve(payload, {branchId}) {
        console.log("resolving", payload, branchId)
        if(payload.deletedBooking.branch.id === branchId) {
          return payload.deletedBooking
        }
      },
    })
    t.field('updatedBooking', {
      type: 'Booking',
      args: {
        branchId: stringArg({ required: false }),
      },
      subscribe(_root, _args, ctx) {
        return ctx.pubsub.asyncIterator('UPDATED_BOOKING')
      },
      resolve(payload, {branchId}) {
        console.log("resolving", payload, branchId)
        if(payload.updatedBooking.branch.id === branchId) {
          return payload.updatedBooking
        }
      },
    })
  },
})

module.exports = {
  Subscription,
}