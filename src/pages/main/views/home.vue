<template>
	<p class="message">{{ message }}</p>
</template>

<script>
	export default {
		name: 'home',
		components: {},
		props: {},
		data () {
			return {
				message: 'This is a boilerplate project for vue.'
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
		padding: 0 10px;
		box-sizing: border-box;
	}
</style>