module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [],
        precision: 8 // SASS default: 5
      }
    },
    `gatsby-plugin-preact`
  ]
};
