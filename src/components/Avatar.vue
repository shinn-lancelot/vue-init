<template>
  <div class="avatar"></div>
</template>

<script>
export default {
  name: 'Avatar',
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 60px;
  height: 60px;
  border: 3px solid #ddd;
  box-sizing: content-box;
  background: transparent url("~assets/images/avatar.jpg") no-repeat center /
    cover;
  border-radius: 50%;
}
</style>