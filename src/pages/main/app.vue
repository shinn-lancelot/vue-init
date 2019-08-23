<template>
  <div>
    <div class="message">{{ msg }}</div>
    <avatar></avatar>
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
      msg: "我爱前端"
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
$color: #f00;

.message {
  color: $color;
}
</style>