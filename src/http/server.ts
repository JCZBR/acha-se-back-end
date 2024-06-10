import fastify from 'fastify'
import multipart from '@fastify/multipart'
import cors from '@fastify/cors'

const server = fastify()

server.register(cors, {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
})

server.register(multipart, {
  limits: {
    fileSize: 1024000000,
  },
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})