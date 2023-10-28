/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/*.vue",
        "./pages/**/*.vue",
        `@/layouts/*.vue`,
        `@/layouts/**/*.vue`,
        '@/node_modules/flowbite/**/*.{js,ts}',
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

