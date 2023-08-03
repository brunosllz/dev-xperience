import { describe, expect, it, beforeEach } from 'vitest'
import { CreatePost } from './create-post'
import { IPostRepository } from '../repositories/post-repository'
import { InMemoryPostRepository } from '../repositories/in-memory/in-memory-post-repository'

let sut: CreatePost
let postRepository: IPostRepository

describe('Create post', () => {
  beforeEach(() => {
    postRepository = new InMemoryPostRepository()
    sut = new CreatePost(postRepository)
  })

  it('should be able create a new post', async () => {
    await sut.execute({
      content: 'content example',
      description: 'description example',
      title: 'title example',
    })

    const postWasCreated = await postRepository.exists('title example')

    expect(postWasCreated).toBeTruthy()
  })
})
