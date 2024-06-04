import {FormsModalContent, ModalTitle} from '../ModalStyles';
import {Button} from 'components';
import {Modal} from '../Modal';
import React, {useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useUser} from 'helpers/hooks';

interface TWarnModal extends ModalProps {
	handler?: ()=> void
}


export const LogoutModal = ({ isOpen, onClose, handler }: TWarnModal) => {
	const { signOut } = useUser()
	const [isLoading, setIsLoading] = useState(false)
	const onLogOut = ()=> {
		const accessToken = Cookies.get('_kfc_token')
		setIsLoading(true)
		axios.post('/adapter/token/revoke', {}, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}).then(res=> {
			signOut()
		}).finally(()=> {
			setIsLoading(false)
		})
	}

	return (
		<Modal isOpen={isOpen} onClosed={onClose}>
			<FormsModalContent>
				<ModalTitle>Вы действительно хотите выйти ?</ModalTitle>

				<div className="btn-row">
					<Button
						onClick={onLogOut}
						className="btn-center"
						children="Да"
						isLoading={isLoading}
					/>

					<Button
						variant="black"
						onClick={onClose}
						className="btn-center"
						children="Нет"
					/>
				</div>
			</FormsModalContent>
		</Modal>
	)
}
