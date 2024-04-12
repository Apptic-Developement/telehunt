// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    langDir: './messages',
    locales: [{ code: 'en', file: 'en.json', iso: 'en' }, { code: 'fr', file: 'fr.json', iso: 'fr' }],
    defaultLocale: 'en',
  }
}

)