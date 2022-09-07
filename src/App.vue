<script setup>
import favicon from 'assets/images/favicon.ico'

// https://github.com/vueuse/head
useHead({
  title: import.meta.env.VITE_APP_TITLE,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
    { name: 'description', content: 'a vue app' },
  ],
  link: [
    { rel: 'shortcut icon', href: favicon },
  ],
})
</script>

<template>
  <router-view />
</template>
