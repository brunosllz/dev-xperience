import { Post } from "../../domain/entities/post";
import { IPostRepository } from "../post-repository";

export class InMemoryPostRepository implements IPostRepository{
  private posts: Post[] = [];
  
  async create(post: Post) {
    this.posts.push(post)
  }

  async exists(title: string) {
    return this.posts.some(post => post.title === title)
  }

  async findById(id: string) {
    const post = this.posts.find(post => post.id === id);

    if(!post) {
      return null
    }

    return post 
  }
}