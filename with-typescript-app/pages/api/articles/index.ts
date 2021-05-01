import { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([
      { id: 1, title: 'Learn React' },
      { id: 2, title: 'Learn Vue.js' },
      { id: 3, title: 'Learn NextJS' },
      { id: 4, title: 'Learn Node.js' },
    ])
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
