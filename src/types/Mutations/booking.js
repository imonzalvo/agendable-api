const { createConnectObject } = require('../../utils')
const moment = require('moment')
const {
  confirmationEmail,
  updateBookingEmail,
  deleteBookingEmail,
  clientConfirmationEmail,
} = require('../../mailer')
const { NOTIFICATION_TYPES } = require('../../consts')

const CreateBooking = async (
  parent,
  {
    start,
    end,
    status,
    clientId,
    branchId,
    servicesId,
    employeeId,
    clientEmail,
    clientPhone,
    clientName,
    clientFamilyName,
  },
  ctx,
) => {
  const connectServices = createConnectObject(servicesId)

  const bookingInfo = {
    start,
    end,
    status,
    branch: { connect: { id: branchId } },
    services: { connect: connectServices },
    employee: { connect: { id: employeeId } },
    clientEmail,
    clientPhone,
    clientName,
    clientFamilyName,
  }

  if (clientId) {
    bookingInfo[client] = { connect: { id: clientId } }
  }

  const branch = await ctx.prisma.branch.findUnique({
    where: {
      id: branchId,
    },
    include: {
      business: {
        include: {
          owner: {
            select: {
              email: true,
              id: true,
            },
          },
        },
      },
    },
  })

  const booking = await ctx.prisma.booking.create({
    data: bookingInfo,
    include: {
      branch: true,
      services: true,
    },
  })

  const formattedBookingStart = moment(booking.start).format('MMM DD h:mm A')
  await ctx.prisma.notification.create({
    data: {
      type: NOTIFICATION_TYPES.BOOKING_CREATED,
      title: `New booking created at ${formattedBookingStart}`,
      user: { connect: { id: branch.business.owner.id } },
      seen: false,
      resourceId: booking.id,
    },
  })

  if (clientEmail) {
    confirmationEmail(
      branch.business.owner.email,
      branch.name,
      formattedBookingStart,
      booking,
    )
  }
  clientConfirmationEmail(clientEmail, branch.name, booking, branch)

  ctx.pubsub.publish('NEW_BOOKING', {
    newBooking: booking,
  })

  return booking
}

const UpdateBooking = async (
  parent,
  {
    id,
    start,
    end,
    status,
    clientId,
    branchId,
    servicesId,
    employeeId,
    clientEmail,
    clientPhone,
    clientName,
    clientFamilyName,
  },
  ctx,
) => {
  const connectServices = createConnectObject(servicesId)

  const bookingInfo = {
    start,
    end,
    status,
    clientEmail,
    clientPhone,
    clientName,
    clientFamilyName,
  }

  if (clientId) {
    bookingInfo[client] = { connect: { id: clientId } }
  }

  if (branchId) {
    bookingInfo["branch"] = { connect: { id: branchId } }
  }

  if (servicesId && servicesId.length) {
    bookingInfo['services'] = { connect: connectServices }
  }

  if (employeeId) {
    bookingInfo['employee'] = { connect: { id: employeeId } }
  }

  const booking = await ctx.prisma.booking.update({
    where: { id: id },
    data: bookingInfo,
    include: {
      branch: true,
    },
  })

  const formattedStart = moment(booking.start).format('MMM DD h:mm A')
  const formattedEnd = moment(booking.end).format('MMM DD h:mm A')

  updateBookingEmail(booking.clientEmail, booking.branch.name, formattedStart)

  ctx.pubsub.publish('UPDATED_BOOKING', {
    updatedBooking: booking,
  })

  return booking
}

const DeleteBooking = async (parent, { id }, ctx) => {
  const booking = await ctx.prisma.booking.delete({
    where: { id },
    include: {
      branch: { include: { business: true } },
    },
  })
  ctx.pubsub.publish('DELETED_BOOKING', {
    deletedBooking: booking,
  })

  const formattedStart = moment(booking.start).format('MMM DD h:mm A')
  deleteBookingEmail(booking.clientEmail, booking.branch.name, formattedStart)

  return booking
}

module.exports = { CreateBooking, UpdateBooking, DeleteBooking }
