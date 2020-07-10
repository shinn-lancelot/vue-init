<template>
	<div class="wrapper">
		<div class="nav">
			<router-link :to="{name: 'home', params: { go: true }}">home</router-link> |
			<router-link :to="{name: 'hello', params: { go: true }}">hello</router-link>
		</div>
		<avatar></avatar>
		<div class="name">{{ name }}</div>
		<p class="message">{{ message }}</p>
	</div>
</template>

<script>
	import Avatar from 'components/avatar'

	export default {
		name: 'home',
		components: {
			Avatar
		},
		props: {},
		data () {
			return {
				name: 'shinn_lancelot',
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

	.wrapper {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		box-sizing: border-box;
		.name {
			color: $color-default;
			box-sizing: border-box;
			margin-top: $distance-medium;
			color: $color-theme-dark;
			font-size: $font-size-x-large;
		}
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