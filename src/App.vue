<template>
	<nav>
		<h3>Star Wars Api Demo</h3>
		<router-link to="/">Home</router-link>
		<router-link to="/people">People</router-link>
	</nav>
	<div class="app-container">
		<router-view />
	</div>
</template>

<style lang="scss">
#app {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

html,
body {
	padding: 0;
	margin: 0;
}
</style>

<style lang="scss" scoped>
nav {
	color: #ccc;

	padding: 30px;
	background-color: #000;

	& > * {
		margin-right: 15px;
	}

	h3 {
		display: inline-block;
		margin-right: 30px;
	}

	a {
		font-weight: bold;
		color: #ccc;
		text-decoration: none;

		&.router-link-exact-active {
			color: #dceb16;
			text-decoration: underline;
		}
	}
}

.app-container {
	padding: 10px;
}
</style>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
	store.dispatch('getPeople');
	store.dispatch('getPlanets');
});
</script>
