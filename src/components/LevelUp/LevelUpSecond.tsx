import React, {useEffect, useState} from 'react';
import {Button, PromoErrorMessage} from 'components';
import {LevelUpForm} from './LevelUpForm';
import {LevelUpTimer} from './LevelUpTimer';
import {LevelUpStyled} from './styled';
import {recordTimeFixed} from 'helpers/utils';
import pin from 'assets/img/pin.png';
import tinLogo from 'assets/img/tin-logo.png';
import {ReactComponent as ArrLink} from 'assets/svg/arr-link.svg';

export const LevelUpSecond = ({ setPromoSuccess }: any ) => {
	const [isOpenError, setIsOpenError] = useState(false)
	const [errorCount, setErrorCount] = useState(0)
	const [isTimer, setIsTimer] = useState(false)

	useEffect(()=> {
		const promoTimer = localStorage.getItem('_promo_timer')
		if (promoTimer) setIsTimer(true)
	}, [setIsTimer])

	useEffect(()=> {
		if (errorCount > 2) {
			setIsTimer(true)
			localStorage.setItem('_promo_timer', recordTimeFixed())
		}
	}, [errorCount, setIsTimer])

	const onSuccessPromo = ()=> setPromoSuccess(true)
	const toggleError = (toggle: boolean)=> ()=> {
		if (toggle) setErrorCount(state => state+1)
		setIsOpenError(toggle)
	}

	const errorReset = ()=> {
		setErrorCount(0)
		setIsTimer(false)
	}

	return (
		<LevelUpStyled isProfile>
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
				<div className="content">
					<div className="title">
						Хочешь получить <span>+ 1 уровень</span> к своему герою?
					</div>

					<div className="text">
						Переходи на сайт Тинькофф, авторизуйся и оплачивай свою покупку с любой карты Тинькофф
					</div>
				</div>
				{!isTimer ?
                    <LevelUpForm
	                    onSuccessPromo={onSuccessPromo}
	                    openError={toggleError(true)}
                    /> :
					<LevelUpTimer errorReset={errorReset}  />
				}
				<Button
					type="link"
					href="https://l.tinkoff.ru/chicken.tinkoff.ru"
					target="_blank"
					className="button-link"
					rel="noopener noreferrer"
				>
					Перейти на сайт
					<ArrLink/>
				</Button>
			</div>
			<PromoErrorMessage
				isOpen={isOpenError}
				onClosed={toggleError(false)}
				text={!isTimer ? 'Извините, данный код не действителен, либо был использован ранее'
					: 'Вы превысили кол-во неправильных попыток, попробуйте через 1 час'
				}
			/>
		</LevelUpStyled>

	)
}
