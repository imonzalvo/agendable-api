const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId } = require('../../utils')
var nodemailer = require('nodemailer')
const crypto = require('crypto')

var transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'ignacio@agendable.io',
    pass: 'UVfs6vMJLGGQ',
  },
})

const SignUp = {
  type: 'AuthPayload',
  args: {
    name: stringArg({ nullable: true }),
    email: stringArg(),
    password: stringArg(),
    givenName: stringArg(),
    familyName: stringArg(),
    userName: stringArg(),
    userType: stringArg(),
  },
  resolve: async (
    parent,
    { name, email, password, givenName, familyName, userType, userName },
    ctx,
  ) => {
    const hashedPassword = await hash(password, 10)
    const buffer = crypto.randomBytes(48)
    var verifyToken = buffer.toString('hex').slice(0, 6)
    const user = await ctx.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        givenName,
        familyName,
        userName,
        userType,
        verifyToken,
      },
    })

    var mailOptions = {
      from: 'ignacio@agendable.io',
      to: `${email}`,
      subject: `Verificacion email Agendable`,
      text: `Su codigo de verificacion es: ${verifyToken}`,
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })

    return {
      token: sign({ userId: 'user.id' }, APP_SECRET),
      user,
    }
  },
}

const Login = {
  type: 'AuthPayload',
  args: {
    email: stringArg(),
    password: stringArg(),
    phone: stringArg(),
  },
  resolve: async (parent, { email, password, phone }, context) => {
    const userQuery = phone ? { phone } : { email }
    const user = await context.prisma.user.findOne({
      where: userQuery,
    })
    console.log('userr', user)

    if (user.length == 0) {
      throw new Error(`No user found`)
    }
    if (user.verifyToken !== '') {
      throw new Error(`User not verified`)
    }
    const passwordValid = await compare(password, user.password)
    if (!passwordValid) {
      throw new Error('Invalid password')
    }
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    }
  },
}

const ConfirmUser = {
  type: 'AuthPayload',
  args: {
    email: stringArg(),
    verifyToken: stringArg(),
  },
  resolve: async (parent, { email, verifyToken }, context) => {
    const user = await context.prisma.user.findOne({
      where: {
        email,
      },
    })
    if (!user) {
      throw new Error(`No user found for email: ${email}`)
    }
    if (user.verifyToken === '') {
      throw new Error(`User already verified`)
    }
    if (user.verifyToken !== verifyToken) {
      throw new Error(`Wrong token`)
    }

    const updatedUser = await context.prisma.user.update({
      where: { email },
      data: {
        verifyToken: '',
      },
    })
    return {
      token: sign({ userId: updatedUser.id }, APP_SECRET),
      updatedUser,
    }
  },
}

module.exports = { SignUp, Login, ConfirmUser }
