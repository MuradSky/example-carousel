import {useEffect} from 'react';
import {LevelUpTimerStyled} from './styled';
import {useCountDown} from 'helpers/hooks';
import {renderTimer} from 'helpers/utils';

interface TLevelUpTimer {
	errorReset: ()=> void
}
const timer = renderTimer('_promo_timer')

export const LevelUpTimer = ({ errorReset }: TLevelUpTimer) => {
	const { minutes, seconds, resetTimer, } = useCountDown(timer?.min, timer?.sec)

	useEffect(()=> {
		if (minutes === 0 && seconds === 0) {
			errorReset()
			resetTimer()
			localStorage.removeItem('_promo_timer')
		}
	}, [minutes, seconds, resetTimer, errorReset])

	return (
		<LevelUpTimerStyled>
			<span>Повторный запрос</span><br/>
			<span> кода через {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</span>
		</LevelUpTimerStyled>
	)
}
