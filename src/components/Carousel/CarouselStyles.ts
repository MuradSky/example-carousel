import styled, {css} from "styled-components";
import {fluidTypo} from 'helpers/styled';

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px 0;
  position: relative;
  z-index: 200;

  button {
    width: 30px;
    height: 30px;
    color: var(--color-white);

    &:hover {
      opacity: .5;
    }
  }

  button svg {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 601px) {
    display: none;
  }
`

export const CarouselLevelsButton = styled.button`
  font-weight: 500;
  line-height: 100%;
  padding: 22px;
  width: 100%;
  max-width: 182px;
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid var(--color-white);
  box-shadow: inset 3px 3px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  ${fluidTypo(768, 1920, 12, 30)};
  &:hover:not(:active):not(.is-active) {
    background: rgba(255, 255, 255, 0.5);
    color: var(--color-red);
  }

  &.is-active {
    background-color: var(--color-white);
    color: var(--color-red);
  }

  &:not(:last-child) {
    margin-right: 32px;
    @media (max-width: 1024px) {
      margin-right: 12px
    }

    @media (max-width: 500px) {
      margin-right: 10px;
    }
  }

  &:hover:not(:active):not(.is-active) {
    background: rgba(255, 255, 255, 0.5);
    color: var(--color-red);
  }

  &.is-active {
    background: rgba(255, 255, 255, 1) !important;
    color: var(--color-red);
  }

  @media (max-width: 1680px) {
    padding: 15px;
  }

  @media (max-width: 1370px) {
    font-size: 25px;
    padding: 14px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 12px;
    border-width: 2px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 12px 7px;
    white-space: nowrap;
  }
`

export const CarouselLevelsWrap = styled.div`
  width: 100%;
  max-width: 1038px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 600px;
    padding: 0 15px;
  }

  @media (max-width: 374px) {
    overflow-y: hidden;
    overflow-x: auto;
  }
`

export const CarouselLevels = styled.div`
  background: linear-gradient(180deg, rgba(255, 105, 20, 0.6) 0%, #E4002B 100%);
  backdrop-filter: blur(5px);

  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;

  @media (max-width: 1680px) {
    height: 100px;
  }

  @media (max-width: 1024px) {
    height: 70px;
  }

  @media (max-width: 500px) {
    height: 60px;
  }
`

export const NavDot = styled.div`
  width: 240px;
  height: 340px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1680px) { 
    width: 200px;
    height: 300px;
  }

  @media (max-width: 1600px) {
    width: 175px;
    height: 275px;
  }

  @media (max-width: 1380px) {
    width: 145px;
    height: 245px;
  }

  @media (max-width: 1280px) {
    width: 120px;
    height: 166px;
  }

  @media (max-width: 1024px) {
    width: 145px;
    height: 245px;
  }


  @media (max-width: 768px) {
    width: 100px;
    height: 146px;
  }

  img {
    width: 100%;
    height: auto;
  }
`

export const NavDots = styled.div`
  display: flex;
  /* gap: 5px; */
  position: absolute;
  transition: var(--transition);
  z-index: 10;

  &.is-weak {
    opacity: .25;
  }
`

export const CarouselCircle = styled.div`
  width: 2700px;
  height: 2700px;
  position: absolute;
  top: 160%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transform-origin: center center;
  transition: var(--transition);
  display: grid;
  place-content: center;

  @media (max-width: 1680px) {
    width: 2200px;
    height: 2200px;
  }

  @media (max-width: 1600px) {
    width: 1920px;
    height: 1920px;
    top: 165%;
  }

  @media (max-width: 1380px) {
    width: 1600px;
    height: 1600px;
    top: 155%;
  }

  @media (max-width: 1280px) {
    width: 1280px;
    height: 1280px;
    top: 130%;
  }
  
  @media (max-width: 1024px) {
	width: 1500px;
    height: 1500px;
    top: 175%;
  }

  @media (max-width: 768px) {
    width: 1124px;
    height: 1124px;
    top: 162%;
  }
  
  svg {
    position: absolute;
    z-index: 100;
    opacity: .4;
    width: 100%;
    height: 100%;
  }
`

export const CarouselHero = styled.div`
  position: absolute;
  left: 50%;
  display: flex;
  flex-direction: row;
  bottom: 100%;
  transform: translateX(-50%);
  z-index: 100;
  @media (max-width: 1680px) {
    width: 32%;
    bottom: 95%;
  }

  @media (max-width: 1024px) {
    width: 35%;
  }

  @media (max-width: 768px) {
    bottom: 90%;
  }

  @media (max-width: 500px) {
    width: 80%;
    max-width: 300px;
  }

  img {
    width: 100%;
  }
`

export const CarouselView = styled.div`
  width: 100%;
  height: 1050px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -90px;
  @media (max-width: 1680px) {
    height: 820px;
    margin-top: 0;
  }

  @media (max-width: 1600px) {
    height: 680px;
  }

  @media (max-width: 1380px) {
    height: 600px;
  }


  @media (max-width: 1280px) {
    height: 570px;
  }

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: radial-gradient(100% 100% at 50% 100%, #F5BA23 32.43%, rgba(245, 166, 35, 0) 100%);
  }
`

export const CarouselTitle = styled.h2`
  line-height: 100%;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-white);
  margin-bottom: 24px;
  ${fluidTypo(768, 1929, 16, 80)};

  @media (max-width: 1600px) {
    ${fluidTypo(768, 1929, 32, 60)};
  }
  @media (max-width: 1024px) {
    padding: 0 15px;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

export const CarouselText = styled.p`
  line-height: 110%;
  text-align: center;
  color: var(--color-white);
  ${fluidTypo(768, 1929, 16, 32)};

  @media (max-width: 1600px) {
    ${fluidTypo(768, 1929, 16, 28)};
  }
  
  @media (max-width: 1024px) {
    font-size: 24px;
    padding: 0 15px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const CarouselDecor = styled.div<{ pos: number }>`
  position: absolute;

  @media (max-width: 1024px) {
    display: none !important;
  }

  ${props => props.pos === 1 && css`
    top: 10%;
    left: 0;
    right: 0;
    z-index: -1;
  `}

  ${props => props.pos === 2 && css`
    top: 55%;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    z-index: 100;
  `}

  ${props => props.pos === 3 && css`
    bottom: 15%;
    right: 5%;
    z-index: 120;

    width: 13vw;

    @media (max-width: 1370px) {
      display: none !important;
    }
  `}

  ${props => props.pos === 4 && css`
    bottom: 20%;
    left: 7%;
    z-index: 120;

    @media (max-width: 1370px) {
      display: none !important;
    }
  `}
`

export const CarouselStyles = styled.div`
  position: relative;


`
