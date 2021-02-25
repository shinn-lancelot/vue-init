<template>
	<div class="app">
		<transition :name="transitionStyleName">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import { transition } from 'common/js/transition'

	export default {
		name: 'app',
		components: {},
		props: {},
		data () {
			return {
				transitionName: 'slide',
				transitionNameObj: {},
				transitionStyleName: ''
			}
		},
		watch: {
			$route (to, from) {
				if (this.$route.params.go) {
					this.transitionStyleName = ('go' in this.transitionNameObj) ? this.transitionNameObj.go : ''
				} else {
					this.transitionStyleName = ('back' in this.transitionNameObj) ? this.transitionNameObj.back : ''
				}
			}
		},
		computed: {},
		beforeCreate () {},
		created () {
			this.transitionNameObj = (this.transitionName in transition) ? transition[this.transitionName] : { go: '', back: '' }
		},
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
		width: calc(#{$width-window} - (#{$width-window} - #{$width-default}));
		height: calc(#{$height-window} - (#{$height-window} - #{$height-default}));
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		box-sizing: border-box;
	}
</style>