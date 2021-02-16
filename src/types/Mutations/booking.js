const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId } = require('../../utils')
const { createConnectObject } = require('../../utils')
var nodemailer = require('nodemailer')
const moment = require('moment')

const { NOTIFICATION_TYPES } = require('../../consts')

var transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'ignacio@agendable.io',
    pass: 'UVfs6vMJLGGQ',
  },
})

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

  if (clientEmail) {
    var clientMailOptions = {
      from: 'ignacio@agendable.io',
      to: `${clientEmail}`,
      subject: `Reserva ${branch.name}`,
      text: 'Falta HTML',
    }

    var adminMailOptions = {
      from: 'ignacio@agendable.io',
      to: `${branch.business.owner.email}`,
      subject: `Reserva ${branch.name}`,
      text: 'Falta HTML',
    }

    transporter.sendMail(clientMailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })

    transporter.sendMail(adminMailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
  }

  const booking = await ctx.prisma.booking.create({
    data: bookingInfo,
    include: {
      branch: true,
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
    bookingInfo[branch] = { connect: { id: branchId } }
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
  var clientMailOptions = {
    from: 'ignacio@agendable.io',
    to: `${booking.clientEmail}`,
    subject: `Reserva ${booking.branch.name}`,
    text: `La resereva ha sido actualizada \n Comienzo: ${formattedStart}. \n Finaliza: ${formattedEnd}`,
  }

  transporter.sendMail(clientMailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })

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
  var clientMailOptions = {
    from: 'ignacio@agendable.io',
    to: `${booking.clientEmail}`,
    subject: `Reserva ${booking.branch.name}`,
    text: `Ha sido cancelada su reserva en el negocio ${booking.branch.business.name} para la fecha ${formattedStart}.`,
  }

  transporter.sendMail(clientMailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })

  return booking
}

module.exports = { CreateBooking, UpdateBooking, DeleteBooking }
