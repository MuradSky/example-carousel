import {Modal} from '../Modal';
import React, {useEffect, useState} from 'react';
import { FormsModalContent, ModalText, ModalTitle } from '../ModalStyles';
import {ReactComponent as UserIcon} from 'assets/svg/icon-user-1.svg';
import {Button} from '../../Button';

interface TSuccessModal extends TModal {
	type: string
}

const textTemplates = {
	promoCode: 'Ваш промо-код принят. Вы получили level-up к своему герою!',
	personalData: 'Ваши данные отправлены.',
}

export const SuccessModal = ({ isOpen, type }: TSuccessModal) => {
	const [isOpenModal, setIsOpen] = useState(false)
	const [texts] = useState(textTemplates)

	useEffect(()=> {
		setIsOpen(isOpen)
	}, [isOpen])

	const onClose = ()=> setIsOpen(false)
	return (
		<Modal isOpen={isOpenModal} onClosed={onClose}>
			<FormsModalContent>
				<ModalTitle>Спасибо! </ModalTitle>
				<UserIcon className="modal-icon-email" />
				<ModalText className="text-success" mb40>
					{	// @ts-ignore
						texts[type]
					}
				</ModalText>

				<Button onClick={onClose} className="btn-center" children={'Ок'} />
			</FormsModalContent>
		</Modal>
	)
}
