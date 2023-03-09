'use client'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import type { FormEvent } from 'react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { TextArea } from '@components/Textarea'
import { TogglePreview } from '@components/ToggleSwitch'
import { createArticle } from '~/utils/api/articles'
import { articleValidators } from '~/utils/validators/articleValidation'

const CreateArticlePage: NextPage = () => {
  // session
  const { data: session } = useSession()

  // article data
  const [title, setTitle] = useState('')
  const [perex, setPerex] = useState('')
  const [content, setContent] = useState('')

  // errors
  const [titleError, setTitleError] = useState<string | null>(null)
  const [contentError, setContentError] = useState<string | null>(null)
  const [perexError, setPerexError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // submitting state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [isPreviewEnabled, setIsPreviewEnabled] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const errors = {
      title: articleValidators.title(title),
      perex: articleValidators.perex(perex),
      content: articleValidators.content(content),
    }

    if (errors.title) setTitleError(errors.title)
    if (errors.perex) setPerexError(errors.perex)
    if (errors.content) setContentError(errors.content)

    if (!titleError && !perexError && !contentError && session) {
      setSubmitError(null)
      setIsSubmitting(true)

      const res = await createArticle({
        access_token: session.user.access_token,
        title,
        perex,
        content,
      })
      if (res?.status === 200) {
        setIsSubmitting(false)
        setIsSubmitted(true)
        console.log(res)
      } else {
        console.log(res)
        setSubmitError('Something went wrong')
      }
    }
  }

  const handlePreview = () => {
    setIsPreviewEnabled((prev) => !prev)
  }

  return (
    <div>
      {!isSubmitted ? (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit}>
          <div className="flex gap-8">
            <h1 className="text-4xl font-medium">Create New Article</h1>
            <Button isSubmit isDisabled={isSubmitting}>
              {isSubmitting ? 'Publishing' : 'Publish Article'}
            </Button>
          </div>
          {submitError ? <p>{submitError}</p> : null}
          <Input
            label="Article Title"
            className="mt-10 max-w-3xl"
            type="text"
            name="title"
            placeholder="My First Article"
            value={title}
            error={titleError}
            onChange={(event) => {
              setTitleError(null)
              setTitle(event.target.value)
            }}
          />
          <TextArea
            className="mt-10 max-w-3xl"
            height="h-16"
            label="Perex"
            name="perex"
            placeholder="My Article Perex"
            value={perex}
            error={perexError}
            onChange={(event) => {
              setPerexError(null)
              setPerex(event.target.value)
            }}
          />
          <TogglePreview
            isToggled={isPreviewEnabled}
            className="mt-10 mb-2"
            onClick={handlePreview}
          />
          {isPreviewEnabled ? (
            <ReactMarkdown className="prose max-w-3xl">{content}</ReactMarkdown>
          ) : (
            <TextArea
              className="max-w-3xl"
              height="h-96"
              label="Content"
              name="content"
              placeholder="Supports markdown. Yay!"
              value={content}
              error={contentError}
              onChange={(event) => {
                setContentError(null)
                setContent(event.target.value)
              }}
            />
          )}
        </form>
      ) : (
        <h1 className="text-4xl font-medium">
          Article Successfully Published!
        </h1>
      )}
    </div>
  )
}

export default CreateArticlePage
