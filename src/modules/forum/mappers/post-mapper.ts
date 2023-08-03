import { Post } from '../domain/entities/post'
import { Post as RawPost } from '@prisma/client'

export class PostMapper {
  static toPersistent(post: Post): RawPost {
    return {
      content: post.content,
      description: post.description,
      id: post.id,
      title: post.title,
    }
  }

  static toDomain(post: RawPost): Post {
    return Post.create({
      content: post.content,
      description: post.description,
      title: post.title,
    })
  }
}
