<template>
  <p class="message">{{ message }}</p>
</template>

<script>
export default {
  name: 'Hello',
  components: {},
  props: {},
  data() {
    return {
      message: 'Hello vue-init'
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