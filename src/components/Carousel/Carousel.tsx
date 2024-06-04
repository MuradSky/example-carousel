import React, {useLayoutEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {Draggable} from 'gsap/Draggable';
import {LevelButton} from './LevelButton';
import {Circle} from './Circle';
import {
	CarouselDecor,
	CarouselStyles,
	CarouselText,
	CarouselTitle,
	CarouselView,
	NavButtons,
} from './CarouselStyles';
import {gsapContext} from './gsapContext/gsapContext';
import {imageLoader} from 'helpers/utils';
import data from "./data.json";

import {ReactComponent as Prev} from 'assets/svg/arrow-prev.svg';
import {ReactComponent as Next} from 'assets/svg/arrow-next.svg';
import {LevelUp} from '../LevelUp';

/*@ts-ignore*/
gsap.registerPlugin(window.InertiaPlugin, Draggable);

export const Carousel: React.FC = () => {
	const carouselRef = useRef(null);
	const nextRef = useRef(null);
	const prevRef = useRef(null);
	const levelButton = useRef(null);

	useLayoutEffect(() => {
		const gsapCtx = gsap.context(() =>
			gsapContext({
				carouselRef: carouselRef.current,
				prevRef: prevRef.current,
				nextRef: nextRef.current,
				levelButton: levelButton.current,
			}),
		);
		return () => gsapCtx.revert();
	});

	return (
		<CarouselStyles id="prizes">
			<CarouselDecor
				pos={1}
				children={
					<img
						src={imageLoader('carousel/decor-1.png')}
						alt=""
						loading="lazy"
					/>
				}
			/>
			<CarouselDecor
				pos={2}
				children={
					<img
						src={imageLoader('carousel/decor-2.png')}
						alt=""
						loading="lazy"
					/>
				}
			/>
			<CarouselDecor
				pos={3}
				children={
					<img
						src={imageLoader('carousel/decor-3.png')}
						alt=""
						loading="lazy"
					/>
				}
			/>
			<CarouselDecor
				pos={4}
				children={
					<img
						src={imageLoader('carousel/decor-4.png')}
						alt=""
						loading="lazy"
					/>
				}
			/>

			<CarouselTitle children={'Расти героя и выигрывай призы!'}/>
			<CarouselText
				children={'Призы будут доступны в зависимости от уровня твоего героя.'}
			/>
			<NavButtons>
				<button ref={prevRef} children={<Prev/>}/>
				<button ref={nextRef} children={<Next/>}/>
			</NavButtons>
			<CarouselView>
				<Circle carouselRef={carouselRef} data={data.carousel}/>
				<LevelButton levelButton={levelButton}/>
			</CarouselView>
			<LevelUp/>
		</CarouselStyles>
	);
};
