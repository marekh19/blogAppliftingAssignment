import type { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { CommentSection } from '@components/CommentSection'
import { mockComments } from '~/components/CommentSection/_mockComments'
import { prettifyDate } from '~/utils/formatters'

import type { ArticleFullDetails } from '../types'
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
      <div className="border-b-2 border-gray-100 py-6">
        <ReactMarkdown className="prose">{article.content}</ReactMarkdown>
      </div>
      <CommentSection
        // comments={article.comments}
        comments={mockComments} // just because I was not able to make comments work - adding a comment always returned 500 no matter what :(
        articleId={article.articleId}
      />
    </article>
  )
}
