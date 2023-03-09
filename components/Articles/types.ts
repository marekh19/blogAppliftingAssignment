export type ArticleShortInfo = {
  articleId: string
  title: string
  perex: string
  createdAt: string
}

export type ArticleFullDetails = {
  articleId: string
  title: string
  perex: string
  imageId: string | null
  createdAt: string
  lastUpdatedAt: string
  content: string
  comments: [
    {
      commentId: string
      articleId: string
      author: string
      content: string
      postedAt: string
      score: number
    }
  ]
}
