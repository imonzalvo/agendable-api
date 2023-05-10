const { objectType } = require('@nexus/schema')
const { Service } = require('../Entities/Service')
const ServiceList = objectType({
  name: 'ServiceList',
  definition(t) {
    t.list.field('services', {
      type: Service,
      resolve(root, args, ctx) {
        return root
      },
    })
  },
})

module.exports = {
  ServiceList,
}
