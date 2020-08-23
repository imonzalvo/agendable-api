const { inputObjectType } = require('@nexus/schema')

const BookingsWhereType = inputObjectType({
  name: 'BookingsWhereInputType',
  definition(t) {
    t.string('from', { required: true })
    t.string('to', { required: true })
  },
})

module.exports = { BookingsWhereType }
