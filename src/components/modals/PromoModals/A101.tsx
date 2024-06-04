import {ModalA101, ModalLogo, ModalTitle} from './styles';
import a101 from 'assets/img/modal/a101.svg'
import moretut from 'assets/img/modal/a101-bg.png'
import {Button} from 'components';



export const A101 = ({ onClose }: { onClose: ()=> void }) => {
	return (
		<ModalA101>
			<div className="decor">
				<img src={moretut} alt="" loading="lazy" />
			</div>
			<ModalLogo>
				<picture>
					<img src={a101} alt="" width={340} height={204}/>
				</picture>
			</ModalLogo>
			<ModalTitle>
				Совершай покупки и выигрывай квартиру в Москве от А101!
			</ModalTitle>

			<Button onClick={onClose}>
				Ок
			</Button>
		</ModalA101>
	)
}
