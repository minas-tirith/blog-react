import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../actions'
import { Article } from '../interfaces'

type ArticleDetailProps = {
  item: Article
}

const ListDetail = ({ item: article }: ArticleDetailProps) => {
  console.log(useDispatch)
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  return (
    <div>
      <h1>Title: {article.title}</h1>
      <p>ID: {article.id}</p>
      <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
      <code>{JSON.stringify(state, null, 4)}</code>
    </div>
  )
}

export default ListDetail
