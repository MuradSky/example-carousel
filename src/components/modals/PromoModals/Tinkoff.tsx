import {ModalLogo, ModalTinkoff, ModalTitle} from './styles';
import tinkoff from 'assets/img/modal/tinkoff.svg'
import {Button} from 'components';
import { ReactComponent as Yandex1 } from 'assets/img/modal/y-1.svg';
import { ReactComponent as Yandex2 } from 'assets/img/modal/y-2.svg';
import { ReactComponent as Yandex3 } from 'assets/img/modal/y-3.svg';


export const Tinkoff = ({ onClose }: { onClose: ()=> void }) => {
	return (
		<ModalTinkoff>
			<div className="y-1">
				<Yandex1/>
			</div>
			<div className="y-2">
				<Yandex2/>
			</div>
			<div className="y-3">
				<Yandex3/>
			</div>
			<ModalLogo>
				<picture>
					<img src={tinkoff} alt="" width={340} height={204}/>
				</picture>
			</ModalLogo>
			<ModalTitle>
				Повышай свой уровень и выигрывай больше денег от Тинькофф!
			</ModalTitle>

			<Button onClick={onClose}>
				Ок
			</Button>
		</ModalTinkoff>
	)
}
