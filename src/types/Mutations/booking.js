const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId } = require('../../utils')
const { createConnectObject } = require('../../utils')

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

  const booking = ctx.prisma.booking.create({
    data: bookingInfo,
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
    where: { id: Number(id) },
    data: bookingInfo,
  })

  return booking
}

module.exports = { CreateBooking, UpdateBooking }
