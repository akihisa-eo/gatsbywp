module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'wpdemo.gatsbycentral.com',
        ///baseUrl: 'haniwaman.com/',
        ///baseUrl: 'info.cookpad.com/',    
        ///baseUrl: 'demo.com',    
        baseUrl: 'demo.local',    
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        ///protocol: 'https',
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
///        includedRoutes: [
///          "**/categories",
///          "**/posts",
///          "**/pages",
///          "**/media",
///          "**/taxonomies",
///          "**/tags",
///        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
