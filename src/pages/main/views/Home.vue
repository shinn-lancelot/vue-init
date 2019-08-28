<template>
  <p class="message">{{ message }}</p>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  props: {},
  data() {
    return {
      message: 'This is home'
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.message {
  color: #000;
}
</style>