import { UniqueEntityID } from '@/core/domain/unique-entity-id'
import { Post } from '../domain/entities/post'

export interface IPostRepository {
  create(post: Post): Promise<void>
  exists(title: string): Promise<boolean>
  findById(id: UniqueEntityID): Promise<Post | null>
}
