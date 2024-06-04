import useSWRImmutable from 'swr/immutable';
import {NavigateFunction, useNavigate, useSearchParams} from 'react-router-dom';
import Cookies from 'js-cookie'
import axios from 'axios';

const fetcher = async (url: string)=> {
	const accessToken = Cookies.get('_kfc_token')
	if (!accessToken) throw Error('Missing token')
	return await axios.get(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Accept": "application/json",
		}
	})
}

const QUERY_PARAMS = ['app_version', 'device_id', 'device_name', 'platform']

const interception = (isToken: boolean, searchParams: URLSearchParams, navigate: NavigateFunction)=> {
	const is = QUERY_PARAMS.findIndex((item) => searchParams.has(item)) !== -1
	if (isToken && is) return navigate('/profile')
	else if (is) navigate('/')
}

export const useUser = ()=> {
	const [searchParams] = useSearchParams()
	const token = Cookies.get('_kfc_token')
	const navigate = useNavigate()
	const { data, isLoading, error, mutate }: any = useSWRImmutable('/user/profile', fetcher, {
		onSuccess() {

		},
		onError(err) {
			if (err?.response?.status === 401) {
				Cookies.remove('_kfc_token')
				navigate('/')
			}
		}
	})

	interception(!!token, searchParams, navigate)

	const mutationTrigger = async (token?: string) => {
		if (typeof token === 'string') Cookies.set('_kfc_token', token)
		return await mutate()
	}

	const signOut = ()=> {
		Cookies.remove('_kfc_token')
		mutate()
		navigate('/')
	}

	const config = {
		user: data?.data?.data,
		periods: data?.data?.periods,
		isLoading: isLoading || !data?.data?.data,
		isLogged: !token ? false : true,
		mutationTrigger,
		signOut,
	}

	if (!!error) {
		return {
			...config,
			periods: null,
			user: null
		}
	}

	return config
}
