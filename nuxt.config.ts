// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-icon"
  ],
 
  i18n: {
    langDir: './messages',
    locales: [{ code: 'en', file: 'en.json', iso: 'en' }, { code: 'fr', file: 'fr.json', iso: 'fr' }],
    defaultLocale: 'en',
    lazy: true,
  },
  tailwindcss: {
    cssPath: ['~/assets/styles/tailwind.css', { injectPosition: "last" }],
    configPath: 'tailwind.config.ts',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'h1',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }
},


)