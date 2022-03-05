<template>
	<section>
		<h1>Planets</h1>
		<p>
			These are the planets listed in the first 7 Star Wars movies. You
			can filter them by name and see the residents of a given planet.
		</p>

		<o-input
			placeholder="Search Planet Name..."
			v-model.trim="nameFilter"
			icon="search-web"
			iconPack="mdi"
			size="medium"
			:icon-right="nameFilter?.length ? 'close' : undefined"
			icon-right-clickable
			@icon-right-click="nameFilter = ''"
		/>

		<o-table
			class="data-table"
			:data="planetsFiltered"
			:paginated="true"
			:per-page="perPage"
			:pagination-simple="true"
			:loading="loading"
			:striped="true"
			default-sort="name"
			aria-next-label="Next page"
			aria-previous-label="Previous page"
			aria-page-label="Page"
			aria-current-label="Current page"
		>
			<o-table-column
				field="name"
				label="Name"
				sortable
				v-slot="props"
				width="200"
			>
				{{ props.row.name }}
			</o-table-column>

			<o-table-column
				field="rotation_period"
				label="Rotation Period"
				sortable
				numeric
				v-slot="props"
			>
				{{
					props.row.rotation_period === Number.MIN_SAFE_INTEGER
						? 'unknown'
						: format(props.row.rotation_period)
				}}
			</o-table-column>

			<o-table-column
				field="orbital_period"
				label="Orbital Period"
				sortable
				numeric
				v-slot="props"
			>
				{{
					props.row.orbital_period === Number.MIN_SAFE_INTEGER
						? 'unknown'
						: format(props.row.orbital_period)
				}}
			</o-table-column>

			<o-table-column
				field="diameter"
				label="Diameter"
				sortable
				numeric
				v-slot="props"
			>
				{{
					props.row.diameter === Number.MIN_SAFE_INTEGER
						? 'unknown'
						: format(props.row.diameter)
				}}
			</o-table-column>

			<o-table-column
				field="climate"
				label="Climate"
				sortable
				v-slot="props"
			>
				{{ props.row.climate }}
			</o-table-column>

			<o-table-column
				field="population"
				label="Population"
				sortable
				numeric
				v-slot="props"
			>
				{{
					props.row.population === Number.MIN_SAFE_INTEGER
						? 'unknown'
						: format(props.row.population)
				}}
			</o-table-column>

			<o-table-column
				field="residents"
				label="Residents"
				sortable
				numeric
				v-slot="props"
			>
				<o-button
					variant="primary"
					outlined
					icon-left="account"
					@click="openModal(props.row)"
					>{{ props.row.residents?.length }}</o-button
				>
			</o-table-column>

			<o-table-column
				field="created"
				label="Created"
				sortable
				position="centered"
				v-slot="props"
			>
				{{ new Date(props.row.created).toLocaleDateString() }}
			</o-table-column>

			<o-table-column
				field="edited"
				label="Edited"
				sortable
				position="centered"
				v-slot="props"
			>
				{{ new Date(props.row.edited).toLocaleDateString() }}
			</o-table-column>

			<template v-slot:empty v-if="loading">
				<o-skeleton
					:animated="true"
					size="large"
					:count="4"
				></o-skeleton>
			</template>

			<template v-slot:bottom-left>
				<o-select v-model="perPage">
					<option value="5">5 per page</option>
					<option value="10">10 per page</option>
					<option value="15">15 per page</option>
					<option value="20">20 per page</option>
				</o-select>
			</template>
		</o-table>
	</section>
</template>

<style lang="scss">
section {
	.o-table__root {
		margin-top: 10px;
	}

	.o-table__pagination {
		padding: 10px 0;
	}

	.o-table__td {
		vertical-align: middle;
	}
}
</style>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import ResidentsModalVue from '@/components/ResidentsModal.vue';

const { format } = new Intl.NumberFormat();

const { oruga } = useProgrammatic();
const store = useStore();

const planets = computed(() => store.getters.planets);
const planetsFiltered = computed(() =>
	nameFilter.value.length
		? planets.value.filter(
				(planet) =>
					planet.name
						.toLocaleLowerCase()
						.includes(nameFilter.value.toLocaleLowerCase())
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  )
		: planets.value
);
const loading = computed(() => store.getters.loading);
const perPage = ref(15);
const nameFilter = ref('');

const openModal = (planet) => {
	oruga.modal.open({
		component: ResidentsModalVue,
		props: { planet },
		canCancel: true,
	});
};
</script>
