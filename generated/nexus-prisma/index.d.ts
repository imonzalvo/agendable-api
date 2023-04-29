import * as NexusCore from 'nexus/dist/core'

//
//
// TYPES
// TYPES
// TYPES
// TYPES
//
//

// Models

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `AvailabilityItem`.
  *
  * ### ️⚠️ You have not written documentation for model AvailabilityItem
  *
  * Replace this default advisory JSDoc with your own documentation about model AvailabilityItem
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model AvailabilityItem {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { AvailabilityItem } from 'nexus-prisma'
  *
  * objectType({
  *   name: AvailabilityItem.$name
  *   description: AvailabilityItem.$description
  *   definition(t) {
  *     t.field(AvailabilityItem.id)
  *   }
  * })
  */
export interface AvailabilityItem {
  $name: 'AvailabilityItem'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `AvailabilityItem.id`.
    *
    * ### ️⚠️ You have not written documentation for model AvailabilityItem
    *
    * Replace this default advisory JSDoc with your own documentation about model AvailabilityItem
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model AvailabilityItem {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { AvailabilityItem } from 'nexus-prisma'
    *
    * objectType({
    *   name: AvailabilityItem.$name
    *   description: AvailabilityItem.$description
    *   definition(t) {
    *     t.field(AvailabilityItem.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'AvailabilityItem', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `AvailabilityItem.day`.
    *
    * ### ️⚠️ You have not written documentation for model AvailabilityItem
    *
    * Replace this default advisory JSDoc with your own documentation about model AvailabilityItem
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model AvailabilityItem {
    *   /// Lorem ipsum dolor sit amet.
    *   day  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { AvailabilityItem } from 'nexus-prisma'
    *
    * objectType({
    *   name: AvailabilityItem.$name
    *   description: AvailabilityItem.$description
    *   definition(t) {
    *     t.field(AvailabilityItem.day)
    *   }
    * })
    */
  day: {
    /**
     * The name of this field.
     */
    name: 'day'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'AvailabilityItem', 'day'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `AvailabilityItem.from`.
    *
    * ### ️⚠️ You have not written documentation for model AvailabilityItem
    *
    * Replace this default advisory JSDoc with your own documentation about model AvailabilityItem
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model AvailabilityItem {
    *   /// Lorem ipsum dolor sit amet.
    *   from  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { AvailabilityItem } from 'nexus-prisma'
    *
    * objectType({
    *   name: AvailabilityItem.$name
    *   description: AvailabilityItem.$description
    *   definition(t) {
    *     t.field(AvailabilityItem.from)
    *   }
    * })
    */
  from: {
    /**
     * The name of this field.
     */
    name: 'from'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'AvailabilityItem', 'from'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `AvailabilityItem.to`.
    *
    * ### ️⚠️ You have not written documentation for model AvailabilityItem
    *
    * Replace this default advisory JSDoc with your own documentation about model AvailabilityItem
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model AvailabilityItem {
    *   /// Lorem ipsum dolor sit amet.
    *   to  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { AvailabilityItem } from 'nexus-prisma'
    *
    * objectType({
    *   name: AvailabilityItem.$name
    *   description: AvailabilityItem.$description
    *   definition(t) {
    *     t.field(AvailabilityItem.to)
    *   }
    * })
    */
  to: {
    /**
     * The name of this field.
     */
    name: 'to'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'AvailabilityItem', 'to'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `AvailabilityItem.employee`.
    *
    * ### ️⚠️ You have not written documentation for model AvailabilityItem
    *
    * Replace this default advisory JSDoc with your own documentation about model AvailabilityItem
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model AvailabilityItem {
    *   /// Lorem ipsum dolor sit amet.
    *   employee  Employee
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { AvailabilityItem } from 'nexus-prisma'
    *
    * objectType({
    *   name: AvailabilityItem.$name
    *   description: AvailabilityItem.$description
    *   definition(t) {
    *     t.field(AvailabilityItem.employee)
    *   }
    * })
    */
  employee: {
    /**
     * The name of this field.
     */
    name: 'employee'
  
    /**
     * The type of this field.
     */
    type: 'Employee' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Employee' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Employee\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Employee\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'AvailabilityItem', 'employee'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `AvailabilityItem.employeeId`.
    *
    * ### ️⚠️ You have not written documentation for model AvailabilityItem
    *
    * Replace this default advisory JSDoc with your own documentation about model AvailabilityItem
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model AvailabilityItem {
    *   /// Lorem ipsum dolor sit amet.
    *   employeeId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { AvailabilityItem } from 'nexus-prisma'
    *
    * objectType({
    *   name: AvailabilityItem.$name
    *   description: AvailabilityItem.$description
    *   definition(t) {
    *     t.field(AvailabilityItem.employeeId)
    *   }
    * })
    */
  employeeId: {
    /**
     * The name of this field.
     */
    name: 'employeeId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'AvailabilityItem', 'employeeId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `VacationsItem`.
  *
  * ### ️⚠️ You have not written documentation for model VacationsItem
  *
  * Replace this default advisory JSDoc with your own documentation about model VacationsItem
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model VacationsItem {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { VacationsItem } from 'nexus-prisma'
  *
  * objectType({
  *   name: VacationsItem.$name
  *   description: VacationsItem.$description
  *   definition(t) {
  *     t.field(VacationsItem.id)
  *   }
  * })
  */
export interface VacationsItem {
  $name: 'VacationsItem'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `VacationsItem.id`.
    *
    * ### ️⚠️ You have not written documentation for model VacationsItem
    *
    * Replace this default advisory JSDoc with your own documentation about model VacationsItem
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model VacationsItem {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { VacationsItem } from 'nexus-prisma'
    *
    * objectType({
    *   name: VacationsItem.$name
    *   description: VacationsItem.$description
    *   definition(t) {
    *     t.field(VacationsItem.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'VacationsItem', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `VacationsItem.from`.
    *
    * ### ️⚠️ You have not written documentation for model VacationsItem
    *
    * Replace this default advisory JSDoc with your own documentation about model VacationsItem
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model VacationsItem {
    *   /// Lorem ipsum dolor sit amet.
    *   from  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { VacationsItem } from 'nexus-prisma'
    *
    * objectType({
    *   name: VacationsItem.$name
    *   description: VacationsItem.$description
    *   definition(t) {
    *     t.field(VacationsItem.from)
    *   }
    * })
    */
  from: {
    /**
     * The name of this field.
     */
    name: 'from'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'VacationsItem', 'from'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `VacationsItem.to`.
    *
    * ### ️⚠️ You have not written documentation for model VacationsItem
    *
    * Replace this default advisory JSDoc with your own documentation about model VacationsItem
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model VacationsItem {
    *   /// Lorem ipsum dolor sit amet.
    *   to  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { VacationsItem } from 'nexus-prisma'
    *
    * objectType({
    *   name: VacationsItem.$name
    *   description: VacationsItem.$description
    *   definition(t) {
    *     t.field(VacationsItem.to)
    *   }
    * })
    */
  to: {
    /**
     * The name of this field.
     */
    name: 'to'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'VacationsItem', 'to'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `VacationsItem.employee`.
    *
    * ### ️⚠️ You have not written documentation for model VacationsItem
    *
    * Replace this default advisory JSDoc with your own documentation about model VacationsItem
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model VacationsItem {
    *   /// Lorem ipsum dolor sit amet.
    *   employee  Employee
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { VacationsItem } from 'nexus-prisma'
    *
    * objectType({
    *   name: VacationsItem.$name
    *   description: VacationsItem.$description
    *   definition(t) {
    *     t.field(VacationsItem.employee)
    *   }
    * })
    */
  employee: {
    /**
     * The name of this field.
     */
    name: 'employee'
  
    /**
     * The type of this field.
     */
    type: 'Employee' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Employee' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Employee\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Employee\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'VacationsItem', 'employee'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `VacationsItem.employeeId`.
    *
    * ### ️⚠️ You have not written documentation for model VacationsItem
    *
    * Replace this default advisory JSDoc with your own documentation about model VacationsItem
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model VacationsItem {
    *   /// Lorem ipsum dolor sit amet.
    *   employeeId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { VacationsItem } from 'nexus-prisma'
    *
    * objectType({
    *   name: VacationsItem.$name
    *   description: VacationsItem.$description
    *   definition(t) {
    *     t.field(VacationsItem.employeeId)
    *   }
    * })
    */
  employeeId: {
    /**
     * The name of this field.
     */
    name: 'employeeId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'VacationsItem', 'employeeId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Booking`.
  *
  * ### ️⚠️ You have not written documentation for model Booking
  *
  * Replace this default advisory JSDoc with your own documentation about model Booking
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Booking {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Booking } from 'nexus-prisma'
  *
  * objectType({
  *   name: Booking.$name
  *   description: Booking.$description
  *   definition(t) {
  *     t.field(Booking.id)
  *   }
  * })
  */
export interface Booking {
  $name: 'Booking'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.id`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.start`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   start  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.start)
    *   }
    * })
    */
  start: {
    /**
     * The name of this field.
     */
    name: 'start'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'start'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.end`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   end  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.end)
    *   }
    * })
    */
  end: {
    /**
     * The name of this field.
     */
    name: 'end'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'end'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.status`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   status  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.status)
    *   }
    * })
    */
  status: {
    /**
     * The name of this field.
     */
    name: 'status'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'status'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.client`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   client  User?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.client)
    *   }
    * })
    */
  client: {
    /**
     * The name of this field.
     */
    name: 'client'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'User' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'client'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.clientId`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   clientId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.clientId)
    *   }
    * })
    */
  clientId: {
    /**
     * The name of this field.
     */
    name: 'clientId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'clientId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.branch`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   branch  Branch
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.branch)
    *   }
    * })
    */
  branch: {
    /**
     * The name of this field.
     */
    name: 'branch'
  
    /**
     * The type of this field.
     */
    type: 'Branch' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Branch' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Branch\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Branch\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'branch'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.branchId`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   branchId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.branchId)
    *   }
    * })
    */
  branchId: {
    /**
     * The name of this field.
     */
    name: 'branchId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'branchId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.services`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   services  Service
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.services)
    *   }
    * })
    */
  services: {
    /**
     * The name of this field.
     */
    name: 'services'
  
    /**
     * The type of this field.
     */
    type: 'Service' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Service' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Service' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Service\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Service\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'services'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.serviceIDs`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   serviceIDs  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.serviceIDs)
    *   }
    * })
    */
  serviceIDs: {
    /**
     * The name of this field.
     */
    name: 'serviceIDs'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'serviceIDs'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.employee`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   employee  Employee
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.employee)
    *   }
    * })
    */
  employee: {
    /**
     * The name of this field.
     */
    name: 'employee'
  
    /**
     * The type of this field.
     */
    type: 'Employee' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Employee' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Employee\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Employee\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'employee'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.employeeId`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   employeeId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.employeeId)
    *   }
    * })
    */
  employeeId: {
    /**
     * The name of this field.
     */
    name: 'employeeId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'employeeId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.clientEmail`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   clientEmail  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.clientEmail)
    *   }
    * })
    */
  clientEmail: {
    /**
     * The name of this field.
     */
    name: 'clientEmail'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'clientEmail'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.clientPhone`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   clientPhone  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.clientPhone)
    *   }
    * })
    */
  clientPhone: {
    /**
     * The name of this field.
     */
    name: 'clientPhone'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'clientPhone'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.clientName`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   clientName  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.clientName)
    *   }
    * })
    */
  clientName: {
    /**
     * The name of this field.
     */
    name: 'clientName'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'clientName'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Booking.clientFamilyName`.
    *
    * ### ️⚠️ You have not written documentation for model Booking
    *
    * Replace this default advisory JSDoc with your own documentation about model Booking
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Booking {
    *   /// Lorem ipsum dolor sit amet.
    *   clientFamilyName  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Booking } from 'nexus-prisma'
    *
    * objectType({
    *   name: Booking.$name
    *   description: Booking.$description
    *   definition(t) {
    *     t.field(Booking.clientFamilyName)
    *   }
    * })
    */
  clientFamilyName: {
    /**
     * The name of this field.
     */
    name: 'clientFamilyName'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Booking', 'clientFamilyName'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Employee`.
  *
  * ### ️⚠️ You have not written documentation for model Employee
  *
  * Replace this default advisory JSDoc with your own documentation about model Employee
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Employee {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Employee } from 'nexus-prisma'
  *
  * objectType({
  *   name: Employee.$name
  *   description: Employee.$description
  *   definition(t) {
  *     t.field(Employee.id)
  *   }
  * })
  */
export interface Employee {
  $name: 'Employee'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.id`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.givenName`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   givenName  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.givenName)
    *   }
    * })
    */
  givenName: {
    /**
     * The name of this field.
     */
    name: 'givenName'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'givenName'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.familyName`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   familyName  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.familyName)
    *   }
    * })
    */
  familyName: {
    /**
     * The name of this field.
     */
    name: 'familyName'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'familyName'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.user`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'User' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.userId`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'userId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.phone`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   phone  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.phone)
    *   }
    * })
    */
  phone: {
    /**
     * The name of this field.
     */
    name: 'phone'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'phone'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.services`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   services  Service
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.services)
    *   }
    * })
    */
  services: {
    /**
     * The name of this field.
     */
    name: 'services'
  
    /**
     * The type of this field.
     */
    type: 'Service' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Service' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Service' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Service\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Service\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'services'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.serviceIDs`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   serviceIDs  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.serviceIDs)
    *   }
    * })
    */
  serviceIDs: {
    /**
     * The name of this field.
     */
    name: 'serviceIDs'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'serviceIDs'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.branches`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   branches  Branch
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.branches)
    *   }
    * })
    */
  branches: {
    /**
     * The name of this field.
     */
    name: 'branches'
  
    /**
     * The type of this field.
     */
    type: 'Branch' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Branch' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Branch' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Branch\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Branch\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'branches'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.branchesIDs`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   branchesIDs  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.branchesIDs)
    *   }
    * })
    */
  branchesIDs: {
    /**
     * The name of this field.
     */
    name: 'branchesIDs'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'branchesIDs'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.bookings`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   bookings  Booking
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.bookings)
    *   }
    * })
    */
  bookings: {
    /**
     * The name of this field.
     */
    name: 'bookings'
  
    /**
     * The type of this field.
     */
    type: 'Booking' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Booking' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Booking' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Booking\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Booking\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'bookings'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.availability`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   availability  AvailabilityItem
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.availability)
    *   }
    * })
    */
  availability: {
    /**
     * The name of this field.
     */
    name: 'availability'
  
    /**
     * The type of this field.
     */
    type: 'AvailabilityItem' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'AvailabilityItem' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'AvailabilityItem' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'AvailabilityItem\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'AvailabilityItem\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'availability'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Employee.vacations`.
    *
    * ### ️⚠️ You have not written documentation for model Employee
    *
    * Replace this default advisory JSDoc with your own documentation about model Employee
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Employee {
    *   /// Lorem ipsum dolor sit amet.
    *   vacations  VacationsItem
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Employee } from 'nexus-prisma'
    *
    * objectType({
    *   name: Employee.$name
    *   description: Employee.$description
    *   definition(t) {
    *     t.field(Employee.vacations)
    *   }
    * })
    */
  vacations: {
    /**
     * The name of this field.
     */
    name: 'vacations'
  
    /**
     * The type of this field.
     */
    type: 'VacationsItem' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'VacationsItem' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'VacationsItem' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'VacationsItem\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'VacationsItem\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Employee', 'vacations'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Service`.
  *
  * ### ️⚠️ You have not written documentation for model Service
  *
  * Replace this default advisory JSDoc with your own documentation about model Service
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Service {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Service } from 'nexus-prisma'
  *
  * objectType({
  *   name: Service.$name
  *   description: Service.$description
  *   definition(t) {
  *     t.field(Service.id)
  *   }
  * })
  */
export interface Service {
  $name: 'Service'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.id`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.name`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.price`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   price  Float
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.price)
    *   }
    * })
    */
  price: {
    /**
     * The name of this field.
     */
    name: 'price'
  
    /**
     * The type of this field.
     */
    type: 'Float' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Float' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Float\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Float\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'price'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.currency`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   currency  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.currency)
    *   }
    * })
    */
  currency: {
    /**
     * The name of this field.
     */
    name: 'currency'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'currency'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.duration`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   duration  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.duration)
    *   }
    * })
    */
  duration: {
    /**
     * The name of this field.
     */
    name: 'duration'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'duration'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.branches`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   branches  Branch
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.branches)
    *   }
    * })
    */
  branches: {
    /**
     * The name of this field.
     */
    name: 'branches'
  
    /**
     * The type of this field.
     */
    type: 'Branch' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Branch' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Branch' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Branch\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Branch\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'branches'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.branchesIDs`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   branchesIDs  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.branchesIDs)
    *   }
    * })
    */
  branchesIDs: {
    /**
     * The name of this field.
     */
    name: 'branchesIDs'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'branchesIDs'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.description`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   description  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.description)
    *   }
    * })
    */
  description: {
    /**
     * The name of this field.
     */
    name: 'description'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'description'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.employees`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   employees  Employee
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.employees)
    *   }
    * })
    */
  employees: {
    /**
     * The name of this field.
     */
    name: 'employees'
  
    /**
     * The type of this field.
     */
    type: 'Employee' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Employee' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Employee' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Employee\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Employee\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'employees'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.employeesIDs`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   employeesIDs  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.employeesIDs)
    *   }
    * })
    */
  employeesIDs: {
    /**
     * The name of this field.
     */
    name: 'employeesIDs'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'employeesIDs'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.bookings`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   bookings  Booking
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.bookings)
    *   }
    * })
    */
  bookings: {
    /**
     * The name of this field.
     */
    name: 'bookings'
  
    /**
     * The type of this field.
     */
    type: 'Booking' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Booking' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Booking' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Booking\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Booking\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'bookings'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.bookingIDs`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   bookingIDs  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.bookingIDs)
    *   }
    * })
    */
  bookingIDs: {
    /**
     * The name of this field.
     */
    name: 'bookingIDs'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'bookingIDs'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.Business`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   Business  Business?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.Business)
    *   }
    * })
    */
  Business: {
    /**
     * The name of this field.
     */
    name: 'Business'
  
    /**
     * The type of this field.
     */
    type: 'Business' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Business' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Business\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Business\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'Business'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Service.businessId`.
    *
    * ### ️⚠️ You have not written documentation for model Service
    *
    * Replace this default advisory JSDoc with your own documentation about model Service
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Service {
    *   /// Lorem ipsum dolor sit amet.
    *   businessId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Service } from 'nexus-prisma'
    *
    * objectType({
    *   name: Service.$name
    *   description: Service.$description
    *   definition(t) {
    *     t.field(Service.businessId)
    *   }
    * })
    */
  businessId: {
    /**
     * The name of this field.
     */
    name: 'businessId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Service', 'businessId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Branch`.
  *
  * ### ️⚠️ You have not written documentation for model Branch
  *
  * Replace this default advisory JSDoc with your own documentation about model Branch
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Branch {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Branch } from 'nexus-prisma'
  *
  * objectType({
  *   name: Branch.$name
  *   description: Branch.$description
  *   definition(t) {
  *     t.field(Branch.id)
  *   }
  * })
  */
export interface Branch {
  $name: 'Branch'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.id`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.address`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   address  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.address)
    *   }
    * })
    */
  address: {
    /**
     * The name of this field.
     */
    name: 'address'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'address'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.phone`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   phone  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.phone)
    *   }
    * })
    */
  phone: {
    /**
     * The name of this field.
     */
    name: 'phone'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'phone'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.email`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   email  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.email)
    *   }
    * })
    */
  email: {
    /**
     * The name of this field.
     */
    name: 'email'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'email'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.name`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.description`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   description  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.description)
    *   }
    * })
    */
  description: {
    /**
     * The name of this field.
     */
    name: 'description'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'description'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.image`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   image  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.image)
    *   }
    * })
    */
  image: {
    /**
     * The name of this field.
     */
    name: 'image'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'image'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.business`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   business  Business
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.business)
    *   }
    * })
    */
  business: {
    /**
     * The name of this field.
     */
    name: 'business'
  
    /**
     * The type of this field.
     */
    type: 'Business' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Business' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Business\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Business\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'business'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.businessId`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   businessId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.businessId)
    *   }
    * })
    */
  businessId: {
    /**
     * The name of this field.
     */
    name: 'businessId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'businessId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.employees`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   employees  Employee
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.employees)
    *   }
    * })
    */
  employees: {
    /**
     * The name of this field.
     */
    name: 'employees'
  
    /**
     * The type of this field.
     */
    type: 'Employee' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Employee' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Employee' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Employee\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Employee\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'employees'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.employeesIDs`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   employeesIDs  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.employeesIDs)
    *   }
    * })
    */
  employeesIDs: {
    /**
     * The name of this field.
     */
    name: 'employeesIDs'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'employeesIDs'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.services`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   services  Service
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.services)
    *   }
    * })
    */
  services: {
    /**
     * The name of this field.
     */
    name: 'services'
  
    /**
     * The type of this field.
     */
    type: 'Service' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Service' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Service' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Service\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Service\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'services'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.servicesIDs`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   servicesIDs  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.servicesIDs)
    *   }
    * })
    */
  servicesIDs: {
    /**
     * The name of this field.
     */
    name: 'servicesIDs'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'servicesIDs'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.bookings`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   bookings  Booking
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.bookings)
    *   }
    * })
    */
  bookings: {
    /**
     * The name of this field.
     */
    name: 'bookings'
  
    /**
     * The type of this field.
     */
    type: 'Booking' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Booking' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Booking' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Booking\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Booking\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'bookings'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.categories`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   categories  Category
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.categories)
    *   }
    * })
    */
  categories: {
    /**
     * The name of this field.
     */
    name: 'categories'
  
    /**
     * The type of this field.
     */
    type: 'Category' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Category' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Category' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Category\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Category\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'categories'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Branch.categoriesIDs`.
    *
    * ### ️⚠️ You have not written documentation for model Branch
    *
    * Replace this default advisory JSDoc with your own documentation about model Branch
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Branch {
    *   /// Lorem ipsum dolor sit amet.
    *   categoriesIDs  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Branch } from 'nexus-prisma'
    *
    * objectType({
    *   name: Branch.$name
    *   description: Branch.$description
    *   definition(t) {
    *     t.field(Branch.categoriesIDs)
    *   }
    * })
    */
  categoriesIDs: {
    /**
     * The name of this field.
     */
    name: 'categoriesIDs'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Branch', 'categoriesIDs'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Category`.
  *
  * ### ️⚠️ You have not written documentation for model Category
  *
  * Replace this default advisory JSDoc with your own documentation about model Category
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Category {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Category } from 'nexus-prisma'
  *
  * objectType({
  *   name: Category.$name
  *   description: Category.$description
  *   definition(t) {
  *     t.field(Category.id)
  *   }
  * })
  */
export interface Category {
  $name: 'Category'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Category.id`.
    *
    * ### ️⚠️ You have not written documentation for model Category
    *
    * Replace this default advisory JSDoc with your own documentation about model Category
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Category {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Category } from 'nexus-prisma'
    *
    * objectType({
    *   name: Category.$name
    *   description: Category.$description
    *   definition(t) {
    *     t.field(Category.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Category', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Category.name`.
    *
    * ### ️⚠️ You have not written documentation for model Category
    *
    * Replace this default advisory JSDoc with your own documentation about model Category
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Category {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Category } from 'nexus-prisma'
    *
    * objectType({
    *   name: Category.$name
    *   description: Category.$description
    *   definition(t) {
    *     t.field(Category.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Category', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Category.Business`.
    *
    * ### ️⚠️ You have not written documentation for model Category
    *
    * Replace this default advisory JSDoc with your own documentation about model Category
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Category {
    *   /// Lorem ipsum dolor sit amet.
    *   Business  Business?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Category } from 'nexus-prisma'
    *
    * objectType({
    *   name: Category.$name
    *   description: Category.$description
    *   definition(t) {
    *     t.field(Category.Business)
    *   }
    * })
    */
  Business: {
    /**
     * The name of this field.
     */
    name: 'Business'
  
    /**
     * The type of this field.
     */
    type: 'Business' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Business' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Business\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Business\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Category', 'Business'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Category.businessId`.
    *
    * ### ️⚠️ You have not written documentation for model Category
    *
    * Replace this default advisory JSDoc with your own documentation about model Category
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Category {
    *   /// Lorem ipsum dolor sit amet.
    *   businessId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Category } from 'nexus-prisma'
    *
    * objectType({
    *   name: Category.$name
    *   description: Category.$description
    *   definition(t) {
    *     t.field(Category.businessId)
    *   }
    * })
    */
  businessId: {
    /**
     * The name of this field.
     */
    name: 'businessId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Category', 'businessId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Category.branches`.
    *
    * ### ️⚠️ You have not written documentation for model Category
    *
    * Replace this default advisory JSDoc with your own documentation about model Category
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Category {
    *   /// Lorem ipsum dolor sit amet.
    *   branches  Branch
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Category } from 'nexus-prisma'
    *
    * objectType({
    *   name: Category.$name
    *   description: Category.$description
    *   definition(t) {
    *     t.field(Category.branches)
    *   }
    * })
    */
  branches: {
    /**
     * The name of this field.
     */
    name: 'branches'
  
    /**
     * The type of this field.
     */
    type: 'Branch' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Branch' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Branch' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Branch\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Branch\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Category', 'branches'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Category.branchesIDs`.
    *
    * ### ️⚠️ You have not written documentation for model Category
    *
    * Replace this default advisory JSDoc with your own documentation about model Category
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Category {
    *   /// Lorem ipsum dolor sit amet.
    *   branchesIDs  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Category } from 'nexus-prisma'
    *
    * objectType({
    *   name: Category.$name
    *   description: Category.$description
    *   definition(t) {
    *     t.field(Category.branchesIDs)
    *   }
    * })
    */
  branchesIDs: {
    /**
     * The name of this field.
     */
    name: 'branchesIDs'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Category', 'branchesIDs'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Business`.
  *
  * ### ️⚠️ You have not written documentation for model Business
  *
  * Replace this default advisory JSDoc with your own documentation about model Business
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Business {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Business } from 'nexus-prisma'
  *
  * objectType({
  *   name: Business.$name
  *   description: Business.$description
  *   definition(t) {
  *     t.field(Business.id)
  *   }
  * })
  */
export interface Business {
  $name: 'Business'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.id`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.name`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.email`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   email  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.email)
    *   }
    * })
    */
  email: {
    /**
     * The name of this field.
     */
    name: 'email'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'email'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.phone`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   phone  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.phone)
    *   }
    * })
    */
  phone: {
    /**
     * The name of this field.
     */
    name: 'phone'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'phone'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.owner`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   owner  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.owner)
    *   }
    * })
    */
  owner: {
    /**
     * The name of this field.
     */
    name: 'owner'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'owner'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.ownerId`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   ownerId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.ownerId)
    *   }
    * })
    */
  ownerId: {
    /**
     * The name of this field.
     */
    name: 'ownerId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'ownerId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.handle`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   handle  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.handle)
    *   }
    * })
    */
  handle: {
    /**
     * The name of this field.
     */
    name: 'handle'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'handle'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.branches`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   branches  Branch
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.branches)
    *   }
    * })
    */
  branches: {
    /**
     * The name of this field.
     */
    name: 'branches'
  
    /**
     * The type of this field.
     */
    type: 'Branch' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Branch' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Branch' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Branch\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Branch\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'branches'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.landing`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   landing  LandingInfo?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.landing)
    *   }
    * })
    */
  landing: {
    /**
     * The name of this field.
     */
    name: 'landing'
  
    /**
     * The type of this field.
     */
    type: 'LandingInfo' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'LandingInfo' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'LandingInfo\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'LandingInfo\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'landing'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.website`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   website  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.website)
    *   }
    * })
    */
  website: {
    /**
     * The name of this field.
     */
    name: 'website'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'website'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.instagramUrl`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   instagramUrl  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.instagramUrl)
    *   }
    * })
    */
  instagramUrl: {
    /**
     * The name of this field.
     */
    name: 'instagramUrl'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'instagramUrl'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.facebookUrl`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   facebookUrl  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.facebookUrl)
    *   }
    * })
    */
  facebookUrl: {
    /**
     * The name of this field.
     */
    name: 'facebookUrl'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'facebookUrl'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.categories`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   categories  Category
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.categories)
    *   }
    * })
    */
  categories: {
    /**
     * The name of this field.
     */
    name: 'categories'
  
    /**
     * The type of this field.
     */
    type: 'Category' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Category' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Category' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Category\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Category\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'categories'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Business.services`.
    *
    * ### ️⚠️ You have not written documentation for model Business
    *
    * Replace this default advisory JSDoc with your own documentation about model Business
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Business {
    *   /// Lorem ipsum dolor sit amet.
    *   services  Service
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Business } from 'nexus-prisma'
    *
    * objectType({
    *   name: Business.$name
    *   description: Business.$description
    *   definition(t) {
    *     t.field(Business.services)
    *   }
    * })
    */
  services: {
    /**
     * The name of this field.
     */
    name: 'services'
  
    /**
     * The type of this field.
     */
    type: 'Service' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Service' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Service' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Service\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Service\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Business', 'services'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `BusinessImage`.
  *
  * ### ️⚠️ You have not written documentation for model BusinessImage
  *
  * Replace this default advisory JSDoc with your own documentation about model BusinessImage
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model BusinessImage {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { BusinessImage } from 'nexus-prisma'
  *
  * objectType({
  *   name: BusinessImage.$name
  *   description: BusinessImage.$description
  *   definition(t) {
  *     t.field(BusinessImage.id)
  *   }
  * })
  */
export interface BusinessImage {
  $name: 'BusinessImage'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `BusinessImage.id`.
    *
    * ### ️⚠️ You have not written documentation for model BusinessImage
    *
    * Replace this default advisory JSDoc with your own documentation about model BusinessImage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model BusinessImage {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { BusinessImage } from 'nexus-prisma'
    *
    * objectType({
    *   name: BusinessImage.$name
    *   description: BusinessImage.$description
    *   definition(t) {
    *     t.field(BusinessImage.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'BusinessImage', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `BusinessImage.url`.
    *
    * ### ️⚠️ You have not written documentation for model BusinessImage
    *
    * Replace this default advisory JSDoc with your own documentation about model BusinessImage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model BusinessImage {
    *   /// Lorem ipsum dolor sit amet.
    *   url  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { BusinessImage } from 'nexus-prisma'
    *
    * objectType({
    *   name: BusinessImage.$name
    *   description: BusinessImage.$description
    *   definition(t) {
    *     t.field(BusinessImage.url)
    *   }
    * })
    */
  url: {
    /**
     * The name of this field.
     */
    name: 'url'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'BusinessImage', 'url'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `BusinessImage.landingInfo`.
    *
    * ### ️⚠️ You have not written documentation for model BusinessImage
    *
    * Replace this default advisory JSDoc with your own documentation about model BusinessImage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model BusinessImage {
    *   /// Lorem ipsum dolor sit amet.
    *   landingInfo  LandingInfo?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { BusinessImage } from 'nexus-prisma'
    *
    * objectType({
    *   name: BusinessImage.$name
    *   description: BusinessImage.$description
    *   definition(t) {
    *     t.field(BusinessImage.landingInfo)
    *   }
    * })
    */
  landingInfo: {
    /**
     * The name of this field.
     */
    name: 'landingInfo'
  
    /**
     * The type of this field.
     */
    type: 'LandingInfo' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'LandingInfo' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'LandingInfo\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'LandingInfo\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'BusinessImage', 'landingInfo'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `BusinessImage.landingInfoId`.
    *
    * ### ️⚠️ You have not written documentation for model BusinessImage
    *
    * Replace this default advisory JSDoc with your own documentation about model BusinessImage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model BusinessImage {
    *   /// Lorem ipsum dolor sit amet.
    *   landingInfoId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { BusinessImage } from 'nexus-prisma'
    *
    * objectType({
    *   name: BusinessImage.$name
    *   description: BusinessImage.$description
    *   definition(t) {
    *     t.field(BusinessImage.landingInfoId)
    *   }
    * })
    */
  landingInfoId: {
    /**
     * The name of this field.
     */
    name: 'landingInfoId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'BusinessImage', 'landingInfoId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `LandingInfo`.
  *
  * ### ️⚠️ You have not written documentation for model LandingInfo
  *
  * Replace this default advisory JSDoc with your own documentation about model LandingInfo
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model LandingInfo {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { LandingInfo } from 'nexus-prisma'
  *
  * objectType({
  *   name: LandingInfo.$name
  *   description: LandingInfo.$description
  *   definition(t) {
  *     t.field(LandingInfo.id)
  *   }
  * })
  */
export interface LandingInfo {
  $name: 'LandingInfo'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `LandingInfo.id`.
    *
    * ### ️⚠️ You have not written documentation for model LandingInfo
    *
    * Replace this default advisory JSDoc with your own documentation about model LandingInfo
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model LandingInfo {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { LandingInfo } from 'nexus-prisma'
    *
    * objectType({
    *   name: LandingInfo.$name
    *   description: LandingInfo.$description
    *   definition(t) {
    *     t.field(LandingInfo.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'LandingInfo', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `LandingInfo.images`.
    *
    * ### ️⚠️ You have not written documentation for model LandingInfo
    *
    * Replace this default advisory JSDoc with your own documentation about model LandingInfo
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model LandingInfo {
    *   /// Lorem ipsum dolor sit amet.
    *   images  BusinessImage
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { LandingInfo } from 'nexus-prisma'
    *
    * objectType({
    *   name: LandingInfo.$name
    *   description: LandingInfo.$description
    *   definition(t) {
    *     t.field(LandingInfo.images)
    *   }
    * })
    */
  images: {
    /**
     * The name of this field.
     */
    name: 'images'
  
    /**
     * The type of this field.
     */
    type: 'BusinessImage' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'BusinessImage' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'BusinessImage' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'BusinessImage\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'BusinessImage\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'LandingInfo', 'images'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `LandingInfo.displayName`.
    *
    * ### ️⚠️ You have not written documentation for model LandingInfo
    *
    * Replace this default advisory JSDoc with your own documentation about model LandingInfo
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model LandingInfo {
    *   /// Lorem ipsum dolor sit amet.
    *   displayName  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { LandingInfo } from 'nexus-prisma'
    *
    * objectType({
    *   name: LandingInfo.$name
    *   description: LandingInfo.$description
    *   definition(t) {
    *     t.field(LandingInfo.displayName)
    *   }
    * })
    */
  displayName: {
    /**
     * The name of this field.
     */
    name: 'displayName'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'LandingInfo', 'displayName'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `LandingInfo.cta`.
    *
    * ### ️⚠️ You have not written documentation for model LandingInfo
    *
    * Replace this default advisory JSDoc with your own documentation about model LandingInfo
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model LandingInfo {
    *   /// Lorem ipsum dolor sit amet.
    *   cta  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { LandingInfo } from 'nexus-prisma'
    *
    * objectType({
    *   name: LandingInfo.$name
    *   description: LandingInfo.$description
    *   definition(t) {
    *     t.field(LandingInfo.cta)
    *   }
    * })
    */
  cta: {
    /**
     * The name of this field.
     */
    name: 'cta'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'LandingInfo', 'cta'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `LandingInfo.description`.
    *
    * ### ️⚠️ You have not written documentation for model LandingInfo
    *
    * Replace this default advisory JSDoc with your own documentation about model LandingInfo
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model LandingInfo {
    *   /// Lorem ipsum dolor sit amet.
    *   description  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { LandingInfo } from 'nexus-prisma'
    *
    * objectType({
    *   name: LandingInfo.$name
    *   description: LandingInfo.$description
    *   definition(t) {
    *     t.field(LandingInfo.description)
    *   }
    * })
    */
  description: {
    /**
     * The name of this field.
     */
    name: 'description'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'LandingInfo', 'description'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `LandingInfo.business`.
    *
    * ### ️⚠️ You have not written documentation for model LandingInfo
    *
    * Replace this default advisory JSDoc with your own documentation about model LandingInfo
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model LandingInfo {
    *   /// Lorem ipsum dolor sit amet.
    *   business  Business?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { LandingInfo } from 'nexus-prisma'
    *
    * objectType({
    *   name: LandingInfo.$name
    *   description: LandingInfo.$description
    *   definition(t) {
    *     t.field(LandingInfo.business)
    *   }
    * })
    */
  business: {
    /**
     * The name of this field.
     */
    name: 'business'
  
    /**
     * The type of this field.
     */
    type: 'Business' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Business' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Business\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Business\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'LandingInfo', 'business'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `LandingInfo.businessId`.
    *
    * ### ️⚠️ You have not written documentation for model LandingInfo
    *
    * Replace this default advisory JSDoc with your own documentation about model LandingInfo
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model LandingInfo {
    *   /// Lorem ipsum dolor sit amet.
    *   businessId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { LandingInfo } from 'nexus-prisma'
    *
    * objectType({
    *   name: LandingInfo.$name
    *   description: LandingInfo.$description
    *   definition(t) {
    *     t.field(LandingInfo.businessId)
    *   }
    * })
    */
  businessId: {
    /**
     * The name of this field.
     */
    name: 'businessId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'LandingInfo', 'businessId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Notification`.
  *
  * ### ️⚠️ You have not written documentation for model Notification
  *
  * Replace this default advisory JSDoc with your own documentation about model Notification
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Notification {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Notification } from 'nexus-prisma'
  *
  * objectType({
  *   name: Notification.$name
  *   description: Notification.$description
  *   definition(t) {
  *     t.field(Notification.id)
  *   }
  * })
  */
export interface Notification {
  $name: 'Notification'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.id`.
    *
    * ### ️⚠️ You have not written documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.user`.
    *
    * ### ️⚠️ You have not written documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.userId`.
    *
    * ### ️⚠️ You have not written documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'userId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.type`.
    *
    * ### ️⚠️ You have not written documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   type  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.type)
    *   }
    * })
    */
  type: {
    /**
     * The name of this field.
     */
    name: 'type'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'type'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.title`.
    *
    * ### ️⚠️ You have not written documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   title  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.title)
    *   }
    * })
    */
  title: {
    /**
     * The name of this field.
     */
    name: 'title'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'title'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.resourceId`.
    *
    * ### ️⚠️ You have not written documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   resourceId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.resourceId)
    *   }
    * })
    */
  resourceId: {
    /**
     * The name of this field.
     */
    name: 'resourceId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'resourceId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.createdAt`.
    *
    * ### ️⚠️ You have not written documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   createdAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.createdAt)
    *   }
    * })
    */
  createdAt: {
    /**
     * The name of this field.
     */
    name: 'createdAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'createdAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.seen`.
    *
    * ### ️⚠️ You have not written documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   seen  Boolean
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.seen)
    *   }
    * })
    */
  seen: {
    /**
     * The name of this field.
     */
    name: 'seen'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Boolean' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'seen'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `User`.
  *
  * ### ️⚠️ You have not written documentation for model User
  *
  * Replace this default advisory JSDoc with your own documentation about model User
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model User {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { User } from 'nexus-prisma'
  *
  * objectType({
  *   name: User.$name
  *   description: User.$description
  *   definition(t) {
  *     t.field(User.id)
  *   }
  * })
  */
export interface User {
  $name: 'User'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.email`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   email  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.email)
    *   }
    * })
    */
  email: {
    /**
     * The name of this field.
     */
    name: 'email'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'email'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.id`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.name`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.password`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   password  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.password)
    *   }
    * })
    */
  password: {
    /**
     * The name of this field.
     */
    name: 'password'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'password'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.posts`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   posts  Post
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.posts)
    *   }
    * })
    */
  posts: {
    /**
     * The name of this field.
     */
    name: 'posts'
  
    /**
     * The type of this field.
     */
    type: 'Post' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Post' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Post' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Post\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Post\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'posts'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.business`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   business  Business?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.business)
    *   }
    * })
    */
  business: {
    /**
     * The name of this field.
     */
    name: 'business'
  
    /**
     * The type of this field.
     */
    type: 'Business' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Business' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Business\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Business\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'business'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.givenName`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   givenName  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.givenName)
    *   }
    * })
    */
  givenName: {
    /**
     * The name of this field.
     */
    name: 'givenName'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'givenName'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.notifications`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   notifications  Notification
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.notifications)
    *   }
    * })
    */
  notifications: {
    /**
     * The name of this field.
     */
    name: 'notifications'
  
    /**
     * The type of this field.
     */
    type: 'Notification' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Notification' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Notification' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Notification\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Notification\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'notifications'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.familyName`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   familyName  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.familyName)
    *   }
    * })
    */
  familyName: {
    /**
     * The name of this field.
     */
    name: 'familyName'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'familyName'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.userName`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   userName  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.userName)
    *   }
    * })
    */
  userName: {
    /**
     * The name of this field.
     */
    name: 'userName'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'userName'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.userType`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   userType  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.userType)
    *   }
    * })
    */
  userType: {
    /**
     * The name of this field.
     */
    name: 'userType'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'userType'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.bookings`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   bookings  Booking
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.bookings)
    *   }
    * })
    */
  bookings: {
    /**
     * The name of this field.
     */
    name: 'bookings'
  
    /**
     * The type of this field.
     */
    type: 'Booking' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Booking' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Booking' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Booking\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Booking\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'bookings'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.Employee`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   Employee  Employee
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.Employee)
    *   }
    * })
    */
  Employee: {
    /**
     * The name of this field.
     */
    name: 'Employee'
  
    /**
     * The type of this field.
     */
    type: 'Employee' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Employee' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Employee' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Employee\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Employee\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'Employee'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.verifyToken`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   verifyToken  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.verifyToken)
    *   }
    * })
    */
  verifyToken: {
    /**
     * The name of this field.
     */
    name: 'verifyToken'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'verifyToken'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.phone`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   phone  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.phone)
    *   }
    * })
    */
  phone: {
    /**
     * The name of this field.
     */
    name: 'phone'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'phone'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Post`.
  *
  * ### ️⚠️ You have not written documentation for model Post
  *
  * Replace this default advisory JSDoc with your own documentation about model Post
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Post {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Post } from 'nexus-prisma'
  *
  * objectType({
  *   name: Post.$name
  *   description: Post.$description
  *   definition(t) {
  *     t.field(Post.id)
  *   }
  * })
  */
export interface Post {
  $name: 'Post'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.authorId`.
    *
    * ### ️⚠️ You have not written documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   authorId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.authorId)
    *   }
    * })
    */
  authorId: {
    /**
     * The name of this field.
     */
    name: 'authorId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'authorId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.content`.
    *
    * ### ️⚠️ You have not written documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   content  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.content)
    *   }
    * })
    */
  content: {
    /**
     * The name of this field.
     */
    name: 'content'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'content'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.id`.
    *
    * ### ️⚠️ You have not written documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.published`.
    *
    * ### ️⚠️ You have not written documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   published  Boolean
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.published)
    *   }
    * })
    */
  published: {
    /**
     * The name of this field.
     */
    name: 'published'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Boolean' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'published'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.title`.
    *
    * ### ️⚠️ You have not written documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   title  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.title)
    *   }
    * })
    */
  title: {
    /**
     * The name of this field.
     */
    name: 'title'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'title'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.author`.
    *
    * ### ️⚠️ You have not written documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   author  User?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.author)
    *   }
    * })
    */
  author: {
    /**
     * The name of this field.
     */
    name: 'author'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'User' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'author'>
  }
}

// Enums

// N/A –– You have not defined any enums in your Prisma schema file.


//
//
// TERMS
// TERMS
// TERMS
// TERMS
//
//

//
//
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
//
//

export const AvailabilityItem: AvailabilityItem

export const VacationsItem: VacationsItem

export const Booking: Booking

export const Employee: Employee

export const Service: Service

export const Branch: Branch

export const Category: Category

export const Business: Business

export const BusinessImage: BusinessImage

export const LandingInfo: LandingInfo

export const Notification: Notification

export const User: User

export const Post: Post

//
//
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
//
//

// N/A –– You have not defined any enums in your Prisma schema file.

//
//
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
//
//

import type { Settings } from 'nexus-prisma/dist-cjs/generator/Settings/index'

/**
 * Adjust Nexus Prisma's [runtime settings](https://pris.ly/nexus-prisma/docs/settings/runtime).
 *
 * @example
 *
 *     import { PrismaClient } from '@prisma/client'
 *     import { ApolloServer } from 'apollo-server'
 *     import { makeSchema } from 'nexus'
 *     import { User, Post, $settings } from 'nexus-prisma'
 *
 *     new ApolloServer({
 *       schema: makeSchema({
 *         types: [],
 *       }),
 *       context() {
 *         return {
 *           db: new PrismaClient(), // <-- You put Prisma client on the "db" context property
 *         }
 *       },
 *     })
 *
 *     $settings({
 *       prismaClientContextField: 'db', // <-- Tell Nexus Prisma
 *     })
 *
 * @remarks This is _different_ than Nexus Prisma's [_gentime_ settings](https://pris.ly/nexus-prisma/docs/settings/gentime).
 */
export const $settings: Settings.Runtime.Manager['change']
