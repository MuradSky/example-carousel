import React, { Ref, useEffect, useState } from 'react';
import {
  CarouselHero,
  CarouselLevels,
  CarouselLevelsButton,
  CarouselLevelsWrap,
} from './CarouselStyles';
import hero_1 from 'assets/img/carousel/hero-1.png';
import hero_2 from 'assets/img/carousel/hero-2.png';
import hero_3 from 'assets/img/carousel/hero-3.png';
import hero_4 from 'assets/img/carousel/hero-4.png';
import hero_5 from 'assets/img/carousel/hero-5.png';
export const LEVELS = [1, 2, 3, 4, 5]

export const LevelButton: React.FC<{ levelButton: Ref<any> }> = ({
  levelButton,
}) => {
  const [level, setLevel] = useState<number | null>(null);
  const [img, setImg] = useState<string>(hero_5);

  useEffect(() => {
    switch (level) {
      case 1:
        setImg(hero_1);
        break;
      case 2:
        setImg(hero_2);
        break;
      case 3:
        setImg(hero_3);
        break;
      case 4:
        setImg(hero_4);
        break;
      case 5:
        setImg(hero_5);
        break;
      default:
    }
  }, [level]);

  return (
    <CarouselLevels>
      <CarouselLevelsWrap ref={levelButton}>
        <CarouselHero>
          <img src={img} alt="" width="648" height="382" loading="lazy" />
        </CarouselHero>
        {LEVELS.map((item: number) => (
          <CarouselLevelsButton
            children={`${item} уровень`}
            key={item}
            data-level={item}
            onClick={() => setLevel(item)}
          />
        ))}
      </CarouselLevelsWrap>
    </CarouselLevels>
  );
};
