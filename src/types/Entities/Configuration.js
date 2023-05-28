const { objectType } = require('@nexus/schema')
const ConfigurationType = require('nexus-prisma').Configuration

const Configuration = objectType({
  name: 'Configuration',
  definition(t) {
    t.field(ConfigurationType.id)
    t.field(ConfigurationType.business)
    t.field(ConfigurationType.enableEmailsNotifications)
    t.field(ConfigurationType.scheduleMinutesSeparation)
  },
})

module.exports = {
  Configuration,
}
