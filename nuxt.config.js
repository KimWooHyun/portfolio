module.exports = {  
  /*
  ** Headers of the page
  */
  router: {
    base: '/portfolio/'
  },
  head: {
    title: '김우현의 웹 포트폴리오',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '김우현의 웹 포트폴리오' },
      { property: "og:title", content: '김우현의 웹 포트폴리오' },
      { property: "og:description", content: '김우현의 웹 포트폴리오' },
      { property: "og:url", content: 'https://kimwoohyun.github.io/portfolio' },
      { property: "og:image", content: 'https://raw.githubusercontent.com/KimWooHyun/portfolio/master/assets/image/meta/meta.png' },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "400" },
      { property: "og:image:height", content: "300" }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.4/css/all.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#C7D4FF' },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  css: [
    { src: '~assets/css/common.less', lang: 'less' }
  ]
}
