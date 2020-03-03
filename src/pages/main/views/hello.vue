<template>
	<p class="message">{{ message }}</p>
</template>

<script>
	export default {
		name: 'Hello',
		components: {},
		props: {},
		data () {
			return {
				message: 'Hello vue-init'
			}
		},
		watch: {},
		computed: {},
		beforeCreate () {},
		created () {},
		beforeMount () {},
		mounted () {},
		beforeUpdate () {},
		updated () {},
		beforeDestroy () {},
		destroyed () {},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	@import "~common/scss/variables";

	.message {
		color: $color-default;
		font-size: $font-size-medium;
	}
</style>