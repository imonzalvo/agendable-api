var nodemailer = require('nodemailer')
var Email = require('email-templates')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const express = require('express')
const moment = require('moment')

const viewPath = path.resolve(__dirname, './templates/views/')
const partialsPath = path.resolve(__dirname, './templates/partials')

var transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'admin@agendable.io',
    pass: '3FVkAhK2WFR9',
  },
})

const verificationCodeEmail = (clientEmail, code) => {
  const clientEmailInfo = `Su codigo de verificacion es: ${code}`
  var clientMailOptions = {
    from: 'admin@agendable.io',
    to: clientEmail,
    subject: `Verificacion email Agendable`,
    text: clientEmailInfo,
  }

  transporter.sendMail(clientMailOptions, function (error, info) {
    if (error) {
      // console.log(error)
    } else {
      // console.log('Email sent: ' + info.response)
    }
  })
}

const confirmationEmail = (clientEmail, branchName, start, booking) => {
  console.log("booking", branchName, start, booking)
  const clientEmailInfo = `Se ha creado una reserva para ${branchName} para le fecha ${start}\nCliente: ${booking.clientName}\nTelefono: ${booking.clientPhone} \nEmail: ${booking.clientEmail}`
  var clientMailOptions = {
    from: 'admin@agendable.io',
    to: `${clientEmail}`,
    subject: `Reserva ${branchName}`,
    text: clientEmailInfo,
  }

  transporter.sendMail(clientMailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

const clientConfirmationEmail = (clientEmail, branchName, booking, branch) => {
  const formattedBookingStartDate = moment(booking.start).format('MMM DD')
  const formattedBookingStartTime = moment(booking.start).format('h:mm A')

  const servicesNames = booking.services.reduce((acc, current) => {
    return acc + `${current.name} `
  }, '')

  var clientMailOptions = {
    from: 'admin@agendable.io',
    to: `${clientEmail}`,
    subject: `Reserva ${branch.business.name}`,
    template: 'index',
    context: {
      code: booking.id,
      clientName: booking.clientName,
      date: formattedBookingStartDate,
      hour: formattedBookingStartTime,
      services: servicesNames,
      phone: `${branch.business.phone}`,
      address: `${branch.address}`,
      business: `${branch.business.name}`,
    },
  }

  transporter.use(
    'compile',
    hbs({
      viewEngine: {
        extName: '.handlebars',
        layoutsDir: viewPath,
        defaultLayout: false,
        partialsDir: partialsPath,
        express,
      },
      viewPath: viewPath,
      extName: '.handlebars',
    }),
  )
  transporter.sendMail(clientMailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

const updateBookingEmail = (clientEmail, branchName, start) => {
  const clientEmailInfo = `La resereva ha sido actualizada \n Comienzo: ${start}.`
  var clientMailOptions = {
    from: 'admin@agendable.io',
    to: clientEmail,
    subject: `Reserva ${branchName}`,
    text: clientEmailInfo,
  }

  transporter.sendMail(clientMailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

const deleteBookingEmail = (clientEmail, branchName, start) => {
  const clientEmailInfo = `Ha sido cancelada su reserva en el negocio ${branchName} para la fecha ${start}.`
  var clientMailOptions = {
    from: 'admin@agendable.io',
    to: clientEmail,
    subject: `Reserva ${branchName}`,
    text: clientEmailInfo,
  }

  transporter.sendMail(clientMailOptions, function (error, info) {
    // if (error) {
    //   console.log(error)
    // } else {
    //   console.log('Email sent: ' + info.response)
    // }
  })
}

module.exports = {
  verificationCodeEmail,
  confirmationEmail,
  updateBookingEmail,
  deleteBookingEmail,
  clientConfirmationEmail,
}
