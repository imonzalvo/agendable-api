require('dotenv').config({ path: '../.env' })
const AWS = require('aws-sdk')


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
const { applyMiddleware } = require('graphql-middleware')
const {
  makeSchema,
  declarativeWrappingPlugin,
} = require('nexus')
const settings = require('nexus-prisma/generator').settings

const { permissions } = require('./permissions')
const types = require('./types')
const context = require('./context')
const { uploadLandingImages } = require('./entrypoints/landingImages')

settings({
  output: '../generated/nexus-prisma',
})

const port = process.env.PORT || 4000

const app = express()
const httpServer = createServer(app)

// configure the keys for accessing AWS
AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
})

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
      plugins: [declarativeWrappingPlugin()],
      outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
      },
    }),
    permissions,
  )

  const serverCleanup = useServer(
    {
      schema,
      context,
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

  await server.start()

  app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    expressMiddleware(server, { context }),
  )

  app.use(
    '/images',
    cors({
      credentials: true,
      preflightContinue: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      origin: true,
    }),
  )

  app.post('/images', uploadLandingImages)

  console.log(`\
    ⭐️ See sample queries: http://pris.ly/e/ts/graphql-nexus#using-the-graphql-api
    `)
}

start()
// Now that our HTTP server is fully set up, we can listen to it.
httpServer.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}/graphql`)
})
