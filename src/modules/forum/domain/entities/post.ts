import { Entity } from '@/core/domain/entity'
import { UniqueEntityID } from '@/core/domain/unique-entity-id'

interface Props {
  title: string
  description: string
  content: string
}

export class Post extends Entity<Props> {
  get title() {
    return this.props.title
  }

  get description() {
    return this.props.description
  }

  get content() {
    return this.props.content
  }

  static create(
    {
      title,
      description,
      content,
    }: { title: string; description: string; content: string },
    id?: UniqueEntityID,
  ) {
    const post = new Post(
      {
        content,
        description,
        title,
      },
      id,
    )

    return post
  }
}
