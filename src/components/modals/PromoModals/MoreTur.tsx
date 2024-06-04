import {ModalLogo, ModalMoreTur, ModalTitle} from './styles';
import moretur from 'assets/img/modal/moretur.svg'
import moretut2 from 'assets/img/modal/more-tut2.svg'
import moretut from 'assets/img/modal/more-tut.png'
import {Button} from 'components';



export const MoreTur = ({ onClose }: { onClose: ()=> void }) => {
	return (
		<ModalMoreTur>
			<div className="decor">
				<img src={moretut} alt="" loading="lazy" />
			</div>
			<ModalLogo>
				<picture>
					<source media="(max-width: 768px)" srcSet={moretut2} type="image/svg+xml" />
					<img src={moretur} alt="" width={340} height={204}/>
				</picture>
			</ModalLogo>
			<ModalTitle>
				Совершай покупки и выигрывай путешествие от МореТут!
			</ModalTitle>

			<Button onClick={onClose}>
				Ок
			</Button>
		</ModalMoreTur>
	)
}
