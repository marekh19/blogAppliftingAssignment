import axios from 'axios'

import { apiUrl, apiKey } from './lib'

type CreateArticleParams = {
  title: string
  perex: string
  content: string
  access_token: string
}

export const createArticle = async ({
  title,
  perex,
  content,
  access_token,
}: CreateArticleParams) => {
  try {
    const res = await axios.post(
      `${apiUrl}/articles`,
      {
        title,
        perex,
        content,
      },
      {
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: access_token,
        },
      }
    )
    return res
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    return null
  }
}
