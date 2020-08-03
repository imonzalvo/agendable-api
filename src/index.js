require('dotenv').config()
const { GraphQLServer, PubSub } = require('graphql-yoga')
const { nexusPrismaPlugin } = require('nexus-prisma')
const { makeSchema } = require('@nexus/schema')
const { PrismaClient } = require('@prisma/client')
const { permissions } = require('./permissions')
const types = require('./types')
const prisma = new PrismaClient()

const pubsub = new PubSub()

new GraphQLServer({
  schema: makeSchema({
    types,
    plugins: [nexusPrismaPlugin()],
    outputs: {
      schema: __dirname + '/../schema.graphql',
      typegen: __dirname + '/generated/nexus.ts',
    },
  }),
  middlewares: [permissions],
  context: (request) => {
    return {
      ...request,
      prisma,
      pubsub,
    }
  },
}).start(
  {
    subscriptions: 'ws://ec2-54-245-28-77.us-west-2.compute.amazonaws.com:8080',
  },
  () =>
    console.log(
      `🚀 ${process.env.PORT}Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql-auth#using-the-graphql-api`,
    ),
)
