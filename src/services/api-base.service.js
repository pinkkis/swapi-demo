export class ApiBaseService {
	baseUrl = '';
	resource = '';

	constructor(baseUrl, resource) {
		this.baseUrl = baseUrl;
		this.resource = resource;
	}

	async getUrl(url, config = {}) {
		try {
			console.debug(`[Swapi ${this.resource}] request: `, url, config);
			return await fetch(url, config).then(
				async (response) => await response.json()
			);
		} catch (error) {
			this.handleErrors(error);
			return Promise.reject(error);
		}
	}

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
				this.handleErrors(error);
				canRetry = false;
				continue;
			}

			if (result?.results) {
				allResults.push(...result.results);
			}

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
