import {PromoModalStyles} from './styles';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Tinkoff} from './Tinkoff';
import {MoreTur} from './MoreTur';
import {A101} from './A101';
import {useUser} from 'helpers/hooks';

const modalRender = (n: number, onClose: ()=> void) => {
	switch (n) {
		case 0:
			return <Tinkoff onClose={onClose} />
		case 1:
			return <MoreTur onClose={onClose} />
		case 2:
			return <A101 onClose={onClose} />
		default:
			return null
	}
}

const timeRegister = ()=> {
	const date = new Date()
	date.setDate(date.getDate() + 10)
	return date
}

const randomNumber = ()=> {
	return Math.floor(Math.random() * 3)
}

export const PromoModals = () => {
	const isFixed = useRef<any>(false)
	const { user } = useUser()
	const [isOpen, setIsOpen] = useState(false)
	const [number, setNumber] = useState(0)

	const countDownDate = useMemo(()=> {
		const date = localStorage.getItem('_count_down_date')
		return date ? new Date(date).getTime() : 0
		// eslint-disable-next-line
	}, [user])

	const localModals = useMemo(()=> {
		const state = localStorage.getItem('_kfc_modal')
		return state && state.split(',').map(item => +item)
		// eslint-disable-next-line
	}, [user])
	useEffect(()=> {
		const openedLength = localModals?.length || 0
		const distance = countDownDate - new Date().getTime();
		if (!user?.avatar || !user?.email_verified_at || distance > 0 || openedLength >=3 || isFixed.current) return
		isFixed.current = true
		setTimeout(()=> {
			localStorage.setItem('_count_down_date', String(timeRegister()))
			if (localModals) {
				const recursive: any = ()=> {
					const rn = randomNumber()
					if (localModals.includes(rn)) {
						return recursive()
					}
					setNumber(rn)
					setIsOpen(true)
					localStorage.setItem('_kfc_modal', `${localModals?.join(',')}, ${rn}`)
				}
				return recursive()
			}
			const rn = randomNumber()
			setNumber(rn)
			setIsOpen(true)
			localStorage.setItem('_kfc_modal', `${rn}`)
			// @ts-ignore
			isFixed.current = false
		}, 3000)
	}, [user, countDownDate, localModals])

	const onClose = useCallback(()=> {
		setIsOpen(false)
		document.body.classList.remove('ReactModal__Body--open')
	}, [])

	return (
		<PromoModalStyles isOpen={isOpen} onClosed={onClose}>
			{modalRender(number, onClose)}
		</PromoModalStyles>
	)
}
