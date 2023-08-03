import { test, expect } from 'vitest'
import { Post } from './post'

test('create post', () => {
  const post = Post.create({
    title: 'title example',
    content: 'test',
    description: 'test',
  })

  expect(post.title).toEqual('title example')
  expect(post.id).toEqual(expect.any(String))
})
