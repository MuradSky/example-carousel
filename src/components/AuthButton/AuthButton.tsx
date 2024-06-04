import {useState} from 'react';
import {Button} from '../Button';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useUUID} from 'helpers/hooks';

interface TP {
	variant?: 'white'
}

export const AuthButton = ({ variant }: TP) => {
	const [isLoading, setIsLoading] = useState(false)
	const { uuid } = useUUID()

	const getAdapterAuth = ()=> {
		const deviceData = JSON.parse(String(localStorage.getItem('_device_data')))
		const navigator = window.navigator
		setIsLoading(true)
		const data = {
			app_version: deviceData?.app_version || 'Tamagotchi',
			// @ts-ignore
			device_id: deviceData?.device_id || navigator.deviceId || uuid,
			// @ts-ignore
			device_name: deviceData?.device_name || navigator.deviceName || navigator.userAgent.substring(0, 100),
			platform: deviceData?.platform || 'website',
		}
		localStorage.setItem('_device_data', JSON.stringify(data))
		axios.post(`/adapter/authorize`, data).then((data)=> {
			window.open(data?.data?.url, '_self')
		}).finally(()=> setIsLoading(false))
	}
	const  accessToken = Cookies.get('_kfc_token')
	return !accessToken ?  (
		<Button
			isLoading={isLoading}
			variant={variant}
			onClick={getAdapterAuth}
		>
			Участвовать
		</Button>
	) : null
}
