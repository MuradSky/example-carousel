import React, { useEffect, useState } from 'react';
import {
  BodyStyles,
  BodyWrap,
  ChooseHeroStyles,
  HeadStyles,
  HeroStyles,
} from './ChooseHeroStyles';
import { ChooseHeroTabs } from './ChooseHeroTabs';
import { HeroSlider } from './HeroSlider';
import data from './data.json';
import { imageLoader, isMobile, windowResize } from 'helpers/utils';
import arrow from "assets/img/choose-hero/arrow.svg";
import deskBG from "assets/img/choose-hero/hero-bg.svg";
import tabletBG from "assets/img/choose-hero/hero-bg2.svg";
import rect2 from "assets/img/choose-hero/rect-2.svg";
import rect from "assets/img/choose-hero/rect.svg";

const heroCharacter = (image: string) => {
    return (
        <HeroStyles>
	        <img src={imageLoader(image)} alt="" loading="lazy"/>
        </HeroStyles>
    )
}

const heroInfo = () => {
  return (
    <div className="head-info">
      <div className="head-info__pattern">
        <picture>
          <source
            type="image/svg+xml"
            srcSet={rect2}
            media="(max-width: 768px)"
          />
          <img src={rect} alt="" loading="lazy" />
        </picture>
      </div>
      <div className="head-info__text">
	      Выбрать героя можно в личном <br/>
	      кабинете - после выбора, вы будете участвовать
	      в розыгрыше продуктовых призов для своего героя!
      </div>
      <div className="head-info__dot"></div>
    </div>
  );
};

export const ChooseHero: React.FC = () => {
  const [choose, setChoose] = useState<string>('basketman');
  const [hero, setHero] = useState<THeroData>(data.prizes.basketman);
  const [hasMobile, setHasMobile] = useState<boolean>(isMobile);
  // const [hasPad, setHasPad] = useState<boolean>(isPad);
  useEffect(() => {
    // @ts-ignore
    const chooseHero = data.prizes[choose];

    setHero(chooseHero);
  }, [choose]);

    useEffect(()=> {
        windowResize(setHasMobile, 768)
    }, [setHasMobile])

    return (
        <ChooseHeroStyles>
            <HeadStyles>
                <div className="head-left">
                    <h2 className="head-title">Выбери своего героя!</h2>
                    {hasMobile && heroInfo()}
                    <ChooseHeroTabs choose={choose} onChange={setChoose} />
                </div>
                <div className="head-right">
                    {!hasMobile && heroInfo()}
                    <div className="head-arrow">
                        <img src={arrow} alt="" loading="lazy"/>
                    </div>
                </div>
            </HeadStyles>

            <BodyStyles deskBG={deskBG} tabletBG={tabletBG}>
                <BodyWrap>
                    <div className="body-left">
                        <div className="body-head">
                            <h3 className="body-head__name">{hero.character_name}</h3>
                            <div className="body-head__title">{hero.title}</div>
                            <div className="body-head__sub-title">{hero.sub_title}</div>
                        </div>
                        {hasMobile && heroCharacter(hero.character_image)}
                        <HeroSlider data={hero.gifts}/>
                    </div>
                    {!hasMobile && heroCharacter(hero.character_image)}
                </BodyWrap>
            </BodyStyles>
        </ChooseHeroStyles>
    )
}
