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
:root {
	--color-yellow: #dceb16;
	--header-bg: #000;
	--header-color: #ccc;
	--page-bg: #fefefe;
}

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

	color: var(--header-color);

	height: 75px;
	background-color: var(--header-bg);

	h3 {
		display: inline-block;
		margin-right: 30px;
	}

	a {
		font-weight: bold;
		color: #ccc;
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

onMounted(() => {
	store.dispatch('getPeople');
	store.dispatch('getPlanets');
});
</script>
