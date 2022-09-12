<script setup>
const store = mainStore()
</script>

<template>
  <div class="ma-10 text-center">
    <img :src="Vue" class="ma-auto w40" alt="vut_logo">
    <div class="mt-2">
      {{ `${store.name} —— ${store.introduction}` }}
    </div>
    <div class="mt-3">
      <a href="https://github.com/shinn-lancelot/vue-init"><i class="display-inline-block i-carbon-logo-github" /></a>
    </div>
  </div>
</template>
