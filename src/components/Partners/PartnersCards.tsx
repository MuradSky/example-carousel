import React from "react";
import {Cards} from "./PartnersStyles";
import {Button} from '../Button';
import {imageLoader} from 'helpers/utils';
import {ReactComponent as ArrowPrev} from 'assets/svg/arrow-prev.svg';
import {ReactComponent as ArrowNext} from 'assets/svg/arrow-next.svg';
import Slider from 'react-slick';

type TP = {
    data: {
	    id: number,
	    title: string,
		text: string
	    link: string,
	    img: string[]
    }[]
}

const Arrow: React.FC<TSlider> = ({ className, style, onClick, arrow }) => {
	return (
		<button
			className={className}
			style={{ ...style }}
			onClick={onClick}
			children={arrow}
		/>
	)
}

export const PartnersCards: React.FC<TP> = ({ data}) => {
	const settings = {
		slidesToShow: 3,
		prevArrow: <Arrow arrow={<ArrowPrev />} />,
		nextArrow: <Arrow arrow={<ArrowNext />} />,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	}
    return (
        <Cards>
	        <Slider {...settings}>
		        {data.map((partner: any)=> (
			        <div key={partner.id} className="card">
				        <picture>
					        <source srcSet={imageLoader(partner.img[1])} width={109} height={181} media="(max-width: 600px)" />
					        <img src={imageLoader(partner.img[0])} alt="" loading="lazy" width={400} height={240} />
				        </picture>
				        <div className="body">
					        <h3>{partner.title}</h3>
					        <p>{partner.text}</p>
					        <Button
						        type="link"
						        href={partner.link}
						        target="_blank"
						        variant="black"
					        >
						        Узнать больше
					        </Button>
				        </div>
			        </div>
		        ))}
	        </Slider>
        </Cards>
    )
}
