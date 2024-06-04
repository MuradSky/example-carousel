import {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useUUID = () => {
	const savedUUID = localStorage.getItem('_device_uuid')
	const [uuid, setUuid] = useState(savedUUID || '')
	useEffect(()=> {
		if (!savedUUID) {
			const newUUID = uuidv4()
			localStorage.setItem('_device_uuid', newUUID)
			setUuid(newUUID)
		}
	}, [setUuid, savedUUID])

	return { uuid }
}
