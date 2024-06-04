import {FormsModalContent, ModalTitle} from '../ModalStyles';
import {Button} from '../../Button';
import {Modal} from '../Modal';
import React, {useEffect, useState} from 'react';

export const NoGiveaway = () => {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(()=> {
		const saved = localStorage.getItem('_no_give_open1')
		if (!saved) {
			setIsOpen(true)
			localStorage.setItem('_no_give_open1', 'true')
		}
	}, [])

	return (
		<Modal isOpen={isOpen} onClosed={()=> setIsOpen(false)}>
			<FormsModalContent>
				<ModalTitle style={{marginBottom: '40px'}}>
					Уважаемые участники, регистрация завершилась!<br/>
					Проверяйте призы в личном кабинете и ищите себя в списках победителей.
					Спасибо за участие!
				</ModalTitle>

				<Button onClick={()=> setIsOpen(false)} className="btn-center" children={'Ок'} />
			</FormsModalContent>
		</Modal>
	)
}
