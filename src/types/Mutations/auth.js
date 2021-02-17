const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId } = require('../../utils')
const crypto = require('crypto')
const { verificationCodeEmail } = require("../../mailer");

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
    phone: stringArg(),
  },
  resolve: async (
    parent,
    { name, email, phone, password, givenName, familyName, userType, userName },
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
        phone,
        verifyToken,
      },
    })

    verificationCodeEmail(email, verifyToken);

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
    console.log('userr', userQuery)
    const user = await context.prisma.user.findUnique({
      where: userQuery,
    })

    if (!user) {
      throw new Error(`No user found`)
    }

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
    const user = await context.prisma.user.findUnique({
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
      user,
    }
  },
}

module.exports = { SignUp, Login, ConfirmUser }
