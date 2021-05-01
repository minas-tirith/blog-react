import React from 'react'
import Link from 'next/link'

import { Article } from '../interfaces'

type Props = {
  data: Article
}

const ListArticleItem = ({ data }: Props) => (
  <Link href="/articles/[id]" as={`/articles/${data.id}`}>
    <a>
      {data.id}: {data.title}
    </a>
  </Link>
)

export default ListArticleItem
