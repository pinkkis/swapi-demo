import { createStore, createLogger } from 'vuex';

export default createStore({
	state: {
		loading: false,
		people: [],
		planets: [],
	},
	getters: {
		people(state) {
			return state.people;
		},
		planets(state) {
			return state.planets;
		},
		planet: (state) => (id) => state.planets.find((p) => p.id === id),
	},
	mutations: {
		addPeople(state, people) {
			state.people = [...state.people, ...people];
		},
		addPlanets(state, planets) {
			state.planets = [...state.planets, ...planets];
		},
		setLoading(state, loading) {
			state.loading = loading;
		},
	},
	actions: {
		getPeople() {},
		getPlanets() {},
	},
	plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
