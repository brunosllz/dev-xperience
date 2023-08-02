import { Post } from "../domain/entities/post"

export interface IPostRepository {
  create(post: Post): Promise<void>
  exists(title: string): Promise<boolean>
  findById(id: string): Promise<Post | null>
}