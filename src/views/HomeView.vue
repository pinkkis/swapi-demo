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

			<p>The data is courtesy of Swapi:</p>
			<blockquote>
				The Star Wars API, or "swapi" (Swah-pee) is the world's first
				quantified and programmatically-accessible data source for all
				the data from the Star Wars canon universe!
				<br />
				<small> &copy; Paul Hallett &amp; Juriyu Bura</small>
			</blockquote>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: row;

	.content {
		flex: auto;
	}

	blockquote {
		border-left: 5px solid var(--color-yellow);
		border-radius: 5px;
		padding-left: 10px;
	}
}
</style>
