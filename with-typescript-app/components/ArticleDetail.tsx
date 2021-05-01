import * as React from 'react'

import { Article } from '../interfaces'

type ArticleDetailProps = {
  item: Article
}

const ListDetail = ({ item: article }: ArticleDetailProps) => (
  <div>
    <h1>Title: {article.title}</h1>
    <p>ID: {article.id}</p>
  </div>
)

export default ListDetail
