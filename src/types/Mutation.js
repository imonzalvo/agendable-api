const { compare, hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const {
  idArg,
  mutationType,
  stringArg,
  floatArg,
  intArg,
  booleanArg,
  arg,
} = require('nexus')
const { APP_SECRET, getUserId } = require('../utils')
const { SignUp, Login, ConfirmUser } = require('./Mutations/auth')
const {
  CreateBusiness,
  UpdateBusiness,
  AddCategoriesToBusiness,
  SetUpBusiness,
  DeleteBusiness,
} = require('./Mutations/business')
const {
  CreateBranch,
  UpdateBranch,
  DeleteBranch,
} = require('./Mutations/branch')
const { CreateService, UpdateService } = require('./Mutations/service')
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
const { UpdateNotification } = require('./Mutations/notification')
const {
  CreateLandingInfo,
  DeleteLandingInfo,
  UpdateLandingInfo,
  AddImagesLandingInfo,
} = require('./Mutations/landingInfo')

const Mutation = mutationType({
  definition(t) {
    t.field('signup', SignUp)

    t.field('login', Login)

    t.field('confirmUser', ConfirmUser)

    t.field('createBusiness', {
      type: 'Business',
      args: {
        name: stringArg({ required: true }),
        email: stringArg({ required: true }),
        phone: stringArg({ required: true }),
        handle: stringArg({ required: true }),
        website: stringArg({ required: false }),
        instagramUrl: stringArg({ required: false }),
        facebookUrl: stringArg({ required: false }),
        categories: stringArg({ required: false, list: true }),
      },
      resolve: (
        parent,
        {
          name,
          email,
          phone,
          handle,
          website,
          categories,
          instagramUrl,
          facebookUrl,
        },
        ctx,
      ) =>
        CreateBusiness(
          parent,
          {
            name,
            email,
            phone,
            handle,
            website,
            categories,
            instagramUrl,
            facebookUrl,
          },
          ctx,
        ),
    })

    t.field('setUpBusiness', {
      type: 'Business',
      args: {
        name: stringArg({ required: true }),
        email: stringArg({ required: true }),
        phone: stringArg({ required: true }),
        handle: stringArg({ required: true }),
        address: stringArg({ required: true }),
        description: stringArg({ required: true }),
        website: stringArg({ required: false }),
        instagramUrl: stringArg({ required: false }),
        facebookUrl: stringArg({ required: false }),
        categories: stringArg({ required: false, list: true }),
      },
      resolve: (
        parent,
        {
          name,
          email,
          phone,
          handle,
          address,
          description,
          website,
          categories,
          instagramUrl,
          facebookUrl,
        },
        ctx,
      ) =>
        SetUpBusiness(
          parent,
          {
            name,
            email,
            phone,
            handle,
            address,
            description,
            website,
            categories,
            instagramUrl,
            facebookUrl,
          },
          ctx,
        ),
    })

    t.field('updateBusiness', {
      type: 'Business',
      args: {
        id: idArg({ required: true }),
        name: stringArg(),
        email: stringArg(),
        phone: stringArg(),
        handle: stringArg(),
        website: stringArg(),
        instagramUrl: stringArg(),
        facebookUrl: stringArg(),
      },
      resolve: (
        parent,
        { id, name, email, phone, handle, website, instagramUrl, facebookUrl },
        ctx,
      ) =>
        UpdateBusiness(
          parent,
          {
            id,
            name,
            email,
            phone,
            handle,
            website,
            instagramUrl,
            facebookUrl,
          },
          ctx,
        ),
    })

    t.field('deleteBusiness', {
      type: 'Business',
      args: {
        id: idArg({ required: true }),
      },
      resolve: (parent, { id }, ctx) => DeleteBusiness(parent, { id }, ctx),
    })

    t.field('addCategoryToBusiness', {
      type: 'Business',
      args: {
        businessId: idArg(),
        categories: stringArg({ list: true }),
      },
      resolve: (parent, args, ctx) =>
        AddCategoriesToBusiness(parent, args, ctx),
    })

    t.field('createBranch', {
      type: 'Branch',
      args: {
        name: stringArg({ required: true }),
        email: stringArg({ required: true }),
        phone: stringArg({ required: true }),
        address: stringArg({ required: true }),
        description: stringArg({ required: true }),
        image: stringArg({ required: false }),
      },
      resolve: (parent, args, ctx) => CreateBranch(parent, args, ctx),
    })

    t.field('updateBranch', {
      type: 'Branch',
      args: {
        id: idArg({ required: true }),
        name: stringArg(),
        email: stringArg(),
        phone: stringArg(),
        address: stringArg(),
        description: stringArg(),
        image: stringArg(),
        categoriesId: stringArg({ nullable: true, list: true }),
        servicesId: stringArg({ nullable: true, list: true }),
      },
      resolve: (parent, args, ctx) => UpdateBranch(parent, args, ctx),
    })

    t.field('deleteBranch', {
      type: 'Branch',
      args: {
        id: idArg({ required: true }),
      },
      resolve: (parent, args, ctx) => DeleteBranch(parent, args, ctx),
    })

    t.field('createService', {
      type: 'Service',
      args: {
        name: stringArg({ required: true }),
        price: floatArg({ required: true }),
        currency: stringArg({ required: true }),
        duration: intArg({ required: true }),
        description: stringArg({ required: true }),
        branchesId: stringArg({ list: true, nullable: false }),
        categoryId: stringArg({ nullable: false }),
      },
      resolve: (parent, args, ctx) => CreateService(parent, args, ctx),
    })

    t.field('updateService', {
      type: 'Service',
      args: {
        id: stringArg({ required: true }),
        name: stringArg({ required: false }),
        price: floatArg({ required: false }),
        currency: stringArg({ required: false }),
        duration: intArg({ required: false }),
        description: stringArg({ required: false }),
      },
      resolve: (parent, args, ctx) => UpdateService(parent, args, ctx),
    })

    t.field('createEmployee', {
      type: 'Employee',
      args: {
        givenName: stringArg({ required: true }),
        familyName: stringArg({ required: true }),
        userId: stringArg({ nullable: true }),
        phone: stringArg({ required: true }),
        branchesId: stringArg({ list: true, nullable: true }),
        servicesId: stringArg({ list: true, nullable: true }),
        businessId: stringArg({ required: true }),
      },
      resolve: (parent, args, ctx) => CreateEmployee(parent, args, ctx),
    })

    t.field('updateEmployee', {
      type: 'Employee',
      args: {
        id: idArg({ required: true }),
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
        start: stringArg({ required: true }),
        end: stringArg({ required: true }),
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
        id: idArg({ required: true }),
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
      args: { id: idArg({ required: true }) },
      resolve: (parent, args, ctx) => DeleteBooking(parent, args, ctx),
    })

    t.field('createAvailabilityItem', {
      type: 'AvailabilityItem',
      args: {
        day: stringArg({ required: true }),
        from: stringArg({ required: true }),
        to: stringArg({ required: true }),
        employeeId: stringArg({ required: true }),
      },
      resolve: (parent, args, ctx) => CreateAvailabilityItem(parent, args, ctx),
    })

    t.field('updateAvailabilityItem', {
      type: 'AvailabilityItem',
      args: {
        id: idArg({ required: true }),
        day: stringArg(),
        from: stringArg(),
        to: stringArg(),
      },
      resolve: (parent, args, ctx) => UpdateAvailabilityItem(parent, args, ctx),
    })

    t.field('createVacationsItem', {
      type: 'VacationsItem',
      args: {
        from: stringArg({ required: true }),
        to: stringArg({ required: true }),
        employeeId: stringArg({ required: true }),
      },
      resolve: (parent, args, ctx) => CreateVacationsItem(parent, args, ctx),
    })

    t.field('updateVacationsItem', {
      type: 'VacationsItem',
      args: {
        id: idArg({ required: true }),
        from: stringArg(),
        to: stringArg(),
        employeeId: stringArg(),
      },
      resolve: (parent, args, ctx) => UpdateVacationsItem(parent, args, ctx),
    })

    t.field('updateNotification', {
      type: 'Notification',
      args: {
        id: idArg({ required: true }),
        seen: booleanArg({ required: true }),
      },
      resolve: (parent, args, ctx) => UpdateNotification(parent, args, ctx),
    })

    t.field('updateLandingInfo', {
      type: 'LandingInfo',
      args: {
        id: idArg({ required: true }),
        cta: stringArg({ required: false }),
        displayName: stringArg({ required: false }),
        description: stringArg({ required: false }),
      },
      resolve: (parent, args, ctx) => UpdateLandingInfo(parent, args, ctx),
    })

    t.field('createLandingInfo', {
      type: 'LandingInfo',
      args: {
        cta: stringArg({ required: false }),
        businessId: idArg({ required: true }),
        imagesUrl: stringArg({ required: true, list: true }),
        displayName: stringArg({ required: true }),
        description: stringArg({ required: true }),
      },
      resolve: (parent, args, ctx) => CreateLandingInfo(parent, args, ctx),
    })

    t.field('addImagesLandingInfo', {
      type: 'LandingInfo',
      args: {
        landingInfoId: idArg(),
        imagesUrl: stringArg({ list: true }),
      },
      resolve: (parent, args, ctx) => AddImagesLandingInfo(parent, args, ctx),
    })

    t.field('deleteLandingInfo', {
      type: 'LandingInfo',
      args: {
        id: idArg(),
      },
      resolve: (parent, args, ctx) => DeleteLandingInfo(parent, args, ctx),
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
