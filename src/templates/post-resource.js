import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/resources/layout'

const PostResource = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Layout link={`/resources/${post.frontmatter.slug}/`} resource={post.frontmatter.resource} title={post.frontmatter.title}>
        {post.html}
      </Layout>
    </>
  )
}

export default PostResource

export const query = graphql`
query($slug:String!){
  markdownRemark(frontmatter: {slug: {eq: $slug}}){
    frontmatter{
      title
      author
      slug
      resource
    }
    html
  }
}
`