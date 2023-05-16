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
const { asNexusMethod } = require('nexus');
const { ServiceList } = require('./UtilityTypes/ServiceList');
const { EmployeeList } = require('./UtilityTypes/EmployeeList');
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
EmployeeList,
asNexusMethod(jsonScalar, 'json'), asNexusMethod(dateTimeScalar, 'dateTime')
  ],
}