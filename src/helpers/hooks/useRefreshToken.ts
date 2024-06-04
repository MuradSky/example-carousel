import {useEffect, useRef, useState} from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const refreshData = async ( setExpiresIn: any) => {
	setExpiresIn(null)
	Cookies.remove('_kfc_expires_in')
	const reset = ()=> {
		Cookies.remove('_kfc_token')
		Cookies.remove('_kfc_expires_in')
	}

	return await axios.post('/adapter/token/refresh', {}, {
		headers: {
			Authorization: `Bearer ${Cookies.get('_kfc_token')}`,
			"Accept": "application/json",
		}
	}).then(res => {
		const keys = ['invalid_client', 'invalid_grant']
		if (keys.includes(res?.data?.message)) {
			return reset()
		}

		if (res?.data?.access_token) {
			Cookies.set('_kfc_token', res?.data?.access_token)
			Cookies.set('_kfc_expires_in', res?.data?.expires_in)
			setExpiresIn(res?.data?.expires_in)
		}
	}).catch(err=> {
		if (err?.response.status === 500) {
			return reset()
		}
	})
}

export const useRefreshToken = () => {
	const isRefresh = useRef(false)
	const [expiresIn, setExpiresIn] = useState<string | null>(Cookies.get('_kfc_expires_in') || null)

	useEffect(()=> {
		const startTime = new Date()
		const endTime = new Date(Number(expiresIn) * 1000)
		const diff = endTime.getTime() - startTime.getTime()
		const ms = (Math.round(diff / 60000) - 1)  * 60 * 1000

		const timerId = setTimeout(() => {
			if (isRefresh.current) return
			refreshData(setExpiresIn).finally(()=> {
				isRefresh.current = false
			})
		}, ms);
		return ()=> clearTimeout(timerId)
	}, [expiresIn])
}
