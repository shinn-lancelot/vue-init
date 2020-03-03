<template>
	<p class="message">{{ message }}</p>
</template>

<script>
	export default {
		name: 'Home',
		components: {},
		props: {},
		data () {
			return {
				message: 'This is home'
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