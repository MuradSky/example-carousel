import {useEffect, useState} from "react";
import useSWRImmutable from 'swr/immutable';
import {findCurrent, searchWinner} from "helpers/utils";
import axios from 'axios';

const fetcher = async (url: string) => {
	return axios.get(url)
}

export const useWinners = () => {
	const { data } = useSWRImmutable('/event/calendar', fetcher)
	const [winners, setWinners] = useState<any>([])
	const [search, setSearch] = useState<string>("")
	const [activeWeek, setActiveWeek] = useState<string>("")
	const [filtered, setFiltered] = useState<object[]>([])
	const [currentWinners, setCurrentWinners] = useState<object[]>([])
	useEffect(()=> {
		if (data) {
			const arr = [...data?.data?.data].reverse()
			arr && setWinners(arr)
		}
	}, [setWinners, data])

	useEffect(()=> {
		if (!data || winners.lenght === 0) return
		const currentWeek = [...winners]?.reverse()?.find((week: any) => !!week.winners?.length) || winners[0]
		currentWeek && setActiveWeek(currentWeek?.period)
	}, [setActiveWeek, winners, data])

	useEffect(()=> {
		if (!data) return
		const currentWeek = findCurrent(winners, activeWeek)
		setCurrentWinners(currentWeek?.winners)
		setFiltered(currentWeek?.winners)
	}, [activeWeek, winners, setCurrentWinners, setFiltered, data])

	useEffect(()=> {
		const filter = filtered?.filter(searchWinner(search))
		filter && setCurrentWinners(filter.length ? filter :  [{ is_empty_message: "Участник не найден", id: 1 }])
	}, [search, winners, setCurrentWinners, filtered])


	return {
		data: winners,
		search,
		activeWeek,
		setActiveWeek,
		currentWinners,
		setSearch
	}
}
