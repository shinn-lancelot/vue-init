<template>
	<div class="app">
		<avatar></avatar>
		<div class="name">{{ name }}</div>
		<div class="nav">
			<router-link to="/">home</router-link> |
			<router-link to="/hello">hello</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Avatar from 'components/avatar'

	export default {
		name: 'app',
		components: {
			Avatar
		},
		props: {},
		data () {
			return {
				name: 'shinn_lancelot'
			}
		},
		watch: {},
		computed: {},
		beforeCreate () {},
		created () {},
		beforeMount () {},
		mounted () {},
		beforeUpdate() {},
		updated () {},
		beforeDestroy () {},
		destroyed () {},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	@import "~common/scss/variables";

	.app {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		padding-top: $distance-medium * 5;
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
	}
</style>