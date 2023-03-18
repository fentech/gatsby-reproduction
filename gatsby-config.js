// @ts-check

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'title',
    titleTemplate: '%s · blog',
    description: `Description.`,
    url: `https://my.blog`,
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-transformer-inline-svg',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //     host: process.env.CONTENTFUL_HOST,
    //     environment:
    //       process.env.NODE_ENV === 'development' ? 'development' : 'master',
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    'gatsby-plugin-postcss',
    'gatsby-plugin-apollo',
  ],
}
