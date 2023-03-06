import { Article } from '@components/Article'
import { getAllArticles } from '~/utils/api/articles'

const HomePage = async () => {
  const articles = await getAllArticles()

  return (
    <>
      <h1 className="text-4xl font-medium">Recent Articles</h1>
      <div className="my-14 flex flex-col gap-12">
        {articles ? (
          articles.map((a) => (
            <Article
              key={a.articleId}
              articleId={a.articleId}
              title={a.title}
              createdAt={a.createdAt}
              perex={a.perex}
            />
          ))
        ) : (
          <p>No articles</p>
        )}
      </div>
    </>
  )
}

export default HomePage
