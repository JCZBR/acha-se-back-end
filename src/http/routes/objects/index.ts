import { FastifyInstance } from 'fastify'
import { handleCreateObject } from './create'
import { authMiddleware } from '../../../middlewares/auth'
import { handleFindObjectsByCategory } from './findByCategory'
import { handleDevolution } from './devolution'


export async function objectsHandler(app: FastifyInstance) {
  app.addHook('preHandler', authMiddleware)
  app.post('/', handleCreateObject)
  app.get('/', handleFindObjectsByCategory)
  app.post('/devolution', handleDevolution)
}