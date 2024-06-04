import React from "react";
import Slider from "react-slick";
import {SliderSlide, SliderStyles} from "./ChooseHeroStyles";
import {imageLoader} from "helpers/utils";

import slidePatt from "assets/img/choose-hero/slide-patt.svg"
import { ReactComponent as ArrowPrev } from "assets/svg/arrow-prev.svg"
import { ReactComponent as ArrowNext } from "assets/svg/arrow-next.svg"

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

export const HeroSlider: React.FC<{ data: THeroGifts[] }> = ({ data }) => {
    const settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <Arrow arrow={<ArrowPrev />} />,
        nextArrow: <Arrow arrow={<ArrowNext />} />,
        responsive: [
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <SliderStyles>
            <Slider {...settings}>
                { data.map((gift: THeroGifts) => (
                    <SliderSlide key={gift.id}>
                        <img src={slidePatt} alt="" className="slide-pattern"/>
                        <div className="slide-level">{gift.level}</div>
                        <div className="slide-gift">
                            <img src={imageLoader(gift.img_path)} alt=""/>
                        </div>
                        <div className="slide-title"  dangerouslySetInnerHTML={{__html: gift.title}} />
                    </SliderSlide>
                ))}
            </Slider>
        </SliderStyles>
    )
}
