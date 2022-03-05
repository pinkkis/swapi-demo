<template>
	<div class="container">
		<header>
			<h2>Residents of {{ planet.name }}</h2>
		</header>
		<ul v-if="planet.residents.length > 0">
			<li v-for="resident in planet.residents" :key="resident.url">
				{{ resident.name }}
			</li>
		</ul>
		<div v-else>
			<p><em>No residents</em></p>
		</div>
		<footer>
			<o-button type="button" @click="$emit('close')">Close</o-button>
		</footer>
	</div>
</template>

<style lang="scss" scoped>
.container {
	min-width: 300px;
	max-width: 80vw;

	font-size: 1.3rem;

	header {
		h2 {
			margin: 0;
		}
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
}
</style>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
	planet: Object,
});
</script>
