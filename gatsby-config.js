module.exports = {
  siteMetadata: {
    title: `Supporting Settle`,
    description: `Local Producers near Settle, North Yorkshire.`,
    author: `@gatsbyjs`,
    keywords: [
      "produce",
      "local producers",
      "Settle",
      "online shopping",
      "deliveries",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `producers`,
        path: `${__dirname}/src/producers/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-layout",
      options: {
        layout: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`],
          },
          {
            family: `Work Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `supporting settle`,
        short_name: `supporting settle`,
        start_url: `/`,
        background_color: `#44a1a0`,
        theme_color: `#44a1a0`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-192x192.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
