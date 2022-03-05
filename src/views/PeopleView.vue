<template>
	<section>
		<h1>People</h1>
		<p>
			These are the characters listed in the first 7 Star Wars movies. You
			can filter them by name, and see details on them and their home
			planet.
		</p>

		<o-input
			placeholder="Search Person Name..."
			v-model.trim="nameFilter"
			icon="account-search"
			iconPack="mdi"
			size="medium"
		/>

		<o-table
			class="data-table"
			:data="peopleFiltered"
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
				width="250"
			>
				{{ props.row.name }}
			</o-table-column>

			<o-table-column
				field="height"
				label="Height (cm)"
				sortable
				numeric
				v-slot="props"
			>
				{{
					props.row.height === Number.MIN_SAFE_INTEGER
						? 'unknown'
						: format(props.row.height)
				}}
			</o-table-column>

			<o-table-column
				field="mass"
				label="Mass (kg)"
				sortable
				numeric
				v-slot="props"
			>
				{{
					props.row.mass === Number.MIN_SAFE_INTEGER
						? 'unknown'
						: format(props.row.mass)
				}}
			</o-table-column>

			<o-table-column
				field="homeworld.name"
				label="Planet Name"
				sortable
				v-slot="props"
			>
				<o-button
					variant="primary"
					outlined
					@click="openModal(props.row.homeworld)"
					>{{ props.row.homeworld?.name ?? 'unknown' }}</o-button
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
import PlanetModalVue from '@/components/PlanetModal.vue';

const { format } = new Intl.NumberFormat();

const store = useStore();
const { oruga } = useProgrammatic();

const people = computed(() => store.getters.people);
const loading = computed(() => store.getters.loading);
const peopleFiltered = computed(() =>
	nameFilter.value.length
		? people.value.filter(
				(person) =>
					person.name
						.toLocaleLowerCase()
						.includes(nameFilter.value.toLocaleLowerCase())
				// can't get eslint, prettier and volar to agree on formatting here :(
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  )
		: people.value
);

const perPage = ref(15);
const nameFilter = ref('');

// open a modal with the whole entity as a prop
const openModal = (planet) => {
	oruga.modal.open({
		component: PlanetModalVue,
		props: { planet },
		canCancel: true,
	});
};
</script>
