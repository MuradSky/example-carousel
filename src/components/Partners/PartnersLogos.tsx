import React from "react";
import {Logos} from "./PartnersStyles";
import { imageLoader } from "helpers/utils";

interface TP {
	data: {
		id: number,
		link: string,
		img: string[],
		width: number,
		height: number
	}[]
}

export const PartnersLogos: React.FC<TP> = ({ data }) => {
    return (
        <Logos>
	        {data.map(item=> (
				<div key={item.id} className={`item${item.id > 4 ? ' col-3' : ''}`}>
					<picture>
						<source
							srcSet={imageLoader(item.img[1])}
							media="(max-width: 768px)"
							type="image/svg+xml"
						/>
						<img
							src={imageLoader(item.img[0])}
							alt=""
							loading="lazy"
							width={item.width}
							height={item.height}
						/>
					</picture>
				</div>
	        ))}
        </Logos>
    )
}
