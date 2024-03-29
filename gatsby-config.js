/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Senior Saude Movel`,
        short_name: `Senior Saude Movel`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#20b3af`,
        display: `standalone`,
        icon: `src/assets/icon.png` // 512x512
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#20b3af`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-98273729",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },

    {

    resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Work Sans`,
            variants: [`400`, `700`]
          },
          {
            family: `Sans-serif`,
            subsets: [`latin`]
          },
        ],
      }

    }
      
      
      ,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-offline`,
  ]
}
