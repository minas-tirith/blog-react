import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Axios from 'axios'

import { Article } from '../../interfaces'
import Layout from '../../components/Layout'
import ArticleDetail from '../../components/ArticleDetail'

type Props = {
  item?: Article
  errors: string
}

const ArticlePage = ({ item, error }: Props) => {
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
    <Layout
      title={`${item.title}`}
    >
      {item && <ArticleDetail item={item} />}
      <p>
        <Link href="/articles">
          <a>List of articles</a>
        </Link>
      </p>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.query;
    const { data } = await Axios.get(`http://localhost:3000/api/articles/${id}`)

    const item: Article = data
    return { props: { item } }
  } catch (err) {
    return { props: { error: err.message } }
  }
}

export default ArticlePage
