<template>
  <div class="app">
    <avatar></avatar>
    <div class="name">{{ name }}</div>
  </div>
</template>

<script>
import Avatar from "../../components/Avatar";

export default {
  name: "App",
  components: {
    Avatar
  },
  props: {},
  data() {
    return {
      name: "shinn_lancelot"
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
.app {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  box-sizing: border-box;
  .name {
    color: #000;
    box-sizing: border-box;
    margin-top: 10px;
  }
}
</style>