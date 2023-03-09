import type { NextPage } from 'next'
import Link from 'next/link'

import { MyArticlesList } from '@components/Articles/MyArticlesList'
import { Button } from '@components/Button'
import { Routes } from '~/constants/routes'

const MyArticlesPage: NextPage = () => {
  return (
    <>
      <div className="flex gap-8">
        <h1 className="text-4xl font-medium">My articles</h1>
        <Link href={Routes.CREATE_ARTICLE}>
          <Button>Create new article</Button>
        </Link>
      </div>
      <div className="mt-9">
        <MyArticlesList />
      </div>
    </>
  )
}

export default MyArticlesPage
