export const weekClasses = (week: TWeek, activeWeek: string) => {
    const className = week.period === activeWeek ? 'is-active' : ''
    return className
}
export const weekFinishedDate = (str: string) => str.substring(0, 5)

export const isAvailableWeek = (week: TWeek) => !!week.is_finished || !!week.is_current

export const searchWinner = (val: string) => {
    return (item: any)=> {
        const flName = item?.name?.toLowerCase().includes(val.toLowerCase())
        const flEmail = item?.email?.toLowerCase().includes(val.toLowerCase())
        return flName || flEmail
    }
}

export const findCurrent = (weekly_events: any, activeWeek: string) => weekly_events?.find((week: any) => week.period === activeWeek)
