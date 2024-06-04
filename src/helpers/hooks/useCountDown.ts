import { useEffect, useState} from 'react';

export const useCountDown = (min: number, sec: number, isTrigger?: boolean)=> {
	const [seconds, setSeconds] = useState(sec)
	const [minutes, setMinutes] = useState(min < 0 ? 0 : min)
	const [isTrigg, setIsTrigg] = useState(false)
	const [isTimerWork, setIsTimerWork] = useState(false)
	useEffect(() => {
		let interval: any = setInterval(() => {
			if (isTrigger && !isTrigg) return clearInterval(interval);
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {

				if (minutes === 0) {
					clearInterval(interval);
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
			setIsTimerWork(true)

		}, 1000);
		return () => {
			clearInterval(interval);
		}
	})

	const resetTimer = () => {
		if (isTrigg) setIsTrigg(false)
		setMinutes(min === -1 ? 0 : min)
		setSeconds(sec === -1 ? 0 : sec)
		setIsTimerWork(false)
	}

	const startTimer = (min?: number, sec?: number)=> {
		if (min && min > -1) setMinutes(min)
		if (sec && sec > -1) setSeconds(sec)
		setIsTrigg(true)
		setIsTimerWork(true)
	}

	return {
		seconds,
		minutes,

		resetTimer,
		startTimer,
		isTimerWork
	}
}
