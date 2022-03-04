<template>
	<div class="home">
		<div class="image">
			<img src="../assets/porg.png" alt="Porg" />
		</div>
		<div class="content">
			<h2>Star Wars Api</h2>
			<p>
				This is a quick project to test the Vue 3 framework. The demo
				allows you to query the
				<a href="https://swapi.dev" target="_blank"
					>https://swapi.dev</a
				>
				public api, stores the values in a Vuex-store and allows
				combining of multiple entity types in one display.
			</p>
			<p>
				To get started, navigate to the
				<router-link to="/people">People</router-link> page.
			</p>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.home {
	max-width: 900px;
	margin: 0 auto;
	display: flex;
	flex-direction: row;

	.content {
		flex: auto;
	}
}
</style>
