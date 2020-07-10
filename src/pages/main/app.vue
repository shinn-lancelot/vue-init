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
					this.transitionStyleName = this.transitionNameObj.hasOwnProperty('go') ? this.transitionNameObj.go : ''
				} else {
					this.transitionStyleName = this.transitionNameObj.hasOwnProperty('back') ? this.transitionNameObj.back : ''
				}
			}
		},
		computed: {},
		beforeCreate () {},
		created () {
			this.transitionNameObj = transition.hasOwnProperty(this.transitionName) ? transition[this.transitionName] : { go: '', back: '' }
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
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		box-sizing: border-box;
	}
</style>