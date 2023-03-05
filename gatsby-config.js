/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portfolio 2.0`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "9OGmaY7CkeEUVV9O_ZTW2nRbyhQUXlcQ5I2EGTzEwZQ",
      "spaceId": "byvz0lerhhcx"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-fontawesome-css",]
};