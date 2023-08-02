import { FastifyInstance } from 'fastify'
import { CreatePostController } from '../controllers/create-post-controller'


const createPostController = new CreatePostController()

export async function postRoutes(app: FastifyInstance) {
  app.post('/posts', createPostController.handle)
}
