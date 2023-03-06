import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/constants/routes'
import { prettifyDate } from '~/utils/formatters'

type Props = {
  articleId: string
  title: string
  perex: string
  createdAt: string
}

export const Article: FC<Props> = ({ articleId, title, perex, createdAt }) => {
  return (
    <article className="max-w-xl">
      <Link href={`${Routes.ARTICLE}/${articleId}`}>
        <h4 className="mb-4 text-2xl font-medium">{title}</h4>
      </Link>
      <p className="mb-4 text-sm">{prettifyDate(createdAt)}</p>
      <p className="mb-5">{perex}</p>
      <Link
        className="text-sm text-blue"
        href={`${Routes.ARTICLE}/${articleId}`}
      >
        Read whole article
      </Link>
    </article>
  )
}
