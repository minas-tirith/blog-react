import Link from 'next/link'
import * as React from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/articles">
          <a>Articles</a>
        </Link>
      </p>
    <>
  )
}

export default IndexPage;
