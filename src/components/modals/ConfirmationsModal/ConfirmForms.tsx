import React, {useEffect} from 'react';
import {Button, ConfirmEmail} from 'components';
import { FormsModalContent, ModalText, ModalTitle } from '../ModalStyles';
import { ReactComponent as UserIcon } from 'assets/svg/icon-user-1.svg';
import {renderTimer} from 'helpers/utils';
import {useCountDown} from 'helpers/hooks';
import {useConfirmModal} from 'store';

const formatter = (min: number, sec: number)=> {
	return (min < 10 ?  min : min) + ' : ' + (sec < 10 ? '0'+sec : sec)
}

export const ConfirmEmailSuccess = () => {
	const timer = renderTimer('_email_send')
	const { minutes, seconds } = useCountDown(timer?.min, timer?.sec)
	const [addModalType, addIsOpen]  = useConfirmModal((state: any) => [state.addModalType, state.addIsOpen])
	useEffect(()=> {
		if (minutes <= 0 && seconds <= 0) {
			addModalType('form')
			localStorage.removeItem('_email_send')
		}
		// eslint-disable-next-line
	}, [minutes, seconds])

	const closeAndRedirect = () => addIsOpen(false)

	return (
		<FormsModalContent>
			<ModalTitle>Спасибо</ModalTitle>
			<UserIcon className="modal-icon"/>
			<ModalText mb40>
				Мы отправили подтверждение на ваш адрес электронной почты. Перейдите по ссылке в письме.
			</ModalText>
			<Button onClick={closeAndRedirect} className="btn-center">
				Хорошо
			</Button>
			<div className="timer">
				Отправить письмо еще раз можно будет через {formatter(+minutes.toFixed(0), seconds)} мин
			</div>
		</FormsModalContent>
	);
};


export const ConfirmForm = () => {
	return (
		<FormsModalContent>
			<ModalTitle>Подтверждение</ModalTitle>
			<ModalText mb40>
				Пожалуйста, подтвердите или введите ваш адрес электронной почты.
			</ModalText>
			<ConfirmEmail />
		</FormsModalContent>
	);
};



