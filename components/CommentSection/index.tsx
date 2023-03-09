import type { FC } from 'react'

import { AddComment } from './parts/AddComment'
import { Comment } from './parts/Comment'

type TComment = {
  commentId: string
  articleId: string
  author: string
  content: string
  postedAt: string
  score: number
}

type Props = {
  comments: TComment[]
  articleId: string
}

export const CommentSection: FC<Props> = ({ comments, articleId }) => {
  return (
    <div className="mt-6">
      <h4 className="text-2xl font-medium">{`Comments (${comments.length})`}</h4>
      <AddComment articleId={articleId} />
      {comments.map((comment) => (
        <Comment
          key={comment.commentId}
          author={comment.author}
          commentId={comment.commentId}
          content={comment.content}
          postedAt={comment.postedAt}
          score={comment.score}
        />
      ))}
    </div>
  )
}
