/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  BookingStatus: "CANCELLED" | "COMPLETED" | "CONFIRMED" | "PENDING"
  Day: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY"
  UserType: "ADMIN" | "GUEST" | "USER"
}

export interface NexusGenRootTypes {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  AvailabilityItem: { // root type
    day: NexusGenEnums['Day']; // Day!
    from: string; // String!
    id: string; // String!
    to: string; // String!
  }
  Booking: { // root type
    clientEmail?: string | null; // String
    clientFamilyName?: string | null; // String
    clientName?: string | null; // String
    clientPhone?: string | null; // String
    end: string; // String!
    id: string; // String!
    start: string; // String!
    status: NexusGenEnums['BookingStatus']; // BookingStatus!
  }
  Branch: { // root type
    address: string; // String!
    description: string; // String!
    email: string; // String!
    id: string; // String!
    image?: string | null; // String
    name: string; // String!
    phone: string; // String!
  }
  Business: { // root type
    email: string; // String!
    handle: string; // String!
    id: string; // String!
    name: string; // String!
    phone: string; // String!
  }
  Employee: { // root type
    familyName: string; // String!
    givenName: string; // String!
    id: string; // String!
    phone: string; // String!
  }
  EmployeeAvailableTime: { // root type
    from: string; // String!
    to: string; // String!
  }
  Mutation: {};
  Post: { // root type
    content?: string | null; // String
    id: string; // String!
    published: boolean; // Boolean!
    title: string; // String!
  }
  Query: {};
  Service: { // root type
    currency: string; // String!
    description: string; // String!
    duration: number; // Int!
    id: string; // String!
    name: string; // String!
    price: number; // Float!
  }
  Subscription: { // root type
    deletedBooking: NexusGenRootTypes['Booking']; // Booking!
    newBooking: NexusGenRootTypes['Booking']; // Booking!
    updatedBooking: NexusGenRootTypes['Booking']; // Booking!
  }
  User: { // root type
    email: string; // String!
    familyName: string; // String!
    givenName: string; // String!
    id: string; // String!
    name?: string | null; // String
    userType: NexusGenEnums['UserType']; // UserType!
    verifyToken: string; // String!
  }
  VacationsItem: { // root type
    from: string; // String!
    id: string; // String!
    to: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BookingStatus: NexusGenEnums['BookingStatus'];
  Day: NexusGenEnums['Day'];
  UserType: NexusGenEnums['UserType'];
}

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  AvailabilityItem: { // field return type
    day: NexusGenEnums['Day']; // Day!
    employee: NexusGenRootTypes['Employee']; // Employee!
    from: string; // String!
    id: string; // String!
    to: string; // String!
  }
  Booking: { // field return type
    branch: NexusGenRootTypes['Branch']; // Branch!
    client: NexusGenRootTypes['User'] | null; // User
    clientEmail: string | null; // String
    clientFamilyName: string | null; // String
    clientName: string | null; // String
    clientPhone: string | null; // String
    employee: NexusGenRootTypes['Employee']; // Employee!
    end: string; // String!
    id: string; // String!
    services: NexusGenRootTypes['Service'][]; // [Service!]!
    start: string; // String!
    status: NexusGenEnums['BookingStatus']; // BookingStatus!
  }
  Branch: { // field return type
    address: string; // String!
    bookings: NexusGenRootTypes['Booking'][]; // [Booking!]!
    business: NexusGenRootTypes['Business']; // Business!
    description: string; // String!
    email: string; // String!
    employees: NexusGenRootTypes['Employee'][]; // [Employee!]!
    id: string; // String!
    image: string | null; // String
    name: string; // String!
    phone: string; // String!
    services: NexusGenRootTypes['Service'][]; // [Service!]!
  }
  Business: { // field return type
    branches: NexusGenRootTypes['Branch'][]; // [Branch!]!
    email: string; // String!
    handle: string; // String!
    id: string; // String!
    name: string; // String!
    owner: NexusGenRootTypes['User']; // User!
    phone: string; // String!
  }
  Employee: { // field return type
    availability: NexusGenRootTypes['AvailabilityItem'][]; // [AvailabilityItem!]!
    bookings: NexusGenRootTypes['Booking'][]; // [Booking!]!
    branches: NexusGenRootTypes['Branch'][]; // [Branch!]!
    familyName: string; // String!
    givenName: string; // String!
    id: string; // String!
    phone: string; // String!
    services: NexusGenRootTypes['Service'][]; // [Service!]!
    user: NexusGenRootTypes['User'] | null; // User
    vacations: NexusGenRootTypes['VacationsItem'][]; // [VacationsItem!]!
  }
  EmployeeAvailableTime: { // field return type
    from: string; // String!
    to: string; // String!
  }
  Mutation: { // field return type
    confirmUser: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    createAvailabilityItem: NexusGenRootTypes['AvailabilityItem']; // AvailabilityItem!
    createBooking: NexusGenRootTypes['Booking']; // Booking!
    createBranch: NexusGenRootTypes['Branch']; // Branch!
    createBusiness: NexusGenRootTypes['Business']; // Business!
    createDraft: NexusGenRootTypes['Post']; // Post!
    createEmployee: NexusGenRootTypes['Employee']; // Employee!
    createService: NexusGenRootTypes['Service']; // Service!
    createVacationsItem: NexusGenRootTypes['VacationsItem']; // VacationsItem!
    deleteBooking: NexusGenRootTypes['Booking'] | null; // Booking
    deletePost: NexusGenRootTypes['Post'] | null; // Post
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    publish: NexusGenRootTypes['Post'] | null; // Post
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateAvailabilityItem: NexusGenRootTypes['AvailabilityItem']; // AvailabilityItem!
    updateBooking: NexusGenRootTypes['Booking']; // Booking!
    updateBranch: NexusGenRootTypes['Branch']; // Branch!
    updateBusiness: NexusGenRootTypes['Business']; // Business!
    updateEmployee: NexusGenRootTypes['Employee']; // Employee!
    updateVacationsItem: NexusGenRootTypes['VacationsItem']; // VacationsItem!
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string | null; // String
    id: string; // String!
    published: boolean; // Boolean!
    title: string; // String!
  }
  Query: { // field return type
    emailAvailability: boolean | null; // Boolean
    feed: NexusGenRootTypes['Post'][]; // [Post!]!
    filterPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    getAvailabilityItem: NexusGenRootTypes['AvailabilityItem'] | null; // AvailabilityItem
    getAvailabilityItems: NexusGenRootTypes['AvailabilityItem'][] | null; // [AvailabilityItem!]
    getBooking: NexusGenRootTypes['Booking'] | null; // Booking
    getBookings: NexusGenRootTypes['Booking'][] | null; // [Booking!]
    getBookingsByBranch: NexusGenRootTypes['Booking'][] | null; // [Booking!]
    getBookingsByBusiness: NexusGenRootTypes['Booking'][] | null; // [Booking!]
    getBookingsByDate: NexusGenRootTypes['Booking'][] | null; // [Booking!]
    getBranch: NexusGenRootTypes['Branch'] | null; // Branch
    getBranches: NexusGenRootTypes['Branch'][] | null; // [Branch!]
    getBusiness: NexusGenRootTypes['Business'] | null; // Business
    getBusinessByHandle: NexusGenRootTypes['Business'] | null; // Business
    getBusinesses: NexusGenRootTypes['Business'][] | null; // [Business!]
    getEmployee: NexusGenRootTypes['Employee'] | null; // Employee
    getEmployeeAvailableDays: string[] | null; // [String!]
    getEmployeeAvailableTime: NexusGenRootTypes['EmployeeAvailableTime'][] | null; // [EmployeeAvailableTime!]
    getEmployees: NexusGenRootTypes['Employee'][] | null; // [Employee!]
    getService: NexusGenRootTypes['Service'] | null; // Service
    getServices: NexusGenRootTypes['Service'][] | null; // [Service!]
    getVacationsItem: NexusGenRootTypes['VacationsItem'] | null; // VacationsItem
    getVacationsItems: NexusGenRootTypes['VacationsItem'][] | null; // [VacationsItem!]
    me: NexusGenRootTypes['User'] | null; // User
    post: NexusGenRootTypes['Post'] | null; // Post
  }
  Service: { // field return type
    bookings: NexusGenRootTypes['Booking'][]; // [Booking!]!
    branches: NexusGenRootTypes['Branch'][]; // [Branch!]!
    currency: string; // String!
    description: string; // String!
    duration: number; // Int!
    employees: NexusGenRootTypes['Employee'][]; // [Employee!]!
    id: string; // String!
    name: string; // String!
    price: number; // Float!
  }
  Subscription: { // field return type
    deletedBooking: NexusGenRootTypes['Booking']; // Booking!
    newBooking: NexusGenRootTypes['Booking']; // Booking!
    updatedBooking: NexusGenRootTypes['Booking']; // Booking!
  }
  User: { // field return type
    bookings: NexusGenRootTypes['Booking'][]; // [Booking!]!
    business: NexusGenRootTypes['Business'] | null; // Business
    email: string; // String!
    familyName: string; // String!
    givenName: string; // String!
    id: string; // String!
    name: string | null; // String
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    userType: NexusGenEnums['UserType']; // UserType!
    verifyToken: string; // String!
  }
  VacationsItem: { // field return type
    employee: NexusGenRootTypes['Employee']; // Employee!
    from: string; // String!
    id: string; // String!
    to: string; // String!
  }
}

export interface NexusGenArgTypes {
  Booking: {
    services: { // args
      skip?: number | null; // Int
    }
  }
  Branch: {
    bookings: { // args
      skip?: number | null; // Int
    }
    employees: { // args
      skip?: number | null; // Int
    }
    services: { // args
      skip?: number | null; // Int
    }
  }
  Business: {
    branches: { // args
      skip?: number | null; // Int
    }
  }
  Employee: {
    availability: { // args
      skip?: number | null; // Int
    }
    bookings: { // args
      skip?: number | null; // Int
    }
    branches: { // args
      skip?: number | null; // Int
    }
    services: { // args
      skip?: number | null; // Int
    }
    vacations: { // args
      skip?: number | null; // Int
    }
  }
  Mutation: {
    confirmUser: { // args
      email?: string | null; // String
      verifyToken?: string | null; // String
    }
    createAvailabilityItem: { // args
      day: string; // String!
      employeeId: string; // String!
      from: string; // String!
      to: string; // String!
    }
    createBooking: { // args
      branchId: string; // String!
      clientEmail?: string | null; // String
      clientFamilyName?: string | null; // String
      clientId?: string | null; // String
      clientName?: string | null; // String
      clientPhone?: string | null; // String
      employeeId: string; // String!
      end: string; // String!
      servicesId: string[]; // [String!]!
      start: string; // String!
      status?: string | null; // String
    }
    createBranch: { // args
      address: string; // String!
      description: string; // String!
      email: string; // String!
      image?: string | null; // String
      name: string; // String!
      phone: string; // String!
    }
    createBusiness: { // args
      email: string; // String!
      handle: string; // String!
      name: string; // String!
      phone: string; // String!
    }
    createDraft: { // args
      content?: string | null; // String
      title?: string | null; // String
    }
    createEmployee: { // args
      branchesId?: string[] | null; // [String!]
      familyName: string; // String!
      givenName: string; // String!
      phone: string; // String!
      servicesId?: string[] | null; // [String!]
      userId?: string | null; // String
    }
    createService: { // args
      branchesId: string[]; // [String!]!
      currency: string; // String!
      description: string; // String!
      duration: number; // Int!
      name: string; // String!
      price: number; // Float!
    }
    createVacationsItem: { // args
      employeeId: string; // String!
      from: string; // String!
      to: string; // String!
    }
    deleteBooking: { // args
      id: string; // ID!
    }
    deletePost: { // args
      id?: string | null; // ID
    }
    login: { // args
      email?: string | null; // String
      password?: string | null; // String
    }
    publish: { // args
      id?: string | null; // ID
    }
    signup: { // args
      email?: string | null; // String
      familyName?: string | null; // String
      givenName?: string | null; // String
      name?: string | null; // String
      password?: string | null; // String
      userName?: string | null; // String
      userType?: string | null; // String
    }
    updateAvailabilityItem: { // args
      day?: string | null; // String
      from?: string | null; // String
      id: string; // ID!
      to?: string | null; // String
    }
    updateBooking: { // args
      branchId?: string | null; // String
      clientEmail?: string | null; // String
      clientFamilyName?: string | null; // String
      clientId?: string | null; // String
      clientName?: string | null; // String
      clientPhone?: string | null; // String
      employeeId?: string | null; // String
      end?: string | null; // String
      id: string; // ID!
      servicesId?: string[] | null; // [String!]
      start?: string | null; // String
      status?: string | null; // String
    }
    updateBranch: { // args
      address?: string | null; // String
      description?: string | null; // String
      email?: string | null; // String
      id: string; // ID!
      image?: string | null; // String
      name?: string | null; // String
      phone?: string | null; // String
      servicesId?: string[] | null; // [String!]
    }
    updateBusiness: { // args
      email?: string | null; // String
      handle?: string | null; // String
      id: string; // ID!
      name?: string | null; // String
      phone?: string | null; // String
    }
    updateEmployee: { // args
      branchesId?: string[] | null; // [String!]
      familyName?: string | null; // String
      givenName?: string | null; // String
      id: string; // ID!
      phone?: string | null; // String
      servicesId?: string[] | null; // [String!]
      userId?: string | null; // String
    }
    updateVacationsItem: { // args
      employeeId?: string | null; // String
      from?: string | null; // String
      id: string; // ID!
      to?: string | null; // String
    }
  }
  Query: {
    emailAvailability: { // args
      email?: string | null; // String
    }
    filterPosts: { // args
      searchString?: string | null; // String
    }
    getAvailabilityItem: { // args
      id?: string | null; // ID
    }
    getBooking: { // args
      id?: string | null; // String
    }
    getBookingsByBranch: { // args
      branchId?: string | null; // String
    }
    getBookingsByBusiness: { // args
      id?: string | null; // String
    }
    getBookingsByDate: { // args
      branchId?: string | null; // String
      employeeId?: string | null; // String
      endDate: string; // String!
      startDate: string; // String!
    }
    getBranch: { // args
      id?: string | null; // String
    }
    getBusiness: { // args
      id?: string | null; // String
    }
    getBusinessByHandle: { // args
      handle?: string | null; // String
    }
    getEmployee: { // args
      id?: string | null; // String
    }
    getEmployeeAvailableDays: { // args
      employeeId?: string | null; // ID
      endDate?: string | null; // String
      startDate?: string | null; // String
    }
    getEmployeeAvailableTime: { // args
      date?: string | null; // String
      duration?: number | null; // Int
      id?: string | null; // ID
    }
    getService: { // args
      id?: string | null; // String
    }
    getVacationsItem: { // args
      id?: string | null; // ID
    }
    post: { // args
      id?: string | null; // ID
    }
  }
  Service: {
    bookings: { // args
      skip?: number | null; // Int
    }
    branches: { // args
      skip?: number | null; // Int
    }
    employees: { // args
      skip?: number | null; // Int
    }
  }
  Subscription: {
    deletedBooking: { // args
      branchId?: string | null; // String
    }
    newBooking: { // args
      branchId?: string | null; // String
    }
    updatedBooking: { // args
      branchId?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthPayload" | "AvailabilityItem" | "Booking" | "Branch" | "Business" | "Employee" | "EmployeeAvailableTime" | "Mutation" | "Post" | "Query" | "Service" | "Subscription" | "User" | "VacationsItem";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "BookingStatus" | "Day" | "UserType";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}