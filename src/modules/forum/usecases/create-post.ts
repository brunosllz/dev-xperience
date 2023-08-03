import { Post } from '../domain/entities/post'
import { IPostRepository } from '../repositories/post-repository'

interface ICreatePostRequest {
  title: string
  description: string
  content: string
}

type ICreatePostResponse = Promise<void>

export class CreatePost {
  constructor(private readonly postRepository: IPostRepository) {}

  async execute({
    content,
    description,
    title,
  }: ICreatePostRequest): ICreatePostResponse {
    const post = Post.create({
      content,
      description,
      title,
    })

    await this.postRepository.create(post)
  }
}
