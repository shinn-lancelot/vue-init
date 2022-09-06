<script setup>
import favicon from 'assets/images/favicon.ico'

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
  <div>
    This is a boilerplate project for vue.
  </div>
</template>
