import axios from 'axios'

import { apiKey, apiUrl } from './lib'

type AddCommentParams = {
  accessToken: string
  articleId: string
  author: string
  content: string
}

export const addComment = async ({
  accessToken,
  articleId,
  author,
  content,
}: AddCommentParams) => {
  try {
    const res = await axios.post(
      `${apiUrl}/comments`,
      {
        articleId,
        author,
        content,
      },
      {
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: accessToken,
        },
      }
    )
    if (res.status === 201) {
      return true
    }
    return null
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    return null
  }
}
