<template>
	<nav>
		<div class="container">
			<img src="./assets/star_wars_logo.svg" alt="Star Wars Logo" />
			<router-link to="/">Home</router-link>
			<router-link to="/people">People</router-link>
			<router-link to="/planets">Planets</router-link>
		</div>
	</nav>
	<div class="app-container">
		<router-view />
	</div>
</template>

<style lang="scss">
// color palette for whole app
:root {
	--color-yellow: #ffc500;
	--header-bg: #000;
	--header-color: #ccc;
	--page-bg: #fefefe;
	--text-color: #2c3e50;
	--dark-link-color: #ccc;
}

#app {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--text-color);
}

html,
body {
	padding: 0;
	margin: 0;

	background-color: var(--page-bg);
}
</style>

<style lang="scss" scoped>
nav {
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;

		height: 100%;
		max-width: 1024px;
		margin: 0 auto;

		& > * {
			margin-right: 15px;
		}

		img {
			height: 45px;
		}
	}

	height: 75px;
	color: var(--header-color);
	background-color: var(--header-bg);

	h3 {
		display: inline-block;
		margin-right: 30px;
	}

	a {
		font-weight: bold;
		color: var(--dark-link-color);
		text-decoration: none;

		&.router-link-exact-active {
			color: var(--color-yellow);
			text-decoration: underline;
		}
	}
}

.app-container {
	padding: 15px 0;
	max-width: 1024px;
	margin: 0 auto;
}
</style>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// load data on the home page, so it's ready when swapping to tables
onMounted(() => {
	store.dispatch('getPeople');
	store.dispatch('getPlanets');
});
</script>
