import { UniqueEntityID } from '@/core/domain/unique-entity-id'
import { Post } from '../../domain/entities/post'
import { IPostRepository } from '../post-repository'

export class InMemoryPostRepository implements IPostRepository {
  private posts: Post[] = []

  async create(post: Post) {
    this.posts.push(post)
  }

  async exists(title: string) {
    return this.posts.some((post) => post.title === title)
  }

  async findById(id: UniqueEntityID) {
    const post = this.posts.find((post) =>
      new UniqueEntityID(post.id.toString()).equals(id),
    )

    if (!post) {
      return null
    }

    return post
  }
}
