export default {
    ssr: false,
    target: 'static',
    publicRuntimeConfig: {
        pixaKEY: process.env.PIXA_KEY
    },
    generate: {
        fallback: '404.html'
    },
    head: {
        title: 'randomize my references',
        meta: [
            { charset: 'UTF-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Handy tool for artists to generate a selection of random reference images.' },
            { name: 'msapplication-TileColor', content: '#00a769' },
            { name: 'theme-color', content: '#00a769' }
        ],
        link: [
            { rel: 'apple-touch-icon', sized: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pangolin&display=swap' }
        ]
    },
    css: ['@/assets/app.css'],
    modules: ['@nuxt/http'],
    buildModules: ['@nuxtjs/tailwindcss']
}