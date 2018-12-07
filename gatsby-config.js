module.exports = {
  siteMetadata: {
    title: "It's a Date", // eslint-disable-line
    description: 'The dating app that actually involves dates.',
    siteUrl: 'https://www.itsadate.app'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "It's a Date", // eslint-disable-line
        short_name: "It's a Date", // eslint-disable-line
        start_url: '/',
        background_color: '#58cdb7',
        theme_color: '#58cdb7',
        display: 'minimal-ui',
        icon: 'src/images/itsADateLogo.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.itsadate.app',
        sitemap: 'https://www.itsadate.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TLQF33C',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false

        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME'
      }
    }
  ]
};
