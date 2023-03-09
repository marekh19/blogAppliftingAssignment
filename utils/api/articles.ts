import axios from 'axios'

import type { ArticleFullDetails } from '~/components/Articles/types'

import { apiUrl, apiKey } from './lib'

type CreateArticleParams = {
  title: string
  perex: string
  content: string
  access_token: string
}

// POST /articles
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

type ArticleWithoutDetails = {
  articleId: string
  title: string
  perex: string
  imageId: string
  createdAt: string
  lastUpdatedAt: string
}

// GET /articles
export const getAllArticles = async () => {
  try {
    const res = await fetch(`${apiUrl}/articles`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      next: {
        revalidate: 10,
      },
    })
    if (res && res.status === 200) {
      const data = await res.json()
      const articles = data.items as ArticleWithoutDetails[]
      return articles
    }
    return null
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    return null
  }
}

export const getSingleArticle = async (articleId: string) => {
  try {
    const res = await axios.get(`${apiUrl}/articles/${articleId}`, {
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    if (res.status === 200) {
      return (await res.data) as ArticleFullDetails
    }
    return null
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    return null
  }
}

export const deleteArticle = async (articleId: string, accessToken: string) => {
  try {
    const res = await axios.delete(`${apiUrl}/articles/${articleId}`, {
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: accessToken,
      },
    })
    if (res.status === 204) {
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
