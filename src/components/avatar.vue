<template>
	<div class="avatar"></div>
</template>

<script>
	export default {
		name: 'avatar',
		components: {},
		props: {},
		data () {
			return {}
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
	.avatar {
		width: 60px;
		height: 60px;
		border: 3px solid #ddd;
		box-sizing: content-box;
		background: transparent url('~assets/images/avatar.jpg') no-repeat center /
			cover;
		border-radius: 50%;
		transform: rotate(0deg);
		transition-property: transform;
		transition-duration: 0.4s;
		transition-timing-function: linear;
	}
	.avatar:hover {
		transform: rotate(360deg);
		transition-property: transform;
		transition-duration: 0.4s;
		transition-timing-function: linear;
	}

	@keyframes rotate-animation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>