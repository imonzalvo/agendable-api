const AuthPayload = require('./AuthPayload');
const Mutation = require('./Mutation');
const Post = require('./Entities/Post');
const Query = require('./Query');
const Subscription = require('./Subscription');
const User = require('./Entities/User');
const Business = require('./Entities/Business');
const Branch = require('./Entities/Branch');
const Service = require('./Entities/Service');
const Employee = require('./Entities/Employee');
const Booking = require('./Entities/Booking');
const AvailabilityItem = require('./Entities/AvailabilityItem');
const VacationsItem = require('./Entities/VacationsItem');
const EmployeeAvailableTime = require('./UtilityTypes/EmployeeAvailableTime');
const EmployeesAvailableTime = require('./UtilityTypes/EmployeesAvailableTime');
const Notification = require('./Entities/Notification');
const LandingInfo = require('./Entities/LandingInfo');
const BusinessImage = require('./Entities/BusinessImage');
const Category = require('./Entities/Category');
const BookingsWhereInputType = require('./Inputs/BookingsWhereInputType');
const LandingInfoInputType = require('./Inputs/LandingInfoInputType');
const CreateServicesInputType = require('./Inputs/CreateServicesInputType');
const { makeSchema, declarativeWrappingPlugin, asNexusMethod } = require('nexus');
const { ServiceList } = require('./UtilityTypes/ServiceList');
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
CreateServicesInputType,
ServiceList,
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
