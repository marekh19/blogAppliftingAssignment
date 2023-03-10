import { Suspense } from 'react'

import { ArticleSummaryInHomepage } from '@components/Articles/InHomepage'
import { getAllArticles } from '~/utils/api/articles'
import { sortObjectsByCreatedAt } from '~/utils/formatters'

import Loading from './loading'

const HomePage = async () => {
  const articles = await getAllArticles()
  const sortedArticles = articles ? sortObjectsByCreatedAt(articles) : null

  return (
    <>
      <h1 className="text-4xl font-medium">Recent Articles</h1>
      <Suspense fallback={<Loading />}>
        <div className="my-14 flex flex-col gap-12">
          {sortedArticles ? (
            sortedArticles.map((a) => (
              <ArticleSummaryInHomepage
                key={a.articleId}
                articleId={a.articleId}
                title={a.title}
                createdAt={a.createdAt}
                perex={a.perex}
              />
            ))
          ) : (
            <p className="text-2xl">No articles found</p>
          )}
        </div>
      </Suspense>
    </>
  )
}

export default HomePage
