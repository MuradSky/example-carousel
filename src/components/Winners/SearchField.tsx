import React from "react";
import {SearchStyles} from "./WinnersStyles";
import { ReactComponent as Search } from "assets/svg/search-icon.svg";
import { ReactComponent as Clear } from "assets/svg/icon-clear.svg";
type TP = {
    value: string
    setSearch: (type: string) => void
}

export const SearchField: React.FC<TP> = ({ value, setSearch }) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)
    return (
        <SearchStyles>
            <input
                type="text"
                name="winner-search"
                placeholder="Введите имя или фамилию для поиска"
                value={value}
                onChange={onChange}
            />
            { !!value.length ?
                <Clear className="search-icon" onClick={()=> setSearch('')} />
                : <Search className="search-icon" />
            }
        </SearchStyles>
    )
}
