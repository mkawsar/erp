import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: [
        `@/components/**/*.{vue,js,ts}`,
        `@/layouts/*.vue`,
        `@/pages/*.vue`,
        `@/pages/**/*.vue`,
        // `${srcDir}/composables/**/*.{js,ts}`,
        // `${srcDir}/plugins/**/*.{js,ts}`,
        // `${srcDir}/utils/**/*.{js,ts}`,
        // `${srcDir}/App.{js,ts,vue}`,
        // `${srcDir}/app.{js,ts,vue}`,
        // `${srcDir}/Error.{js,ts,vue}`,
        // `${srcDir}/error.{js,ts,vue}`,
        // `${srcDir}/app.config.{js,ts}`,
        "./app.vue"
    ],
    theme: {
        extend: {
            colors: {
                primary: defaultTheme.colors.green
            }
        },
    },
    plugins: [],
}

