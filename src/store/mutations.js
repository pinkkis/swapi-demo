export const ADD_PEOPLE = 'add_people';
export const ADD_PLANETS = 'add_planets';
export const SET_LOADING_PEOPLE = 'set_loading_people';
export const SET_LOADING_PLANETS = 'set_loading_planets';

export const mutations = {
	[ADD_PEOPLE](state, people) {
		state.people = [
			...people.map((person) => ({
				...person,
				id: Number(person.url.split('/').filter(Boolean).pop()),
				mass: Number(person.mass) || person.mass,
				height: Number(person.height) || person.height,
			})),
		].sort((a, b) => a.name.localeCompare(b.name));
		state.loadingPeople = false;
	},
	[ADD_PLANETS](state, planets) {
		state.planets = [
			...planets.map((planet) => ({
				...planet,
				id: Number(planet.url.split('/').filter(Boolean).pop()),
				rotation_period:
					Number(planet.rotation_period) || planet.rotation_period,
				orbital_period:
					Number(planet.orbital_period) || planet.orbital_period,
				diameter: Number(planet.diameter) || planet.diameter,
				surface_water:
					Number(planet.surface_water) || planet.surface_water,
				population: Number(planet.population) || planet.population,
			})),
		].sort((a, b) => a.name.localeCompare(b.name));
		state.loadingPlanets = false;
	},
	[SET_LOADING_PEOPLE](state, loading) {
		state.loadingPeople = loading;
	},
	[SET_LOADING_PLANETS](state, loading) {
		state.loadingPlanets = loading;
	},
};
