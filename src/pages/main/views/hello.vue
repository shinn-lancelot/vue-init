<template>
	<div class="wrapper">
		<div class="nav">
			<router-link :to="{name: 'home', params: { go: false }}">home</router-link> |
			<router-link :to="{name: 'hello', params: { go: true }}">hello</router-link>
		</div>
		<p class="message">{{ message }}</p>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		components: {},
		props: {},
		data () {
			return {
				message: 'Hello vue-init!'
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

	.wrapper {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		box-sizing: border-box;
		.nav {
			color: $color-default;
			box-sizing: border-box;
			margin: $distance-xxx-large auto;
			font-size: $font-size-medium;
			a {
				font-weight: $font-weight-ten;
				color: $color-theme-dark;
				&.router-link-exact-active {
					color: $color-theme;
				}
			}
		}
		.message {
			color: $color-theme-dark;
			font-size: $font-size-medium;
			margin: $distance-xxx-large auto;
			padding: 0 $distance-medium;
			box-sizing: border-box;
			font-weight: $font-weight-ten;
		}
	}
</style>