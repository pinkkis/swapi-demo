<template>
	<section>
		<o-table
			:data="people"
			:paginated="true"
			:per-page="perPage"
			:current-page="currentPage"
			:pagination-simple="true"
			:loading="loading"
			:detail-key="url"
			:debounce-search="debounceTime"
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
				searchable
				v-slot="props"
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
				{{ props.row.height }}
			</o-table-column>

			<o-table-column
				field="mass"
				label="Mass (kg)"
				sortable
				numeric
				v-slot="props"
			>
				{{ props.row.mass }}
			</o-table-column>

			<o-table-column
				field="homeworld.name"
				label="Planet Name"
				sortable
				searchable
				v-slot="props"
			>
				<o-button
					variant="primary"
					inverted
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
				{{ new Date(props.row.created).toUTCString() }}
			</o-table-column>

			<o-table-column
				field="edited"
				label="Edited"
				sortable
				position="centered"
				v-slot="props"
			>
				{{ new Date(props.row.edited).toUTCString() }}
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

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import PlanetModalVue from '@/components/PlanetModal.vue';

const store = useStore();
const { oruga } = useProgrammatic();

const people = computed(() => store.getters.people);
const loading = computed(() => store.getters.loading);

const currentPage = ref(1);
const perPage = ref(15);

const debounceTime = 500;

const openModal = (planet) => {
	oruga.modal.open({
		component: PlanetModalVue,
		props: { planet },
		canCancel: true,
	});
};
</script>
