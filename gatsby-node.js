exports.createPages = async function({actions, graphql}) {
  const { data } = await graphql(`
  query {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            slug
          }
        }
      }
    }
  }
  `)

  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug

    actions.createPage({
      path: `/resources/${slug}/`,
      component: require.resolve(`./src/templates/post-resource.js`),
      context: {slug: slug}
    })
  })
}
