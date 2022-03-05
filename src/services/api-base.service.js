export class ApiBaseService {
	baseUrl = '';
	resource = '';

	constructor(baseUrl, resource) {
		this.baseUrl = baseUrl;
		this.resource = resource;
	}

	// fetch a given url, with given optional config
	async getUrl(url, config = {}) {
		const response = await fetch(url, config);
		if (!response.ok) {
			throw new Error(
				`Error fetching ${this.resource} - ${response.statusText}`
			);
		}

		return await response.json();
	}

	// fetch all results from a paginated api end point following the 'next' property url
	async getAll() {
		const allResults = [];
		let hasNext = true;
		let canRetry = true;
		let requestUrl = `${this.baseUrl}/${this.resource}/`;

		while (hasNext && canRetry) {
			let result;
			try {
				result = await this.getUrl(requestUrl);
			} catch (error) {
				// retry once
				this.handleErrors(error);
				canRetry = false;
				continue;
			}

			// add results into local array
			if (result?.results && Array.isArray(result.results)) {
				allResults.push(...result.results);
			}

			// if there's no more next url, stop
			// otherwise update the request url to the next url
			if (!result?.next) {
				hasNext = false;
			} else {
				requestUrl = result.next;
			}
		}

		return Promise.resolve(allResults);
	}

	handleErrors(error) {
		console.error(`[Swapi ${this.resource}]: `, error);
	}
}
