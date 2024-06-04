import {LoginForm, Modal} from "components";
import {FormsModalContent, ModalTitle} from '../ModalStyles';

interface AuthModalProps extends ModalProps {

}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClosed={onClose}
            shouldCloseOnOverlayClick={false}
        >
	        <FormsModalContent>
		        <ModalTitle>Вход</ModalTitle>
		        <LoginForm onClose={onClose} />
	        </FormsModalContent>
        </Modal>
    )
}
