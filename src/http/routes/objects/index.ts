import { FastifyInstance } from 'fastify'
import { handleCreateObject } from './create'
import { authMiddleware } from '../../../middlewares/auth'
import { handleFindAllObjects } from './findAll'
import { handleFindObjectsByCategory } from './findByCategory'


export async function objectsHandler(app: FastifyInstance) {
  // app.addHook('preHandler', authMiddleware)
  app.post('/', handleCreateObject)
  app.get('/', handleFindObjectsByCategory)
}