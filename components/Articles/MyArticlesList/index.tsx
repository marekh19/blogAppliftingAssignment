'use client'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import Loading from '~/app/loading'
import { Routes } from '~/constants/routes'
import { getAllArticles } from '~/utils/api/articles'
import { deleteArticle } from '~/utils/api/articles'

import { TableRow } from './parts/TableRow'

import type { ArticleShortInfo } from '../types'

export const MyArticlesList: FC = () => {
  // session
  const { data: session } = useSession()
  const accessToken = session?.user.access_token ?? ''

  // router
  const router = useRouter()

  const [articles, setArticles] = useState<ArticleShortInfo[]>([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const getArticleData = async () => {
      const articles = await getAllArticles()
      if (articles) {
        setArticles(articles)
      }
    }

    setIsLoading(true)
    getArticleData().catch(console.error)
    setIsLoading(false)
  }, [articles])

  const handleEdit = (articleId: string) => {
    router.push(`${Routes.EDIT_ARTICLE}/${articleId}`)
  }

  const handleDelete = async (articleId: string) => {
    const isDeleted = await deleteArticle(articleId, accessToken)
    if (isDeleted && articles) {
      setArticles((prevArticles) =>
        prevArticles.filter((article) => article.articleId !== articleId)
      )
    }
  }

  if (!isLoading && articles && session) {
    return (
      <table className="table-auto">
        <thead>
          <tr className="py-3 text-left font-bold">
            <th>Article title</th>
            <th>Perex</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <TableRow
              key={article.articleId}
              articleId={article.articleId}
              perex={article.perex}
              title={article.title}
              onDelete={async () => await handleDelete(article.articleId)}
              onEdit={() => handleEdit(article.articleId)}
            />
          ))}
        </tbody>
      </table>
    )
  } else {
    return <Loading />
  }
}
