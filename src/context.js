const { PrismaClient } = require('@prisma/client')
const { PubSub } = require('graphql-subscriptions')

const prisma = new PrismaClient()
const pubsub = new PubSub()

function createContext(req) {
  return {
    ...req,
    prisma: prisma,
    pubsub: pubsub,
  }
}

module.exports = createContext;