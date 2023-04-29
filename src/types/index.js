const AuthPayload = require('./AuthPayload');
const Mutation = require('./Mutation');
const Post = require('./Post');
const Query = require('./Query');
const Subscription = require('./Subscription');
const User = require('./User');
const Business = require('./Business');
const Branch = require('./Branch');
const Service = require('./Service');
const Employee = require('./Employee');
const Booking = require('./Booking');
const AvailabilityItem = require('./AvailabilityItem');
const VacationsItem = require('./VacationsItem');
const EmployeeAvailableTime = require('./EmployeeAvailableTime');
const EmployeesAvailableTime = require('./EmployeesAvailableTime');
const Notification = require('./Notification');
const LandingInfo = require('./LandingInfo');
const BusinessImage = require('./BusinessImage');
const Category = require('./Category');
const BookingsWhereInputType = require('./Inputs/BookingsWhereInputType');
const LandingInfoInputType = require('./Inputs/LandingInfoInputType');
const { makeSchema, declarativeWrappingPlugin, asNexusMethod } = require('nexus')
const JSONObjectResolver = require('graphql-scalars').JSONObjectResolver;
const DateTimeResolver = require('graphql-scalars').DateTimeResolver;
const GraphQLScalarType = require('graphql').GraphQLScalarType

const jsonScalar = new GraphQLScalarType({
  ...JSONObjectResolver,
  // Override the default 'JsonObject' name with one that matches what Nexus Prisma expects.
  name: 'Json',
})
 
const dateTimeScalar = new GraphQLScalarType(DateTimeResolver)


module.exports = {
  types: [
AuthPayload,
Mutation,
Post,
Query,
Subscription,
User,
Business,
Branch,
Service,
Employee,
Booking,
AvailabilityItem,
VacationsItem,
EmployeeAvailableTime,
EmployeesAvailableTime,
Notification,
LandingInfo,
BusinessImage,
Category,
BookingsWhereInputType,
LandingInfoInputType,
asNexusMethod(jsonScalar, 'json'), asNexusMethod(dateTimeScalar, 'dateTime')
  ],
}

// module.exports = {
//   ...require('./AuthPayload'),
//   ...require('./Mutation'),
//   ...require('./Post'),
//   ...require('./Query'),
//   ...require('./Subscription'),
//   ...require('./User'),
//   ...require('./Business'),
//   ...require('./Branch'),
//   ...require('./Service'),
//   ...require('./Employee'),
//   ...require('./Booking'),
//   ...require('./AvailabilityItem'),
//   ...require('./VacationsItem'),
//   ...require('./EmployeeAvailableTime'),
//   ...require('./EmployeesAvailableTime'),
//   ...require('./Notification'),
//   ...require('./LandingInfo'),
//   ...require('./BusinessImage'),
//   ...require('./Category'),
//   ...require('./Inputs/BookingsWhereInputType'),
//   ...require('./Inputs/LandingInfoInputType'),
// }
