import { mutations } from './mutations';

describe('vuex mutations', () => {
	beforeEach(() => {
		fetch.resetMocks();
		jest.spyOn(console, 'error');
		console.error.mockImplementation(() => null);
	});

	afterEach(() => {
		expect.assertions();
	});

	it('ADD_PEOPLE', async () => {
		const people = [
			{
				name: 'Luke Skywalker',
				height: '172',
				mass: '77',
				hair_color: 'blond',
				skin_color: 'fair',
				eye_color: 'blue',
				birth_year: '19BBY',
				gender: 'male',
				homeworld: 'https://swapi.dev/api/planets/1/',
				films: [
					'https://swapi.dev/api/films/1/',
					'https://swapi.dev/api/films/2/',
					'https://swapi.dev/api/films/3/',
					'https://swapi.dev/api/films/6/',
				],
				species: [],
				vehicles: [
					'https://swapi.dev/api/vehicles/14/',
					'https://swapi.dev/api/vehicles/30/',
				],
				starships: [
					'https://swapi.dev/api/starships/12/',
					'https://swapi.dev/api/starships/22/',
				],
				created: '2014-12-09T13:50:51.644000Z',
				edited: '2014-12-20T21:17:56.891000Z',
				url: 'https://swapi.dev/api/people/1/',
			},
		];
		const state = {
			people: [],
			planets: [],
		};

		mutations.add_people(state, people);

		expect(state.people.length).toBe(1);
		expect(state.people[0].id).toBe(1);
	});

	it('ADD_PLANETS', async () => {
		const planets = [
			{
				name: 'Tatooine',
				rotation_period: '23',
				orbital_period: '304',
				diameter: '10465',
				climate: 'arid',
				gravity: '1 standard',
				terrain: 'desert',
				surface_water: '1',
				population: '200000',
				residents: [
					'https://swapi.dev/api/people/1/',
					'https://swapi.dev/api/people/2/',
					'https://swapi.dev/api/people/4/',
					'https://swapi.dev/api/people/6/',
					'https://swapi.dev/api/people/7/',
					'https://swapi.dev/api/people/8/',
					'https://swapi.dev/api/people/9/',
					'https://swapi.dev/api/people/11/',
					'https://swapi.dev/api/people/43/',
					'https://swapi.dev/api/people/62/',
				],
				films: [
					'https://swapi.dev/api/films/1/',
					'https://swapi.dev/api/films/3/',
					'https://swapi.dev/api/films/4/',
					'https://swapi.dev/api/films/5/',
					'https://swapi.dev/api/films/6/',
				],
				created: '2014-12-09T13:50:49.641000Z',
				edited: '2014-12-20T20:58:18.411000Z',
				url: 'https://swapi.dev/api/planets/1/',
			},
		];
		const state = {
			people: [],
			planets: [],
		};

		mutations.add_planets(state, planets);

		expect(state.planets.length).toBe(1);
		expect(state.planets[0].rotation_period).toBe(23);
	});

	it('SET_LOADING_PEOPLE', async () => {
		const state = {
			loadingPeople: true,
		};

		mutations.set_loading_people(state, false);

		expect(state.loadingPeople).toBe(false);
	});

	it('SET_LOADING_PLANETS', async () => {
		const state = {
			loadingPlanets: true,
		};

		mutations.set_loading_planets(state, false);

		expect(state.loadingPlanets).toBe(false);
	});
});
