<template>
	<div class="app">
		<avatar></avatar>
		<div class="name">{{ name }}</div>
		<div class="nav">
			<router-link :to="{name: 'home', params: { go: true }}">home</router-link> |
			<router-link :to="{name: 'hello', params: { go: true }}">hello</router-link>
		</div>
		<transition :name="transitionName">
			<router-view></router-view>
		</transition>
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
				transitionName: '',
				name: 'shinn_lancelot'
			}
		},
		watch: {
			$route (to, from) {
				if (this.$route.params.go) {
					this.transitionName = 'slide-left'
				} else {
					this.transitionName = 'slide-right'
				}
			}
		},
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

	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		will-change: transform;
		transition: all 300ms;
		position: absolute;
	}
	.slide-right-enter {
		transform: translate(-100%, 0);
		transition-timing-function: ease-in;
	}
	.slide-right-leave-active {
		transform: translate(100%, 0);
		transition-timing-function: ease-in;
	}
	.slide-left-enter {
		transform: translate(100%, 0);
		transition-timing-function: ease-in;
	}
	.slide-left-leave-active {
		transform: translate(-100%, 0);
		transition-timing-function: ease-in;
	}
</style>