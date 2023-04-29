require('dotenv').config()
// const { GraphQLServer, PubSub } = require('graphql-yoga')
// const { nexusPrismaPlugin } = require('nexus-prisma')
// const { makeSchema, connectionPlugin } = require('@nexus/schema')
const {
  ApolloServerPluginDrainHttpServer,
} = require('@apollo/server/plugin/drainHttpServer')
const WebSocket = require('ws')
const { useServer } = require('graphql-ws/lib/use/ws')
const express = require('express')
const { createServer } = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const { expressMiddleware } = require('@apollo/server/express4')

const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { applyMiddleware } = require('graphql-middleware')
const {
  makeSchema,
  declarativeWrappingPlugin,
  asNexusMethod,
} = require('nexus')
const JSONObjectResolver = require('graphql-scalars').JSONObjectResolver
const DateTimeResolver = require('graphql-scalars').DateTimeResolver
const settings = require('nexus-prisma/generator').settings
const GraphQLScalarType = require('graphql').GraphQLScalarType

const { PrismaClient } = require('@prisma/client')
const { permissions } = require('./permissions')
const types = require('./types')
const context = require('./context')
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

const jsonScalar = new GraphQLScalarType({
  ...JSONObjectResolver,
  // Override the default 'JsonObject' name with one that matches what Nexus Prisma expects.
  name: 'Json',
})

const dateTimeScalar = new GraphQLScalarType(DateTimeResolver)

settings({
  output: '../generated/nexus-prisma',
})
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

// const server = new ApolloServer({
//   schema: applyMiddleware(
//     makeSchema({
//       types,
//       subscriptions: {
//         path: '/subscriptions'
//       },
//       // types: [asNexusMethod(jsonScalar, 'json'), asNexusMethod(dateTimeScalar, 'dateTime')],
//       plugins: [declarativeWrappingPlugin()],
//       outputs: {
//         schema: __dirname + '/../schema.graphql',
//         typegen: __dirname + '/generated/nexus.ts',
//       },
//     }),
//     permissions,
//   ),
//   context: ({ req }) => {
//     return {
//       ...req,
//       prisma,
//       pubsub
//     }
//   },
// })

// // console.log("server", server)
// // server
// //   .listen(8081)
// //   .then(({ url }) =>
// //     console.log(
// //       `🚀 Server ready at: ${url}\n⭐️ See sample queries: http://pris.ly/e/js/graphql-auth#using-the-graphql-api`,
// //     ),
// //   )

const app = express()
const httpServer = createServer(app)

const start = async () => {
  const wsServer = new WebSocket.Server({
    server: httpServer,
    path: '/graphql',
  })

  /** hand-in created schema and have the WS Server start listening */

  const schema = applyMiddleware(
    makeSchema({
      types,
      subscriptions: {
        path: '/subscriptions',
      },
      contextType: {
        module: require.resolve('./context'),
        export: 'Context',
      },
      // types: [asNexusMethod(jsonScalar, 'json'), asNexusMethod(dateTimeScalar, 'dateTime')],
      plugins: [declarativeWrappingPlugin()],
      outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
      },
    }),
    permissions,
  )
  const getDynamicContext = async (ctx, msg, args) => {
    // ctx is the graphql-ws Context where connectionParams live
    // if (ctx.connectionParams.authentication) {
    //   const currentUser = await findUser(ctx.connectionParams.authentication);
    //   return { currentUser };
    // }
    // Otherwise let our resolvers know we don't have a current user
    console.log("context", ctx)
    return ctx
  }
  const serverCleanup = useServer(
    {
      schema,
      context
    },
    wsServer,
  )

  const server = new ApolloServer({
    schema,
    plugins: [
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer }),

      // Proper shutdown for the WebSocket server.
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose()
            },
          }
        },
      },
    ],
  })

  // const { url } = await startStandaloneServer(server, {
  //   // context: ({ req }) => {
  //   //   console.log("req???", req.headers)
  //   //   return {
  //   //     ...req,
  //   //     prisma,
  //   //     // pubsub
  //   //   }
  //   // },
  //   context: context,
  //   listen: { port: 4000 },
  // })
  await server.start()

  app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    expressMiddleware(server, { context }),
  )


  console.log(`\
    ⭐️ See sample queries: http://pris.ly/e/ts/graphql-nexus#using-the-graphql-api
    `)
}

start()
const PORT = 4000
// Now that our HTTP server is fully set up, we can listen to it.
httpServer.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}/graphql`)
})
