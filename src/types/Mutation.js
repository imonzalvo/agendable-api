const { compare, hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const {
  idArg,
  mutationType,
  stringArg,
  floatArg,
  intArg,
} = require('@nexus/schema')
const { APP_SECRET, getUserId } = require('../utils')
const { SignUp, Login } = require('./Mutations/auth')
const { CreateBusiness, UpdateBusiness } = require('./Mutations/business')
const { CreateBranch, UpdateBranch } = require('./Mutations/branch')
const { CreateService } = require('./Mutations/service')
const { CreateEmployee, UpdateEmployee } = require('./Mutations/employee')
const {
  CreateBooking,
  UpdateBooking,
  DeleteBooking,
} = require('./Mutations/booking')
const {
  CreateAvailabilityItem,
  UpdateAvailabilityItem,
} = require('./Mutations/availabilityItem')
const {
  CreateVacationsItem,
  UpdateVacationsItem,
} = require('./Mutations/vacationsItem')

const Mutation = mutationType({
  definition(t) {
    t.field('signup', SignUp)

    t.field('login', Login)

    t.field('createBusiness', {
      type: 'Business',
      args: {
        name: stringArg(),
        email: stringArg(),
        phone: stringArg(),
        handle: stringArg(),
      },
      resolve: (parent, { name, email, phone, handle }, ctx) =>
        CreateBusiness(parent, { name, email, phone, handle }, ctx),
    })

    t.field('updateBusiness', {
      type: 'Business',
      args: {
        id: idArg(),
        name: stringArg(),
        email: stringArg(),
        phone: stringArg(),
        handle: stringArg(),
      },
      resolve: (parent, { id, name, email, phone, handle }, ctx) =>
        UpdateBusiness(parent, { id, name, email, phone, handle }, ctx),
    })

    t.field('createBranch', {
      type: 'Branch',
      args: {
        name: stringArg(),
        email: stringArg(),
        phone: stringArg(),
        address: stringArg(),
        description: stringArg(),
        image: stringArg(),
      },
      resolve: (parent, args, ctx) => CreateBranch(parent, args, ctx),
    })

    t.field('updateBranch', {
      type: 'Branch',
      args: {
        id: idArg(),
        name: stringArg(),
        email: stringArg(),
        phone: stringArg(),
        address: stringArg(),
        description: stringArg(),
        image: stringArg(),
        servicesId: stringArg({ nullable: true, list: true }),
      },
      resolve: (parent, args, ctx) => UpdateBranch(parent, args, ctx),
    })

    t.field('createService', {
      type: 'Service',
      args: {
        name: stringArg(),
        price: floatArg(),
        currency: stringArg(),
        duration: intArg(),
        description: stringArg(),
        branchesId: stringArg({ list: true, nullable: false }),
      },
      resolve: (parent, args, ctx) => CreateService(parent, args, ctx),
    })

    t.field('createEmployee', {
      type: 'Employee',
      args: {
        givenName: stringArg(),
        familyName: stringArg(),
        userId: stringArg({ nullable: true }),
        phone: stringArg(),
        branchesId: stringArg({ list: true, nullable: true }),
        servicesId: stringArg({ list: true, nullable: true }),
      },
      resolve: (parent, args, ctx) => CreateEmployee(parent, args, ctx),
    })

    t.field('updateEmployee', {
      type: 'Employee',
      args: {
        id: idArg(),
        givenName: stringArg(),
        familyName: stringArg(),
        userId: stringArg({ nullable: true }),
        phone: stringArg(),
        branchesId: stringArg({ list: true, nullable: true }),
        servicesId: stringArg({ list: true, nullable: true }),
      },
      resolve: (parent, args, ctx) => UpdateEmployee(parent, args, ctx),
    })

    t.field('createBooking', {
      type: 'Booking',
      args: {
        start: stringArg(),
        end: stringArg(),
        status: stringArg(),
        clientId: stringArg({ nullable: true }),
        branchId: stringArg({ nullable: false }),
        servicesId: stringArg({ list: true, nullable: false }),
        employeeId: stringArg({ nullable: false }),
        clientEmail: stringArg({ nullable: true }),
        clientPhone: stringArg({ nullable: true }),
        clientName: stringArg({ nullable: true }),
        clientFamilyName: stringArg({ nullable: true }),
      },
      resolve: (parent, args, ctx) => CreateBooking(parent, args, ctx),
    })

    t.field('updateBooking', {
      type: 'Booking',
      args: {
        id: idArg(),
        start: stringArg(),
        end: stringArg(),
        status: stringArg(),
        clientId: stringArg({ nullable: true }),
        branchId: stringArg({ nullable: true }),
        servicesId: stringArg({ list: true, nullable: true }),
        employeeId: stringArg({ nullable: true }),
        clientEmail: stringArg({ nullable: true }),
        clientPhone: stringArg({ nullable: true }),
        clientName: stringArg({ nullable: true }),
        clientFamilyName: stringArg({ nullable: true }),
      },
      resolve: (parent, args, ctx) => UpdateBooking(parent, args, ctx),
    })

    t.field('deleteBooking', {
      type: 'Booking',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, args, ctx) => DeleteBooking(parent, args, ctx),
    })

    t.field('createAvailabilityItem', {
      type: 'AvailabilityItem',
      args: {
        day: stringArg(),
        from: stringArg(),
        to: stringArg(),
        employeeId: stringArg(),
      },
      resolve: (parent, args, ctx) => CreateAvailabilityItem(parent, args, ctx),
    })

    t.field('updateAvailabilityItem', {
      type: 'AvailabilityItem',
      args: {
        id: idArg(),
        day: stringArg(),
        from: stringArg(),
        to: stringArg(),
      },
      resolve: (parent, args, ctx) => UpdateAvailabilityItem(parent, args, ctx),
    })

    t.field('createVacationsItem', {
      type: 'VacationsItem',
      args: {
        from: stringArg(),
        to: stringArg(),
        employeeId: stringArg(),
      },
      resolve: (parent, args, ctx) => CreateVacationsItem(parent, args, ctx),
    })

    t.field('updateVacationsItem', {
      type: 'VacationsItem',
      args: {
        id: idArg(),
        from: stringArg(),
        to: stringArg(),
        employeeId: stringArg(),
      },
      resolve: (parent, args, ctx) => UpdateVacationsItem(parent, args, ctx),
    })

    t.field('createDraft', {
      type: 'Post',
      args: {
        title: stringArg(),
        content: stringArg({ nullable: true }),
      },
      resolve: (parent, { title, content }, ctx) => {
        const userId = getUserId(ctx)
        return ctx.prisma.post.create({
          data: {
            title,
            content,
            published: false,
            author: { connect: { id: Number(userId) } },
          },
        })
      },
    })

    t.field('deletePost', {
      type: 'Post',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.post.delete({
          where: { id: Number(id) },
        })
      },
    })

    t.field('publish', {
      type: 'Post',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.post.update({
          where: { id: Number(id) },
          data: { published: true },
        })
      },
    })
  },
})

module.exports = {
  Mutation,
}
