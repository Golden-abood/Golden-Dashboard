// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass", "@/assets/css/main.scss"],
  modules: [
    "@pinia/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      title: "Admin Dashboard",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
        },
      ],
    },
  },
  devtools: { enabled: false },
});
