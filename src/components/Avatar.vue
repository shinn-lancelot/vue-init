<template>
  <div class="avatar"></div>
</template>

<script>
export default {
  name: "Avatar",
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
  width: 50px;
  height: 50px;
  background: transparent url("~common/images/avatar.jpg") no-repeat center /
    cover;
  border-radius: 50%;
}
</style>