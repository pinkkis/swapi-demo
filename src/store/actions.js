import { api } from '../services/api';
import {
	SET_LOADING_PEOPLE,
	ADD_PEOPLE,
	SET_LOADING_PLANETS,
	ADD_PLANETS,
} from './mutations';

export const getPeople = async ({ commit }) => {
	commit(SET_LOADING_PEOPLE, true);
	commit(ADD_PEOPLE, (await api.people.getAll()) ?? []);
};

export const getPlanets = async ({ commit }) => {
	commit(SET_LOADING_PLANETS, true);
	commit(ADD_PLANETS, (await api.planets.getAll()) ?? []);
};
