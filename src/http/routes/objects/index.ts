import { FastifyInstance } from 'fastify'


export async function authHandler(app: FastifyInstance) {
  app.post('/', handleSignUp)
}
