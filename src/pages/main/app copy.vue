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
	import Avatar from 'components/Avatar'

	export default {
		name: 'App',
		components: {
			Avatar
		},
		props: {},
		data() {
			return {
				name: 'shinn_lancelot'
			}
		},
		watch: {},
		computed: {},
		beforeCreate() {},
		created() {},
		beforeMount() {},
		mounted() {},
		beforeUpdate() {},
		updated() {},
		beforeDestroy() {},
		destroyed() {},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.app {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		padding-top: 50px;
		box-sizing: border-box;
		.name {
			color: #000;
			box-sizing: border-box;
			margin-top: 10px;
			color: #2c3e50;
		}
		.nav {
			color: #000;
			box-sizing: border-box;
			margin: 20px auto;
			a {
				font-weight: bold;
				color: #2c3e50;
				&.router-link-exact-active {
					color: #42b983;
				}
			}
		}
	}
</style>