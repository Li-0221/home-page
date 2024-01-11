// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Li",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Li，李立，个人网站，简历，个人信息，前端，全栈，vue"
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },

  modules: [
    "@element-plus/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode"
  ],

  i18n: {
    vueI18n: "./i18n.config.ts"
  },

  colorMode: {
    classSuffix: ""
  },

  typescript: {
    strict: true,
    shim: false
  },

  css: ["~/styles/index.scss", "~/styles/gsap.css"],

  vueuse: {
    ssrHandlers: true
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: `@use "@/assets/scss/element/index.scss" as element;`
  //       }
  //     }
  //   }
  // },

  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"]
  }
});
