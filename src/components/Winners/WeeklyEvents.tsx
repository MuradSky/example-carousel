import React, { useMemo } from "react";
import { WeeklyStyles } from "./WinnersStyles";
import {findLastIndex, weekClasses} from "helpers/utils";

type TPWeeks = {
    data: TWeek[]
    activeWeek: string
    setActiveWeek: (type: string) => void
}

export const WeeklyEvents: React.FC<TPWeeks> = ({ data, activeWeek, setActiveWeek }) => {
	const currentPosition = useMemo(()=> {
		const index = findLastIndex(data, (item: any) => !!item.winners?.length) || 0
		return index
	}, [data])

    const onClick = (str: string, isAvailable: boolean) => ()=> {
		isAvailable && setActiveWeek(str)
    }

    return (
        <WeeklyStyles>
            <ul>
                {data?.map((week: TWeek, i: number) => {
					return (
						<li key={week.id+'-'+i} className={weekClasses(week, activeWeek)}>
							<button
								className="week-button"
								onClick={onClick(week.period, currentPosition >= i)}
								disabled={currentPosition < i}
							>
								<span className="week-period">{week.period}</span>
								<span className="week-end">Розыгрыш {week.drew_at}</span>
							</button>
						</li>
					)
                })}
            </ul>
        </WeeklyStyles>
    )
}
