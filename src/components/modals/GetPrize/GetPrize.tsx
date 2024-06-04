import {FormsModalContent, ModalTitle, ModalText} from '../ModalStyles';
import {Modal} from '../Modal';
import {GetPrizeForm} from '../../forms';

interface TGetPrize extends ModalProps {
	openSuccess: ()=> void
}

export const GetPrize = ({ isOpen, onClose, openSuccess }: TGetPrize) => {
	return (
		<Modal isOpen={isOpen} onClosed={onClose} offRequestClose>
			<FormsModalContent>
				<ModalTitle>Получите свой приз</ModalTitle>
				<ModalText mb40>Заполните форму для получения приза</ModalText>

				<GetPrizeForm
					closeModal={onClose}
					openSuccess={openSuccess}
				/>
			</FormsModalContent>
		</Modal>
	)
}
