export const people = (state) => {
	return (
		// if we can match a planet to the homeworld listed on the person,
		// then replace it with the planet object

		state.people?.map((person) => ({
			...person,
			homeworld:
				state.planets.find(
					(planet) => planet.url === person.homeworld
				) || person.homeworld,
		})) ?? []
	);
};
export const planets = (state) => {
	return (
		// and vice versa, but residents is an array
		state.planets?.map((planet) => ({
			...planet,
			residents:
				planet.residents.map((resident) =>
					state.people.find((person) => person.url === resident)
				) ?? [],
		})) ?? []
	);
};
export const person = (state) => (url) =>
	state.person.find((p) => p.url === url);
export const planet = (state) => (url) =>
	state.planets.find((p) => p.url === url);
export const loading = (state) => {
	return state.loadingPeople || state.loadingPlanets;
};
