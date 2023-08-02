import { PrismaClient } from "@prisma/client";
import { Post } from "../../domain/entities/post";
import { PostMapper } from "../../mappers/post-mapper";
import { IPostRepository } from "../post-repository";


const prisma = new PrismaClient()

export class PrismaPostRepository implements IPostRepository{
  async create(post: Post) {
    const data = PostMapper.toPersistent(post)
    
    await prisma.post.create({data})
  }
  async exists(title: string) {
    const post = await prisma.post.findUnique({
      where:{
        title
      }
    })

    if(!post) {
      return false
    }

    return true
  }

  async findById(id: string) {
    const post = await prisma.post.findUnique({
      where:{
        id
      }
    })

    if(!post) {
      return null
    }

    return PostMapper.toDomain(post)
  }
}