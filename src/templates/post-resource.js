import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/resources/layout'
import PropTypes from 'prop-types'
import "./post-style.css"

const PostResource = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Layout className="content" link={`/resources/${post.frontmatter.slug}/`} resource={post.frontmatter.resource} title={post.frontmatter.title} slug={post.frontmatter.slug}>
        {post.html}
      </Layout>
    </>
  )
}

PostResource.propTypes = {
  data: PropTypes.object.isRequired
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
