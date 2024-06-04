import React from "react";
import {
	ImageWrap,
	PrizeFundStyle,
	PrizeImage,
	PrizeTitle,
	PrizeWrap,
	PrizeHead,
	HeadText,
	HeadTitle,
	HeroBanner,
	KeyBanner
} from "./PrizeFundStyle";
import { imageLoader } from "helpers/utils"
import {PrizeSlider} from "./PrizeSlider";

const ResponsiveImage: React.FC<{ image: string }> = ({ image }) => {
    return (
        <picture>
            <source type="image/png" srcSet={imageLoader(`prizes/mobile/${image}`)} media="(max-width: 520px)" />
            <source type="image/png" srcSet={imageLoader(`prizes/tablet/${image}`)} media="(max-width: 1024px)" />
            <img src={imageLoader(`prizes/desktop/${image}`)} alt="" loading="lazy"/>
        </picture>
    )
}

export const PrizeFund: React.FC = () => {
    return (
        <PrizeFundStyle>
            <PrizeWrap>
                <PrizeTitle children={"Призовой фонд акции"} />
                <PrizeHead mb1>
                    <HeadTitle children={"главные призы"} />
                    <HeadText>
	                    Достигай высшего уровня и получи шанс выиграть <br/> главные призы.
                    </HeadText>
                </PrizeHead>
                <ImageWrap top mb>
                    <PrizeImage children={<ResponsiveImage image={"main-1.png"} />} />
                    <PrizeImage children={<ResponsiveImage image={"main-2.png"} />} />
                    <PrizeImage children={<ResponsiveImage image={"main-3.png"} />} />
                </ImageWrap>
                <PrizeHead mb1 isSecond>
                    <HeadTitle children={"ценные призы"} />
                    <HeadText children={"Призы будут доступны в зависимости от уровня твоего героя."} />
                </PrizeHead>
                <ImageWrap mb>
                    <PrizeImage children={<ResponsiveImage image={"val-1.png"} />} />
                    <PrizeImage children={<ResponsiveImage image={"val-2.png"} />} />
                    <PrizeImage children={<ResponsiveImage image={"val-3.png"} />} />
                    <PrizeImage children={<ResponsiveImage image={"val-4.png"} />} />
                </ImageWrap>
	            <div className="container">
		            <HeroBanner bg={imageLoader(`prizes/avatar-bg.svg`)} bgM={imageLoader(`prizes/avatar-bgm.svg`)}>
			            <div className="title">
				            Дойди среди первых до 5-го уровня и получи <br/>
				            коллекционную мягкую игрушку любимого героя!
			            </div>
			            <div className="image">
				            <img src={imageLoader(`prizes/hero.png`)} alt=""/>
			            </div>
		            </HeroBanner>
		            <KeyBanner bg={imageLoader(`prizes/key-bg.svg`)} bgM={imageLoader(`prizes/key-bgm.svg`)}>
			            <div className="image">
				            <img src={imageLoader(`prizes/key.png`)} alt=""/>
			            </div>
						<div className="title">
							<div className="title-top">Если не успел среди первых - поторопись!</div>
							<div className="title-bottom">тебя ждут пуллеры с изображением любимого героя и скидка на заказ</div>
						</div>
		            </KeyBanner>
	            </div>
                <PrizeHead mb2>
                    <HeadTitle children={"Гарантированные призы"} />
                    <HeadText children={"За каждый заказ от 400 рублей один из следующих призов"} />
                </PrizeHead>
                <PrizeSlider />
	            <div className="info-text">
		            Гарантированные призы могут повторяться, но повторное использование промокодов остается на усмотрение партнеров – дополнительные условия указаны в правилах Акции
	            </div>
            </PrizeWrap>
        </PrizeFundStyle>
    )
}
