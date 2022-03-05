<template>
	<div class="container">
		<header>
			<h2>
				{{ planet.name }}
			</h2>
		</header>
		<dl>
			<dt>Diameter</dt>
			<dd>{{ planet.diameter }}km</dd>

			<dt>Climate</dt>
			<dd>{{ planet.climate }}</dd>

			<dt>Population</dt>
			<dd>{{ format(planet.population) }}</dd>
		</dl>
		<footer>
			<o-button type="button" @click="$emit('close')">Close</o-button>
		</footer>
	</div>
</template>

<style lang="scss" scoped>
.container {
	min-width: 300px;
	max-width: 80vw;
	padding: 0 10px;
	font-size: 1.3rem;

	dt {
		font-weight: bold;
	}

	dd {
		margin-bottom: 1em;
	}

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

const { format } = new Intl.NumberFormat();
</script>
