// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass"],
  modules: ["@pinia/nuxt", "@unocss/nuxt", "@nuxtjs/i18n"],
  build: {
    transpile: ["vuetify"],
  },
  devtools: { enabled: true },
  i18n: {
    lazy: true,
    strategy: "no_prefix",
    langDir: "locales",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        file: "en-US.json",
        dir: "ltr",
      },
      {
        code: "ar-EG",
        iso: "ar-EG",
        file: "ar-EG.json",
        dir: "rtl",
      },
    ],
    defaultDirection  : 'ltr',
    defaultLocale : 'en-US',
  },
});
