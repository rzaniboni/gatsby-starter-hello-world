import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'

export default () => {
  const posts = usePosts()

  return (
    <Layout>
      Hello world!
      <Header headerText="Titolo 1" />
      <br />
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <br />
      <Link to="/usingtailwind">Ciao</Link>
      <Link to="/contact">Contatti</Link>
      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
