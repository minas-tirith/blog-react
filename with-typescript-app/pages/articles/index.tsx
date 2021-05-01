import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Axios from 'axios'

import { Article } from '../../interfaces'
import Layout from '../../components/Layout'
import ListArticle from '../../components/ListArticle'

type Props = {
  items: Article[]
  error?: string
}

const ArticleListPage = ({ items, error }: Props) => {
  if (error) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {error}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title="Articles List">
      <h1>Articles</h1>
      <ListArticle items={items} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await Axios.get('http://localhost:3000/api/articles')
    const items: Article[] = data;
    return { props: { items } }
  } catch (err) {
    return { props: { error: err.message } }
  }
}

export default ArticleListPage
