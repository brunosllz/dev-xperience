import { PrismaPostRepository } from '../../repositories/prisma/prisma-post-repository'
import { CreatePost } from '../../usecases/create-post'

export function MakeCreatePostUseCase() {
  const postRepository = new PrismaPostRepository()
  const useCase = new CreatePost(postRepository)

  return useCase
}
