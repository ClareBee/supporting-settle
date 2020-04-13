module.exports = {
  siteMetadata: {
    title: `Supporting Settle`,
    description: `Local Producers near Settle, North Yorkshire.`,
    author: `@clarie_bee`,
    url: "https://supporting-settle.netlify.com",
    siteUrl: "https://supporting-settle.netlify.com",
    siteLanguage: `en`,
    image:
      "https://res.cloudinary.com/dzrzdjaoe/image/upload/v1586795398/fullsizeoutput_449_bko6p2.jpg",
    keywords: [
      "produce",
      "local producers",
      "Settle",
      "online shopping",
      "deliveries",
      "covid-19",
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `supporting settle`,
        short_name: `supporting settle`,
        start_url: "/",
        description: `Local producers keeping Settle running during corona virus`,
        background_color: `#44A1A0`,
        theme_color: `#44A1A0`,
        display: `standalone`,
        icon: `src/static/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
