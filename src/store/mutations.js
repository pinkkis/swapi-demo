export const ADD_PEOPLE = 'add_people';
export const ADD_PLANETS = 'add_planets';
export const SET_LOADING_PEOPLE = 'set_loading_people';
export const SET_LOADING_PLANETS = 'set_loading_planets';

export const mutations = {
	[ADD_PEOPLE](state, people) {
		// parse entities being added to the store as they're going in
		// add an id field, convert number values that are strings to actual numbers
		// sort by name, it's the default for the table too

		state.people = [
			...people.map((person) => ({
				...person,
				id: Number.parseInt(
					person.url.split('/').filter(Boolean).pop() // take id out of url property, as it's unique
				),
				mass:
					Number.parseInt(person.mass, 10) || Number.MIN_SAFE_INTEGER,
				height:
					Number.parseInt(person.height, 10) ||
					Number.MIN_SAFE_INTEGER,
			})),
		].sort((a, b) => a.name.localeCompare(b.name));
		state.loadingPeople = false;
	},
	[ADD_PLANETS](state, planets) {
		state.planets = [
			...planets.map((planet) => ({
				...planet,
				id: Number.parseInt(
					planet.url.split('/').filter(Boolean).pop()
				),
				rotation_period:
					Number.parseInt(planet.rotation_period, 10) ||
					Number.MIN_SAFE_INTEGER,
				orbital_period:
					Number.parseInt(planet.orbital_period, 10) ||
					Number.MIN_SAFE_INTEGER,
				diameter:
					Number.parseInt(planet.diameter, 10) ||
					Number.MIN_SAFE_INTEGER,
				surface_water:
					Number.parseInt(planet.surface_water, 10) ||
					Number.MIN_SAFE_INTEGER,
				population:
					Number.parseInt(planet.population, 10) ||
					Number.MIN_SAFE_INTEGER,
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
