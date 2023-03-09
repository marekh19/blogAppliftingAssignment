import { FullArticle } from '~/components/Articles/Full'
import { getArticle } from '~/utils/api/articles'

type Params = {
  params: {
    articleId: string
  }
}

const ArticleDetailPage = async ({ params }: Params) => {
  const article = await getArticle(params.articleId)

  return (
    <div>
      {article ? (
        <FullArticle article={article} />
      ) : (
        <p>Something went wrong</p>
      )}
    </div>
  )
}

export default ArticleDetailPage
