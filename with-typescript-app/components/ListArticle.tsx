import * as React from 'react'
import ListArticleItem from './ListArticleItem'
import { Article } from '../interfaces'

type Props = {
  items: Article[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListArticleItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
