import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { MakeCreatePostUseCase } from './factories/make-create-post-use-case'

const bodySchema = z.object({
  content: z.string(),
  title: z.string(),
  description: z.string(),
})

export class CreatePostController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { content, description, title } = bodySchema.parse(request.body)
    const createPostUseCase = MakeCreatePostUseCase()

    createPostUseCase.execute({ content, description, title })

    reply.status(201).send()
  }
}
