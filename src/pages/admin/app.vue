<template>
  <div>
      <div class="message">{{ msg }}</div>
  </div>
</template>

<script>
  import Demo from '../../components/Demo.vue'

  export default {
    name: 'App',
    components: {
      Demo
    },
    props: {},
    data () {
      return {
        msg: '666'
      }
    },
    watch: {},
    computed: {},
    methods: {},
    created () {},
    mounted () {}
  }
</script>

<style lang="scss" scoped>
    $color: #f00;

    .message {
        color: $color;
    }
</style>