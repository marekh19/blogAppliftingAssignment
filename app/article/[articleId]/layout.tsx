import type { ReactNode } from 'react'

import { SmallArticleInAside } from '@components/Articles/InAside'
import { getAllArticles } from '~/utils/api/articles'

const ArticleLayout = async ({
  children,
  params,
}: {
  children: ReactNode
  params: { articleId: string }
}) => {
  const articles = await getAllArticles()
  const relatedArticles = articles
    ? // .filter() to show only articles different than the current one
      // eventually could do .slice(0,X) after .filter() to display only some number of articles
      articles.filter((a) => a.articleId !== params.articleId).slice(0, 5)
    : null

  return (
    <div className="mb-6 flex gap-6">
      <div className="w-2/3">{children}</div>
      <aside className="fixed left-2/3 w-1/3 border-l-2 border-gray-100 pl-6">
        <h4 className="text-2xl font-medium">Related Articles</h4>
        {relatedArticles &&
          relatedArticles?.map((a) => (
            <SmallArticleInAside
              key={a.articleId}
              articleId={a.articleId}
              perex={a.perex}
              title={a.title}
            />
          ))}
      </aside>
    </div>
  )
}

export default ArticleLayout
