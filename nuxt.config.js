export default {
  head: {
    titleTemplate: '黑客新闻 | %s',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://api.hackerwebapp.com' },
      { rel: 'preconnect', href: 'https://api.hackerwebapp.com' }
    ]
  },

  loading: {
    color: '#00C48D'
  },

  router: {
    middleware: 'i18n'
  },

  manifest: {
    name: '全球黑客新闻',
    short_name: '黑客新闻',
    lang: 'zh-CN',
    description: '全球最新、最火的黑客新闻尽在此处！',
    theme_color: '#2F495E',
    start_url: '/'
  },

  devModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://api.hackerwebapp.com'
  },

  plugins: [
    '~/plugins/filters',
    '~/plugins/i18n.js'
  ],

  build: {
    extend(config, { isDev, isClient }) {
      if (isDev) {
        config.devtool = 'eval-source-map'  // Something you like
      }
    }
  },

  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      }
    }
  }
}
