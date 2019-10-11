const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `hyperlog.Club`,
    description: `Learn to code with the community of newcomer and experienced programmers for completely free.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-antd`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#3366FF`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `htmlcss_resources`,
        path: `${__dirname}/resources/htmlcss`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `htmlcss_resources`,
        path: `${__dirname}/resources/python`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `elixir_resources`,
        path: `${__dirname}/resources/elixir`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `javascript_resources`,
        path: `${__dirname}/resources/javascript`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-copy-linked-files`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Learn to code with the community | hyperlog.Club`,
        short_name: `hyperlog.Club`,
        start_url: `/`,
        background_color: `#3366ff`,
        theme_color: `#3366ff`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
  ],
}
