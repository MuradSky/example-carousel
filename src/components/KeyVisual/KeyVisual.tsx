import React from 'react';
import {
	// KeyVisualBtn,
	KeyVisualImage,
	KeyVisualStyles,
} from './KeyVisualStyles';
// import {AuthButton} from 'components';
import kv1920 from 'assets/img/key-visual/kv-1920.jpg';
import kv834 from 'assets/img/key-visual/kv-834.jpg';
import kv750 from 'assets/img/key-visual/kv-750.jpg';

export const KeyVisual = () => {
	return (
		<>
			<KeyVisualStyles id="main">
				<KeyVisualImage>
					<picture>
						<source media="(max-width: 768px)" srcSet={kv750} />
						<source media="(max-width: 1024px)" srcSet={kv834} />
						<img useMap="#workmap" src={kv1920} alt="" width="1920" height="930"/>
					</picture>
					<a href="mailto:info@chickenpromo.ru" className="link">info@chickenpromo.ru</a>
				</KeyVisualImage>

				{/*<KeyVisualBtn>*/}
				{/*	<AuthButton variant="white" />*/}
				{/*</KeyVisualBtn>*/}
			</KeyVisualStyles>
		</>
	);
};
