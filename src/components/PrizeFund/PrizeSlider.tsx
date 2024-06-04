import {SliderImage, SliderItem, SliderStyles, SliderBg, SliderText} from "./PrizeFundStyle";
import Slider from "react-slick";
import data from "./data.json";
import {imageLoader} from "helpers/utils";
import React from "react";
import {ReactComponent as ArrowPrev} from "assets/svg/arrow-prev.svg";
import {ReactComponent as ArrowNext} from "assets/svg/arrow-next.svg";
import rect from "assets/img/prizes/bg.svg"
import rect2 from "assets/img/prizes/bg-2.svg"

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

export const PrizeSlider = () => {
    const settings = {
        slidesToShow: 4,
        prevArrow: <Arrow arrow={<ArrowPrev />} />,
        nextArrow: <Arrow arrow={<ArrowNext />} />,
        responsive: [
	        {
		        breakpoint: 1440,
		        settings: {
			        slidesToShow: 3,
		        }
	        },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    }
    return (
        <SliderStyles>
            <SliderBg>
                <picture>
                    <source type="image/svg+xml" srcSet={rect2} media="(max-width: 1024px)" />
                    <img src={rect} alt=""/>
                </picture>
            </SliderBg>
            <Slider {...settings}>
                {data.map((slide: any) => (
                  <SliderItem key={slide.id} >
                        <SliderImage>
                            <picture>
                                <img src={imageLoader(slide.img)} alt=""/>
                            </picture>
                        </SliderImage>
                        <SliderText children={slide.text} />
                  </SliderItem>
                ))}
            </Slider>
        </SliderStyles>
    )
}
