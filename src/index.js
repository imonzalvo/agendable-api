require('dotenv').config()
const { PubSub } = require('graphql-subscriptions')
const { applyMiddleware } = require('graphql-middleware')
const { ApolloServer } = require('apollo-server')
const { nexusPrismaPlugin } = require('nexus-prisma')
const { makeSchema } = require('@nexus/schema')
const { PrismaClient } = require('@prisma/client')
const { permissions } = require('./permissions')
const types = require('./types')
const prisma = new PrismaClient()

const pubsub = new PubSub()

new ApolloServer({
  schema: applyMiddleware(
    makeSchema({
      types,
      plugins: [nexusPrismaPlugin()],
      outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
      },
    }),
    permissions,
  ),
  context: (request) => {
    return {
      ...request,
      prisma,
      pubsub,
    }
  },
})
  .listen({ port: 4000 }, () =>
    console.log(
      `🚀 ${process.env.PORT}Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql-auth#using-the-graphql-api`,
    ),
  )
  .then(({ url, subscriptionsUrl }) => {
    console.log(`🚀 Server ready at ${url}`)
    console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`)
  })
