'use client'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactMarkdown from 'react-markdown'

import { Button } from '@components/Button'
import { createArticle } from '~/utils/api/articles'

export type CreateArticleFormFields = {
  title: string
  perex: string
  content: string
}

const CreateArticlePage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateArticleFormFields>()

  // session
  const { data: session } = useSession()
  const accessToken = session?.user.access_token ?? ''

  // form data
  const content = watch('content')

  // submitting state
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = async (data: CreateArticleFormFields) => {
    try {
      const { title, perex, content } = data
      console.log(data)
      setSubmitError(null)
      setIsSubmitting(true)

      const res = await createArticle({
        accessToken,
        title,
        perex,
        content,
      })
      if (res?.status === 200) {
        setIsSubmitted(true)
      } else {
        throw new Error('Failed during submission')
      }
    } catch (x) {
      if (x instanceof Error) {
        setSubmitError('Something went wrong')
        console.error(x)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {!isSubmitted && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-8">
            <h1 className="text-4xl font-medium">Create New Article</h1>
            <Button isSubmit isDisabled={isSubmitting}>
              {isSubmitting ? 'Publishing' : 'Publish Article'}
            </Button>
          </div>
          {submitError && <p className="mt-2 text-error">{submitError}</p>}
          <div className="mt-10 max-w-3xl">
            <label>
              <span>Article Title</span>
              <input
                {...register('title')}
                aria-invalid={errors.title ? 'true' : 'false'}
                placeholder="My First Article"
                type="text"
                className={`mt-2 h-[36px] w-full rounded-md border ${
                  errors.title?.message ? 'border-error' : 'border-gray-100'
                } px-3 py-[6px] placeholder-secondary outline-none focus:border-blue focus:shadow-focus`}
              />
            </label>
            {errors.title?.type === 'required' && (
              <p className="text-error">{errors.title?.message}</p>
            )}
          </div>
          <div className="mt-10 max-w-3xl">
            {errors.perex?.type === 'required' && (
              <p className="text-error">{errors.perex?.message}</p>
            )}
            <label>
              <span>Perex</span>
              <textarea
                {...register('perex')}
                aria-invalid={errors.perex ? 'true' : 'false'}
                placeholder="My Article Perex"
                className={`mt-2 h-16 w-full rounded-md border ${
                  errors.perex?.message ? 'border-error' : 'border-gray-100'
                } px-3 py-[6px] placeholder-secondary outline-none focus:border-blue focus:shadow-focus`}
              />
            </label>
          </div>

          <div className="mt-8 flex gap-4">
            <div className="flex-1">
              {errors.content?.type === 'required' && (
                <p className="text-error">{errors.content?.message}</p>
              )}
              <label>
                <span>Content</span>
                <textarea
                  {...register('content')}
                  aria-invalid={errors.content ? 'true' : 'false'}
                  placeholder="Supports markdown. Yay!"
                  className={`mt-2 h-[40rem] w-full rounded-md border ${
                    errors.content?.message ? 'border-error' : 'border-gray-100'
                  } resize-none px-3 py-[6px] placeholder-secondary outline-none focus:border-blue focus:shadow-focus`}
                />
              </label>
            </div>
            <div className="flex-1">
              <h3>Preview</h3>
              <ReactMarkdown className="prose max-w-3xl">
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </form>
      )}
      {isSubmitted && (
        <h1 className="text-4xl font-medium">
          Article Successfully Published!
        </h1>
      )}
    </div>
  )
}

export default CreateArticlePage
