import React, {useState} from "react";
import {PartnersStyles, PartnersWrap} from "./PartnersStyles";
import {PartnersCards} from "./PartnersCards";
import data from "./data.json";
import {PartnersLogos} from "./PartnersLogos";

export const Partners: React.FC = ()=> {
	const [partnersData] = useState(data)
	return (
        <PartnersStyles id="partners">
            <PartnersWrap>
                <div className="wrap-title">партнеры</div>
	            <PartnersCards data={partnersData.cards} />
	            <PartnersLogos data={partnersData.logos}/>
            </PartnersWrap>
        </PartnersStyles>
    )
}
