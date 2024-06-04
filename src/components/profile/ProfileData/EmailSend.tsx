import {ConfirmModal, Button, Intrusive} from 'components';
import {ProfileInformer} from 'pages/profile/ProfileStyles';
import {ProfileDataInfo} from './ProfileDataStyles';
import {ReactComponent as InfoIcon} from 'assets/svg/info-icon.svg';
import {useConfirmModal} from 'store';
import {useState} from 'react';

export const EmailSend = () => {
	const [addIsOpen]  = useConfirmModal((state: any) => [state.addIsOpen])
	const onToggleConfirm = ()=>  addIsOpen(true)
	const [isOpen, setIsOpen] = useState(true)
	const onClose = ()=> {
		setIsOpen(false)
		onToggleConfirm()
	}
	return (
		<ProfileDataInfo>
			<ProfileInformer>
				<InfoIcon/>
				<div className="bottom">
		            <span>
			            Пожалуйста, подтвердите вашу почту. Без подтверждения
		              вашего почтового ящика, вы не можете регистрировать чеки.
		            </span>
					<Button variant="black" onClick={onToggleConfirm}>
						Подтвердите почту
					</Button>
				</div>
			</ProfileInformer>
			<Intrusive isOpen={isOpen} onClose={onClose} />
			<ConfirmModal />
		</ProfileDataInfo>
	)
}
