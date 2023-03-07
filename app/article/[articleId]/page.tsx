import { FullArticle } from '~/components/Articles/Full'
import { getSingleArticle } from '~/utils/api/articles'

type Params = {
  params: {
    articleId: string
  }
}

const ArticleDetailPage = async ({ params }: Params) => {
  const article = await getSingleArticle(params.articleId)
  console.log(params)

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
