'use client'
import type { FC } from 'react'

import { UserIcon } from '~/components/Header/parts/UserLogin/parts/UserIcon'
import { getTimeAgo, prefixScore } from '~/utils/formatters'

import { DownvoteIcon } from './parts/DownvoteIcon'
import { UpvoteIcon } from './parts/UpvoteIcon'

type Props = {
  commentId: string
  author: string
  content: string
  postedAt: string
  score: number
}

export const Comment: FC<Props> = ({
  commentId,
  author,
  content,
  postedAt,
  score,
}) => {
  const handleUpvote = () => {
    alert(`Comment id: ${commentId}\nUPVOTED!`)
  }

  const handleDownvote = () => {
    alert(`Comment id: ${commentId}\nDOWNVOTED!`)
  }

  return (
    <article className="mb-6 flex gap-7 first:mt-6 last:mb-0">
      <UserIcon className="h-11 w-11 rounded-full bg-gray-100" />
      <div className="">
        <div className="mb-2 flex items-center gap-2">
          <p className="font-bold">{author}</p>
          <p className="text-sm text-secondary">{getTimeAgo(postedAt)}</p>
        </div>
        <p className="mb-2">{content}</p>
        <div className="flex">
          <p className="pr-2">{prefixScore(score)}</p>
          <button
            className="border-l-2 border-r-2 border-gray-100 px-2"
            type="button"
            onClick={handleUpvote}
          >
            <UpvoteIcon className="w-6" />
          </button>
          <button
            className="border-r-2 border-gray-100 px-2"
            type="button"
            onClick={handleDownvote}
          >
            <DownvoteIcon className="w-6" />
          </button>
        </div>
      </div>
    </article>
  )
}
