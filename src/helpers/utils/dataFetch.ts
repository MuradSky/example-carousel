
interface Headers {
	Authorization?: string,
	'Content-Type'?: 'application/json' | 'pplication/x-www-form-urlencoded',
	'Accept'?: 'application/json' | 'pplication/x-www-form-urlencoded'
}

const BASE_URL = process.env.REACT_APP_BACKEND ?? '/'

const headersDefault = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
}

const formatUrl = (BASE_URL: string, url: string)=> {
	if (!!url.match(/https/) || !!url.match(/http/)) {
		return url
	}
	return BASE_URL + url
}

export const dataFetch = {
	async get(url: string, headers?: Headers) {
		return await fetch(formatUrl(BASE_URL, url), {
			method: 'GET',
			headers: {
				...headers,
				...headersDefault
			}
		}).then(res => res.json())
	},

	async post(url: string, data?: any, headers?: Headers) {
		return await fetch(formatUrl(BASE_URL, url), {
			method: 'POST',
			headers: {
				...headers,
				...headersDefault
			},
			body: JSON.stringify(data)
		}).then(res => res.json())
	}
}
