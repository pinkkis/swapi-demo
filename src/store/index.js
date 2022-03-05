import { createStore, createLogger } from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import { mutations } from './mutations';

export default createStore({
	state: {
		loadingPeople: false,
		loadingPlanets: false,
		people: [],
		planets: [],
	},
	getters,
	mutations,
	actions,
	plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
