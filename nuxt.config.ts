import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@vueuse/nuxt"],
    app:{
        baseURL:process.env.NODE_ENV === 'production'?'/web/':'/'
    }
})
