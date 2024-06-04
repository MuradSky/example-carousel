import React, {useEffect, useRef, useState} from 'react';
import {Modal} from '../Modal';
import {FormsModalContent, ModalText, ModalTitle} from '../ModalStyles';
import {Button} from 'components';
import {useUser} from 'helpers/hooks';
import Cookies from 'js-cookie';
import axios from 'axios';
import {ReactComponent as UserIcon} from 'assets/svg/icon-user-1.svg';
import {ReactComponent as UserIconError} from 'assets/svg/icon-user-error.svg';

const removeToken = ()=> {
	Cookies.remove('_kfc_email_token')
	Cookies.remove('_kfc_email_uuid')
}

export const EmailConfirm = () => {
	const [isDead, setIsDead] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const { user, mutationTrigger } = useUser()
	const render = useRef(false)

	useEffect(()=> {
		const controller = new AbortController()
		const confirmation = Cookies.get('_kfc_email_token')
		const uuid = Cookies.get('_kfc_email_uuid')
		if (user?.is_verified) {
			removeToken()
			return controller.abort()
		}
		if (confirmation && !render.current) {
			// setIsLoading(true)
			axios.post('/auth/email/confirm', {
				verification_token: confirmation,
				uuid,
			}, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				signal: controller.signal
			}).then(()=> {
				setIsOpen(true)
				mutationTrigger()
			}).catch(({ response }) => {
				const errors = ['Не удалось подтвердить емейл', 'Подтверждение не было запрошено', 'Server Error']
				if (errors.includes(response?.data?.message)) {
					setIsDead(true)
					setIsOpen(true)
				}
			}).finally(()=> {
				removeToken()
				setIsLoading(false)
			})
		}
		render.current = true
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onClose = ()=> setIsOpen(false)

	return (
		<Modal isOpen={isOpen} onClosed={onClose}>
			<FormsModalContent>
				<ModalTitle>{isDead ? 'Ошибка' : 'Спасибо!'}</ModalTitle>
				{ isDead ? <UserIconError className="modal-icon-email" /> : <UserIcon className="modal-icon-email" /> }
					<ModalText className="text-success" mb40 style={{ color: isDead ? 'red' : '#000' }}>
					{ isDead ?  'Извините, ваша ссылка уже недействительна. Запросите подтверждение почты еще раз.' : 'Ваш емейл подтвержден!' }
				</ModalText>
				<Button onClick={onClose} isLoading={isLoading} className="btn-center" children={'Ок'} />
			</FormsModalContent>
		</Modal>
	)
}
