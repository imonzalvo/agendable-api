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

const verificationCodeEmail = (clientEmail, code) => {
  const clientEmailInfo = `Su codigo de verificacion es: ${code}`
  var clientMailOptions = {
  from: 'ignacio@agendable.io',
  to: clientEmail,
  subject: `Verificacion email Agendable`,
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

const confirmationEmail = (clientEmail, branchName, start) => {
    const clientEmailInfo = `Se ha creado una reserva para ${branchName} a la hora ${start}`
    var clientMailOptions = {
    from: 'ignacio@agendable.io',
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

const updateBookingEmail = (clientEmail, branchName, start) => {
  const clientEmailInfo = `La resereva ha sido actualizada \n Comienzo: ${start}.`;
  var clientMailOptions = {
  from: 'ignacio@agendable.io',
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
  const clientEmailInfo = `Ha sido cancelada su reserva en el negocio ${branchName} para la fecha ${start}.`;
  var clientMailOptions = {
  from: 'ignacio@agendable.io',
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

module.exports = { verificationCodeEmail, confirmationEmail, updateBookingEmail, deleteBookingEmail }