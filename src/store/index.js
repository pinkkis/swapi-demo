import { api } from '@/services/api';
import { createStore, createLogger } from 'vuex';

const ADD_PEOPLE = 'add_people';
const ADD_PLANETS = 'add_planets';
const SET_LOADING_PEOPLE = 'set_loading_people';
const SET_LOADING_PLANETS = 'set_loading_planets';

export default createStore({
	state: {
		loadingPeople: false,
		loadingPlanets: false,
		people: [],
		planets: [],
	},
	getters: {
		people: (state) => {
			return (
				state.people?.map((person) => ({
					...person,
					homeworld: state.planets.find(
						(planet) => planet.url === person.homeworld
					),
				})) ?? []
			);
		},
		planets: (state) => {
			return (
				state.planets?.map((planet) => ({
					...planet,
					residents:
						planet.residents.map((resident) =>
							state.people.find(
								(person) => person.url === resident
							)
						) ?? [],
				})) ?? []
			);
		},
		person: (state) => (url) => state.person.find((p) => p.url === url),
		planet: (state) => (url) => state.planets.find((p) => p.url === url),
		loading: (state) => {
			return state.loadingPeople || state.loadingPlanets;
		},
	},
	mutations: {
		[ADD_PEOPLE](state, people) {
			state.people = [
				...people.map((person) => ({
					...person,
					id: person.url.split('/').filter(Boolean).pop(),
					mass: Number(person.mass) || person.mass,
					height: Number(person.height) || person.height,
				})),
			].sort((a, b) => a.name.localeCompare(b.name));
			state.loadingPeople = false;
		},
		[ADD_PLANETS](state, planets) {
			const { format } = new Intl.NumberFormat();

			state.planets = [
				...planets.map((planet) => ({
					...planet,
					id: planet.url.split('/').filter(Boolean).pop(),
					rotation_period:
						Number(planet.rotation_period) ||
						planet.rotation_period,
					orbital_period:
						Number(planet.orbital_period) || planet.orbital_period,
					diameter: Number(planet.diameter) || planet.diameter,
					surface_water:
						Number(planet.surface_water) || planet.surface_water,
					population: Number(planet.population)
						? format(
								Number(planet.population)
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  )
						: planet.population,
				})),
			].sort((a, b) => a.name.localeCompare(b.name));
			state.loadingPlanets = false;
		},
		[SET_LOADING_PEOPLE](state, loading) {
			state.loading = loading;
		},
		[SET_LOADING_PLANETS](state, loading) {
			state.loading = loading;
		},
	},
	actions: {
		async getPeople({ commit }) {
			commit(SET_LOADING_PEOPLE, true);
			commit(ADD_PEOPLE, (await api.people.getAll()) ?? []);
		},
		async getPlanets({ commit }) {
			commit(SET_LOADING_PLANETS, true);
			commit(ADD_PLANETS, (await api.planets.getAll()) ?? []);
		},
	},
	plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
