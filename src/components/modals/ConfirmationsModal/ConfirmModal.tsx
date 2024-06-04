import React, {useEffect} from 'react';
import {Modal} from 'components';
import {ConfirmEmailSuccess, ConfirmForm} from './ConfirmForms';
import {useConfirmModal} from 'store';

export const ConfirmModal = () => {
	const [isOpen, addIsOpen, modalType, addModalType]  = useConfirmModal((state: any) => [
		state.isOpen,
		state.addIsOpen,
		state.modalType,
		state.addModalType
	])

	useEffect(() => {
		const register = localStorage.getItem('_email_send')
		addModalType(register ? 'success' : 'form')
	}, [addModalType])

	return (
		<Modal isOpen={isOpen} onClosed={()=> addIsOpen(false)}>
			{ modalType === 'success' ?  <ConfirmEmailSuccess/> : <ConfirmForm /> }
		</Modal>
	);
};
