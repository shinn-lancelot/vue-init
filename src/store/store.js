import { defineStore } from 'pinia'
import { ref } from 'vue'

export const mainStore = defineStore('main', () => {
  const name = ref('vue-init')
  const introduction = ref('一个vue样板项目')
  return { name, introduction }
})
