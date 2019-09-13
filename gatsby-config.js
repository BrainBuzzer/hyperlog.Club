module.exports = {
  siteMetadata: {
    title: `hyperlog.Club`,
    description: `Learn to code with the community of newcomer and experienced programmers for completely free.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-antd`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `beginners_resources`,
        path: `${__dirname}/resources/beginners`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      // TODO: Fix the colors
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Learn to code with the community | hyperlog.Club`,
        short_name: `hyperlog.Club`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#3366ff`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
