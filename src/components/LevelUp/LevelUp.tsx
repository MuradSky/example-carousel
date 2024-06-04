import {LevelUpStyled} from './styled';
import pin from 'assets/img/pin.png';
import tinLogo from 'assets/img/tin-logo.png';
import {ReactComponent as ArrLink} from 'assets/svg/arr-link.svg';
import {Button} from '../Button';

export const LevelUp = () => {
	return (
		<LevelUpStyled>
			<div className="wrap">

				<div className="logo">
					<picture>
						<img src={pin} alt="" width={24} height={24} loading="lazy"/>
					</picture>
					<span>level up <small>от</small></span>
					<picture>
						<img src={tinLogo} alt="" width={164} height={38} loading="lazy"/>
					</picture>
				</div>
				{/*<div className="content">*/}
				{/*	*/}
				{/*</div>*/}
				<div className="title">
					Хочешь получить <span>+ 1 уровень</span> к своему герою?
				</div>

				<div className="text">
					Переходи на сайт Тинькофф, авторизуйся и оплачивай свою покупку с любой карты Тинькофф
				</div>
				<Button
					type="link"
					href="https://l.tinkoff.ru/chicken.tinkoff.ru"
					target="_blank"
					className="button-link"
					rel="noopener noreferrer"
				>
					Получить +1 уровень
					<ArrLink/>
				</Button>
			</div>
		</LevelUpStyled>
	)
}
