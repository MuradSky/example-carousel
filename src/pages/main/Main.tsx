import React, {lazy, Suspense} from 'react';
import {Loader} from 'components';
import {MainStyles} from './MainStyles';

// const KeyVisual = lazy(()=> import('components/KeyVisual/KeyVisual')
// 	.then(({KeyVisual})=> ({ default: KeyVisual }))
// )
// const DrawStage = lazy(()=> import('components/DrawStage/DrawStage')
// 	.then(({DrawStage})=> ({ default: DrawStage }))
// )
// const ChooseHero = lazy(()=> import('components/ChooseHero/ChooseHero')
// 	.then(({ChooseHero})=> ({ default: ChooseHero }))
// )
const Carousel = lazy(()=> import('components/Carousel/Carousel')
	.then(({Carousel})=> ({ default: Carousel }))
)
// const PrizeFund = lazy(()=> import('components/PrizeFund/PrizeFund')
// 	.then(({PrizeFund})=> ({ default: PrizeFund }))
// )
// const Winners = lazy(()=> import('components/Winners/Winners')
// 	.then(({Winners})=> ({ default: Winners }))
// )
// const Partners = lazy(()=> import('components/Partners/Partners')
// 	.then(({Partners})=> ({ default: Partners }))
// )

export const Main = () => {
	return (
		<Suspense fallback={<Loader />}>
			<MainStyles className="content">
				{/*<KeyVisual />*/}
				{/*<DrawStage/>*/}
				{/*<ChooseHero/>*/}
				<Carousel />
				{/*<PrizeFund/>*/}
				{/*<Winners/>*/}
				{/*<Partners/>*/}
			</MainStyles>
		</Suspense>
	);
};
