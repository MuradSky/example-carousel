import {ModalA101, ModalTitle, PromoModalStyles} from './styles';
import {Button} from 'components';

export const Intrusive = ({ isOpen, onClose }: any) => {
	return (
		<PromoModalStyles isOpen={isOpen}>
			<ModalA101 isSecond>
				<ModalTitle>
					Введи свою электронную почту и подтверди ее, чтобы мы смогли регистрировать твои успехи!
					<p style={{ marginTop: 15 }}>
						Начни рост своего Чикен Тамагочи к призам уже сейчас!
					</p>
				</ModalTitle>

				<Button onClick={onClose}>
					Ок
				</Button>
			</ModalA101>
		</PromoModalStyles>

	)
}
