import { randomUUID } from "node:crypto"

interface Props {
  title: string
  description: string
  content: string
}

export class Post {
  private readonly props: Props
  private readonly _id: string

  private constructor(props: Props, id?: string) {
    this.props = props
    this._id = id ?? randomUUID()
  }

  get id() {
    return this._id
  }

  get title() {
    return this.props.title
  }

  get description() {
    return this.props.description
  }

  get content() {
    return this.props.content
  }

  static create({title, description, content}: {title: string, description: string, content: string}, id?: string) {
    const post = new Post({
      content, 
      description, 
      title
    }, id)

    return post
  }
}