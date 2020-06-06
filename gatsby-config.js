module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        apiKey: process.env.GATSBY_FIREBASE_APIKEY,
        apiKey: process.env.GATSBY_FIREBASE_APIKEY,
        authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
        projectId: process.env.GATSBY_FIREBASE_PROJECTID,
        storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.GATSBY_FIREBASE_APP_ID,
        measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID
      },
    },
    'gatsby-plugin-react-leaflet',
  ],
};
