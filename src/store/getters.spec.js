import { people, planets } from './getters';

describe('vuex actions', () => {
	let state;

	beforeEach(() => {
		state = {
			people: [
				{
					name: 'Luke Skywalker',
					homeworld: 'https://swapi.dev/api/planets/1/',
					url: 'https://swapi.dev/api/people/1/',
				},
			],
			planets: [
				{
					name: 'Tatooine',
					residents: ['https://swapi.dev/api/people/1/'],
					url: 'https://swapi.dev/api/planets/1/',
				},
			],
			loadingPeople: false,
			loadingPlanets: false,
		};

		fetch.resetMocks();
		jest.spyOn(console, 'debug');
		console.debug.mockImplementation(() => null);
	});

	afterEach(() => {
		expect.assertions();
	});

	describe('people', () => {
		it('fetches a list of people from the api', async () => {
			const actual = people(state);

			expect(actual[0].homeworld.name).toBe('Tatooine');
		});
	});

	describe('planets', () => {
		it('fetches a list of planets from the api', async () => {
			const actual = planets(state);

			expect(actual[0].residents[0].name).toBe('Luke Skywalker');
		});
	});
});
