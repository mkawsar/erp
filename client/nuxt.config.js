export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
    head: {
        title: 'client',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/axios',
        '~/plugins/token',
        '~/plugins/notification'
    ],
    components: true,
    buildModules: ['@nuxtjs/tailwindcss'],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        'nuxt-material-design-icons'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
    },
    router: {
        middleware: ['auth', 'authentication'],
    },
    axios: {
        baseURL: 'http://127.0.0.1:4000',
    },
    proxy: {
        '/api': 'http://127.0.0.1:4000'
    }
}
