import { API_BASE } from '@/constants';
import { ApiBaseService } from './api-base.service';

const mockPeopleApiResponse = {
	count: 82,
	next: 'https://swapi.dev/api/people/?page=2',
	previous: null,
	results: [
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
	],
};

const mockPeopleApiResponse2 = {
	count: 82,
	next: null,
	previous: 'https://swapi.dev/api/people/?page=1',
	results: [
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
	],
};

describe('api-base-service.js', () => {
	beforeEach(() => {
		fetch.resetMocks();
		jest.spyOn(console, 'error');
		console.error.mockImplementation(() => null);
		jest.spyOn(console, 'debug');
		console.debug.mockImplementation(() => null);
	});

	afterEach(() => {
		expect.assertions();
	});

	describe('getUrl', () => {
		it('fetches given url', async () => {
			const service = new ApiBaseService(API_BASE, 'test');

			fetch.mockResponseOnce(JSON.stringify(mockPeopleApiResponse));

			const response = await service.getUrl(
				`${service.baseUrl}/${service.resource}`
			);

			expect(fetch).toHaveBeenCalledTimes(1);
			expect(response?.results.length).toBeTruthy();
		});

		it('fetches given url - error', async () => {
			const service = new ApiBaseService(API_BASE, 'test');

			fetch.mockRejectOnce('Test Fail Case');

			let response;
			let fetchError;

			try {
				response = await service.getUrl(
					`${service.baseUrl}/${service.resource}`
				);
			} catch (error) {
				fetchError = error;
			}

			expect(fetch).toHaveBeenCalledTimes(1);
			expect(response).toBeUndefined();
			expect(fetchError).toBe('Test Fail Case');
		});
	});

	describe('getAll', () => {
		it('fetches results until there is no `next` url', async () => {
			const service = new ApiBaseService(API_BASE, 'test');

			fetch.mockResponses(
				[JSON.stringify(mockPeopleApiResponse)],
				[JSON.stringify(mockPeopleApiResponse2)]
			);

			const response = await service.getAll();

			expect(fetch).toHaveBeenCalledTimes(2);
			expect(response?.length).toBeTruthy();
		});
	});
});