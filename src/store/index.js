import { api } from '@/services/api';
import { createStore, createLogger } from 'vuex';

const ADD_PEOPLE = 'add_people';
const ADD_PLANETS = 'add_planets';
const SET_LOADING_PEOPLE = 'set_loading_people';
const SET_LOADING_PLANETS = 'set_loading_planets';

export default createStore({
	state: {
		loadingPeople: true,
		loadingPlanets: true,
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
			return state.planets ?? [];
		},
		planet: (state) => (id) => state.planets.find((p) => p.id === id),
		loading: (state) => {
			return state.loadingPeople || state.loadingPlanets;
		},
	},
	mutations: {
		[ADD_PEOPLE](state, people) {
			state.people = [
				...people.map((person) => ({
					...person,
					mass: Number(person.mass) || 'unknown',
					height: Number(person.height) || 'unknown',
				})),
			].sort((a, b) => a.name.localeCompare(b.name));
			state.loadingPeople = false;
		},
		[ADD_PLANETS](state, planets) {
			state.planets = [...planets].sort((a, b) =>
				a.name.localeCompare(b.name)
			);
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
