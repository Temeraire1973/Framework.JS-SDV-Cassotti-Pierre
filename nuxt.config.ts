// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/icon/module', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/seo', '@pinia/nuxt', '@vee-validate/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  components: [
    {path:'~/components',pathPrefix: false}
  ],
  
  experimental: {
    defaults: {
      nuxtLink: {
        // default values
        componentName: 'NuxtLink',
        externalRelAttribute: 'noopener noreferrer',
        activeClass: 'router-link-active',
        exactActiveClass: 'router-link-exact-active',
        prefetchedClass: undefined, // can be any valid string class name
        trailingSlash: undefined, // can be 'append' or 'remove'
        prefetch: false,
        prefetchOn: { visibility: false },
      },
    },
  },

  css: ['~/assets/index.css']

  
})


  

