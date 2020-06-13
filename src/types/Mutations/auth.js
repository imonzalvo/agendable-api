const { stringArg } = require('@nexus/schema')
const { sign } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')
const { APP_SECRET, getUserId } = require('../../utils')

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
    const user = await ctx.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        givenName,
        familyName,
        userName,
        userType,
      },
    })
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    }
  },
}

const Login = {
  type: 'AuthPayload',
  args: {
    email: stringArg(),
    password: stringArg(),
  },
  resolve: async (parent, { email, password }, context) => {
    const user = await context.prisma.user.findOne({
      where: {
        email,
      },
    })
    if (!user) {
      throw new Error(`No user found for email: ${email}`)
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

module.exports = { SignUp, Login }
