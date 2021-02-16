require('dotenv').config()
// const { GraphQLServer, PubSub } = require('graphql-yoga')
// const { nexusPrismaPlugin } = require('nexus-prisma')
// const { makeSchema, connectionPlugin } = require('@nexus/schema')

const { ApolloServer, PubSub } = require('apollo-server')
const { applyMiddleware } = require('graphql-middleware')
const { nexusPrisma } = require('nexus-plugin-prisma')
const { makeSchema, declarativeWrappingPlugin } = require('nexus')

const { PrismaClient } = require('@prisma/client')
const { permissions } = require('./permissions')
const types = require('./types')

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

const pubsub = new PubSub()

// new GraphQLServer({
//   schema: makeSchema({
//     types,
//     plugins: [nexusPrismaPlugin(), connectionPlugin()],
//     outputs: {
//       schema: __dirname + '/../schema.graphql',
//       typegen: __dirname + '/generated/nexus.ts',
//     },
//   }),
//   middlewares: [permissions],
//   context: (request) => {
//     return {
//       ...request,
//       prisma,
//       pubsub,
//     }
//   },
// }).start(() =>
//   console.log(
//     `🚀 ${process.env.PORT}Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql-auth#using-the-graphql-api`,
//   ),
// )


const server = new ApolloServer({
  schema: applyMiddleware(
    makeSchema({
      types,
      subscriptions: {
        path: '/subscriptions'
      },
      plugins: [nexusPrisma(), declarativeWrappingPlugin()],
      outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
      },
    }),
    permissions,
  ),
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      pubsub
    }
  },
})

server
  .listen(8080)
  .then(({ url }) =>
    console.log(
      `🚀 Server ready at: ${url}\n⭐️ See sample queries: http://pris.ly/e/js/graphql-auth#using-the-graphql-api`,
    ),
  )