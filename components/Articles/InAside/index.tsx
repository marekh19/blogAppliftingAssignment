import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/constants/routes'

type Props = {
  articleId: string
  title: string
  perex: string
}

export const SmallArticleInAside: FC<Props> = ({ articleId, perex, title }) => {
  const getTruncatedPerex = (perex: string) => {
    if (perex.length > 150) {
      return `${perex.slice(0, 151)}...`
    }
    return perex
  }

  return (
    <article className="first:mt0 my-6 last:mb-0">
      <Link href={`${Routes.ARTICLE}/${articleId}`}>
        <h6 className="mb-2 font-medium">{title}</h6>
        <p>{getTruncatedPerex(perex)}</p>
      </Link>
    </article>
  )
}
