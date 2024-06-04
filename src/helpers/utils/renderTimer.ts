export const renderTimer = (key: string)=> {
	const register = localStorage.getItem(key)
	const def = {
		min: 0,
		sec: 0,
	}

	if (!register) return def
	const now = new Date().getTime();
	const futureDate = new Date(register).getTime();
	const timeleft = futureDate - now;
	const msPerSecond = 1000;
	const msPerMinute = msPerSecond * 60;
	const msPerHour = msPerMinute * 60;
	const msPerDay = msPerHour * 24;

	const days = Math.floor(timeleft / msPerDay);
	const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / msPerHour);
	const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / msPerMinute);
	const seconds = Math.floor((timeleft % (1000 * 60)) / msPerSecond);

	if (days < 0 || hours < 0 || (minutes === 0 && seconds === 0)) {
		localStorage.removeItem(key)
		return def
	}

	return {
		min: minutes,
		sec: seconds,
	}
}

export const recordTimeFixed = ()=> {
	const date = new Date()
	date.setMinutes(date.getMinutes() + 30)
	return date.toString()
}
