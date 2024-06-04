import React, {Fragment, useEffect, useState} from "react";
import {TableMessage, TableRow, TableStyles} from "./WinnersStyles";
import {emailViewMask, isMobile, windowResize} from "helpers/utils";
import {Button} from "../Button";

const moreBtn = (slicer: number, data: object[], openMore: ()=> void ) => {
    return slicer >= data?.length ?
        null : <Button className="more-btn" variant={"black"} children={"Показать больше"} onClick={openMore} />
}

export const WinnersTable: React.FC<{ data: object[] }> = ({ data })=> {
    const [slicer, setSlicer] = useState<number>(isMobile ? 5 : 7)
    const [hasMobile, setHasMobile] = useState(isMobile)
    useEffect(()=> {
        setSlicer(hasMobile ? 5 : 7)
    }, [hasMobile, setSlicer, data])

    useEffect(()=> {
        windowResize(setHasMobile, 768)
    }, [setHasMobile])

    const openMore = ()=> setSlicer(slicer + (hasMobile ? 5 : 7))

    return (
        <TableStyles>
            <ul className="table-list">
                {!!data?.length ?
                    [...data]?.slice(0, slicer).map((data: any, i)=> (
                        <Fragment key={data.id +'-'+i}>
                            {data?.is_empty_message ?
                                <TableMessage>{data?.is_empty_message}</TableMessage>
                                :
                                <TableRow>
                                    <div className="table-flex">
                                        <div className="table-cell">{data.name}</div>
                                        <div className="table-cell">{emailViewMask(data.email)}</div>
                                        <div className="table-cell">{data.prize}</div>
                                    </div>
                                </TableRow>
                            }
                        </Fragment>
                    )) : <TableMessage>Розыгрыш еще не проведен</TableMessage>
                }
            </ul>
            {!!data?.length && moreBtn(slicer, data, openMore)}
        </TableStyles>
    )
}
