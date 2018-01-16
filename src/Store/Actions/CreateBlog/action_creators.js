import { ADD_BLOG } from './actions'

export function createBlog(title, text, owner, images) {
  return {
    type: ADD_BLOG,
    title,
    text,
    owner,
    images
  }
}