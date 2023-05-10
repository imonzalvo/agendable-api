const { inputObjectType } = require('@nexus/schema')

const CreateServicesInputType = inputObjectType({
  name: 'CreateServicesInputType',
  definition(t) {
    t.string('name', { required: true })
    t.float('price', { required: true })
    t.int('duration', { required: true })
    t.string('currency', { required: true })
    t.string('description', { required: true })
  },
})

module.exports = { CreateServicesInputType }
