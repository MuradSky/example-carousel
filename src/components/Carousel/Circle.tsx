import React from "react";
import {CarouselCircle, NavDot, NavDots} from "./CarouselStyles";
import {imageLoader} from "helpers/utils";
import {ReactComponent as SunFigure} from "assets/svg/sun-picture.svg";

interface TP {
	carouselRef: React.Ref<any>,
	data: {
		id: number,
		for_level: number,
		name: string,
		image: string,
		category: string
	}[]
}

export const Circle = ({
    carouselRef,
	data,
}: TP) => {
    return (
        <CarouselCircle ref={carouselRef}>
            {[...data, ...data].map((slide: any, i: number) => (
                <NavDots key={i} data-level={slide.for_level}>
                    <NavDot
                        children={(
                            <img
                                src={imageLoader(slide.image)}
                                alt={slide.name}
                                width="248" height="340"
                                loading="lazy"
                            />
                        )}
                    />
                </NavDots>
            ))}
            <SunFigure />
        </CarouselCircle>
    )
}
