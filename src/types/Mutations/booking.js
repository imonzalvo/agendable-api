const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId } = require('../../utils')
const { createConnectObject } = require('../../utils')
var nodemailer = require('nodemailer')

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

  const branch = await ctx.prisma.branch.findOne({
    where: {
      id: branchId,
    },
  })

  if (clientEmail) {
    var mailOptions = {
      from: 'ignacio@agendable.io',
      to: `${clientEmail}`,
      subject: `Reserva ${branch.name}`,
      text: 'Falta HTML',
    }

    transporter.sendMail(mailOptions, function (error, info) {
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

  console.log('booking', booking, booking.branch)
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
    bookingInfo[services] = { connect: connectServices }
  }

  if (employeeId) {
    bookingInfo[employee] = { connect: { id: employeeId } }
  }

  const booking = ctx.prisma.booking.update({
    where: { id: id },
    data: bookingInfo,
  })

  return booking
}

const DeleteBooking = async (parent, { id }, ctx) => {
  return ctx.prisma.booking.delete({
    where: { id },
  })
}

module.exports = { CreateBooking, UpdateBooking, DeleteBooking }
