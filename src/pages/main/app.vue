<template>
	<div class="app">
		<transition :name="transitionName">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {},
		props: {},
		data () {
			return {
				transitionName: ''
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
		box-sizing: border-box;
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