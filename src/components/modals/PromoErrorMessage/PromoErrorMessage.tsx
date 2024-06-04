import {FormsModalContent, ModalText, ModalTitle} from '../ModalStyles';
import {Button} from 'components';
import {Modal} from '../Modal';
import React from 'react';

interface TP extends TModal {
	text: string
}

export const PromoErrorMessage = ({ isOpen, onClosed, text }: TP) => {
	return (
		<Modal isOpen={isOpen} onClosed={onClosed}>
			<FormsModalContent>
				<ModalTitle style={{ color: '#E4002B' }}>Ошибка!</ModalTitle>
				<ModalText className="text-success" mb40>
					{text}
				</ModalText>
				<Button onClick={onClosed} className="btn-center" children={'Ок'} />
			</FormsModalContent>
		</Modal>
	)
}
