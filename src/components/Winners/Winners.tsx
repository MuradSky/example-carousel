import React from "react";
import { SearchField } from "./SearchField";
import { WeeklyEvents } from "./WeeklyEvents";
import { WinnersTable } from "./WinnersTable";
import { WinnersHead, WinnersStyles, WinnersWrap } from "./WinnersStyles";
import {useWinners} from "helpers/hooks/useWinners";

export const Winners: React.FC = () => {
    const  { data, search, activeWeek , currentWinners, setActiveWeek, setSearch } = useWinners()

    return (
        <WinnersStyles id="winners">
            <WinnersWrap>
                <WinnersHead>
                    <h2 className="head-title">победители</h2>
                    <SearchField value={search} setSearch={setSearch}/>
                </WinnersHead>
                <WeeklyEvents
                    data={data}
                    activeWeek={activeWeek}
                    setActiveWeek={setActiveWeek}
                />
                <WinnersTable data={currentWinners}/>
            </WinnersWrap>
        </WinnersStyles>
    )
}
