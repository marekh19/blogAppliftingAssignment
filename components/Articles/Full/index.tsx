import type { FC } from 'react'

import type { ArticleFullDetails } from '~/utils/api/articles'
import { prettifyDate } from '~/utils/formatters'

type Props = {
  article: ArticleFullDetails
}

export const FullArticle: FC<Props> = ({ article }) => {
  return (
    <article>
      <h1 className="mb-6 text-4xl font-medium">{article.title}</h1>
      <p className="text-sm text-secondary">
        {prettifyDate(article.createdAt)}
      </p>
      <div className="border-b-2 border-gray-100 py-6">{article.content}</div>
    </article>
  )
}
