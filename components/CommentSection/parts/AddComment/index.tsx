'use client'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import type { FC, FormEvent } from 'react'

import { UserIcon } from '@components/Header/parts/UserLogin/parts/UserIcon'
import { Input } from '~/components/Input'
import { addComment } from '~/utils/api/comments'

type Props = {
  articleId: string
}

export const AddComment: FC<Props> = ({ articleId }) => {
  // session
  const { data: session } = useSession()
  const accessToken = session?.user.access_token ?? ''

  const [comment, setComment] = useState('')
  const [commentError, setCommentError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isCommentAdded = await addComment({
      accessToken,
      author: '',
      articleId,
      content: comment,
    })
    if (!isCommentAdded) {
      setCommentError('Something went wrong')
    } else {
      setCommentError(null)
    }
    setComment('')
  }

  return (
    <div className="my-6">
      <div className="my-6 flex w-full items-center">
        <UserIcon className="mr-7 h-11 w-11 rounded-full bg-gray-100" />
        <form className="w-96" onSubmit={handleSubmit}>
          <Input
            label=""
            isWithoutLabel
            type="text"
            name="comment"
            placeholder="Join the discussion"
            value={comment}
            onChange={(event) => {
              setComment(event.target.value)
            }}
          />
        </form>
      </div>
      {commentError && <p className="text-error">{commentError}</p>}
    </div>
  )
}
