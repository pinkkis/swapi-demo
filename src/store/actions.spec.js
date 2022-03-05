import { getPeople, getPlanets } from './actions';
import { ADD_PEOPLE, ADD_PLANETS } from './mutations';

describe('vuex actions', () => {
	beforeEach(() => {
		fetch.resetMocks();
		jest.spyOn(console, 'debug');
		console.debug.mockImplementation(() => null);
	});

	afterEach(() => {
		expect.assertions();
	});

	describe('getPeople', () => {
		it('fetches a list of people from the api', async () => {
			fetch.mockResponseOnce(JSON.stringify([]));
			const commit = jest.fn();

			await getPeople({ commit });

			expect(commit).toHaveBeenCalledTimes(2);
			expect(commit).toHaveBeenCalledWith(ADD_PEOPLE, []);
		});
	});

	describe('getPlanets', () => {
		it('fetches a list of planets from the api', async () => {
			fetch.mockResponseOnce(JSON.stringify([]));
			const commit = jest.fn();

			await getPlanets({ commit });

			expect(commit).toHaveBeenCalledTimes(2);
			expect(commit).toHaveBeenCalledWith(ADD_PLANETS, []);
		});
	});
});
