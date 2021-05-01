import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  const articles = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Learn Vue.js' },
    { id: 3, title: 'Learn NextJS' },
    { id: 4, title: 'Learn Node.js' },
  ]

  try {
    const article = articles.find(article => article.id === parseInt(id, 10))
    if(article) {
      res.status(200).json(article)
    } else {
      res.status(404).json({ statusCode: 404, message: "Article not found" })
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
