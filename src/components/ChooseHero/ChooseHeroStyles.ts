import styled from "styled-components";
import {fluidTypo} from 'helpers/styled';

export const TabStyles = styled.ul`
    display: flex;
  
    align-items: center;  
    margin: 0 -25px;
  	@media (max-width: 1300px) {
	  margin: 0 -15px;
  	}
    @media (max-width: 1024px) {
      margin: 0 -10px;
    }

    @media (max-width: 768px) {
      order: 3;
      flex: auto;
      justify-content: center;
    }

    @media (max-width: 600px) {
      margin: 0;
      justify-content: initial;
    }
  
    li {
      margin: 0 25px;

      @media (max-width: 1300px) {
        margin: 0 15px;
      }
      
      @media (max-width: 1024px) {
        margin: 0 10px;
      }

      @media (max-width: 600px) {
        margin: 0;
        width: 25%;
      }
    }
  
    li button {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      &.is-active,
      &:focus:not(:active),
      &:hover:not(:active) {
        .tab-img {
          border-color: var(--color-white);
          box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.6), 0px 4px 30px rgba(228, 0, 43, 0.5);
          &::before {
            background: rgba(247, 246, 245, 1);
          }
        }
        .tab-name {
          opacity: 1;
          border-bottom-color: var(--color-white);
        }
      }
    }
  
    .tab-img {
        width: 112px;
        height: 112px;
        border-radius: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid transparent;  
        cursor: pointer;
      
        transition: var(--transition);
      	@media (max-width: 1600px) and (min-width: 601px) {
          width: 7vw;
          height: 7vw;
      	}

      	@media (max-width: 1280px) and (min-width: 601px) {
          width: 74.67px;
          height: 74.67px;
        }

        @media (max-width: 600px) {
          width: 68px;
          min-width: 68px;
          height: 68px;
        }
      
        &::before {
          content: "";
          display: block;
          width: 95%;
          height: 95%;
          background: rgba(247, 246, 245, 0.4);
          border-radius: 50%;
          transition: var(--transition);

          @media (max-width: 1280px) and (min-width: 601px) {
            width: 66.67px;
            height: 66.67px;
          }

          @media (max-width: 600px) {
            width: 60px;
            min-width: 60px;
            height: 60px;
          }
        }
      
        img {
          position: absolute;
          bottom: 3px;
          left: 0;
          right: 0;
          object-fit: contain;
          height: auto;
        }
    }
  
    .tab-name {
      display: block;
      font-weight: 700;
      font-size: 28px;
      line-height: 100%;
      text-transform: uppercase;
      border-bottom: 2px solid transparent;
      opacity: .5;
      color: var(--color-white);
      transition: var(--transition);
      margin-top: 6px;

      ${fluidTypo(768, 1920, 14, 28)};
      
      @media (max-width: 1280px) and (min-width: 601px) {
        font-size: 18px;
         margin-top: 12px;
      }

      @media (max-width: 600px) {
        font-size: 16px;
        margin-top: 12px;
      }

      @media (max-width: 350px) {
        font-size: 14px;
      }
    }
`

export const HeadStyles = styled.div`
  display: flex;
 
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 90px auto 40px;
  
  @media (max-width: 1600px) {
    max-width: 1100px;
  }
  
  @media (max-width: 1280px) {
    max-width: 960px;
    margin: 40px auto 20px;
  }

  @media (max-width: 1100px) {
    max-width: 750px;
  }
  
  @media (max-width: 1024px) {
	
  }

  @media (max-width: 768px) {
   	padding: 0 15px;
    margin: 40px auto 24px;
  }

  @media (max-width: 600px) {
    overflow: hidden;
  }
  
  .head-title {
    color: var(--color-white);
    line-height: 100%;
    text-transform: uppercase;
    margin-bottom: 52px;
    ${fluidTypo(768, 1920, 16, 80)};

    @media (max-width: 1600px) {
      ${fluidTypo(768, 1920, 32, 60)};
    }
    
    @media (max-width: 1024px) {
      flex: auto;
      margin-bottom: 20px;
    }

    @media (max-width: 768px) {
      font-size: 40px;
      order: 1;
      margin-bottom: 10px;
      width: 100%;
      text-align: center;
    }

    @media (max-width: 600px) {
      text-align: left;
    }
  }

  .head-left {
    @media (min-width: 1701px) {
      margin-right: 50px;
    }

    @media (max-width: 1700px) and (min-width: 1025px) {
      margin-right: 100px;
    }
    
    @media (max-width: 1024px) {
      display: flex;
      flex-wrap: wrap;
      width: 60%;
    }
    
    @media (max-width: 768px) {
      
      flex-direction: column;
      width: 100%;
    }
  }
  
  .head-right {
    @media (max-width: 1024px) {
      width: 32%;
      margin-left: auto;
    }
    
    @media (max-width: 768px) {
      display: none !important;
    }
  }
  
  .head-info {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 40px;
	margin-top: 40px;
    @media (max-width: 1919px) and  (min-width: 1025px) {
      padding-left: 2.085vw;
    }
    
    @media (max-width: 1024px) {
      padding: 0;
    }

    @media (max-width: 768px) {
      order: 2;
      width: initial;
      padding: 0;
     
      background-image: var(--rect-2);
      margin: 28px auto 45px;
    }
    
    &__pattern {
      position: absolute;
      top: -20%;
      left: -3%;
      z-index: -1;
      width: 115%;
      height: 130%;
      @media (max-width: 1440px) {
        left: -10%;
      }

      @media (max-width: 1024px) {
        width: 140%;
        height: 160%;
        left: -22%;
        top: -24%;
      }
      
      @media (max-width: 768px) {
        left: -24%;
        top: -32%;
        width: 148%;
        height: 182%;
      }
      
      img {
        object-fit: contain;
      }
    }
    
    &__text {
      line-height: 110%;
      max-width: 500px;
      color: var(--color-white);
      ${fluidTypo(768, 1920, 14, 32)};
      @media (max-width: 1919px) and  (min-width: 1025px) {
        max-width: 23.46vw;
      }
      
      @media (max-width: 768px) {
        font-size: 16px;
        max-width: 287px;
        padding: 0;
      }
    }
    
    &__dot {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      margin-right: 25%;
      width: 1.8vw;
      height: 1.8vw;
      border: 1.5px solid var(--color-white);
      box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6), 0px 4px 10px rgba(228, 0, 43, 0.5);
      border-radius: 50%;
      transform: translateY(13px);
      @media (max-width: 1024px) {
        display: none;
      }
      
      &::before {
        content: "";
        display: block;
        width: 1vw;
        height: 1vw;
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.6), 0px 4px 20px rgba(228, 0, 43, 0.5);
        background-color: var(--color-white);
        border-radius: 50%;
      }
    }
  }
  
  .head-arrow {
    @media (max-width: 1024px) {
      display: none;
    }
    img {
      width: 72%;
      object-fit: contain;
      height: auto;
    }
  }
`

export const SliderSlide = styled.div`
  position: relative;
  border-radius: 20px;
  background: var(--color-smoke-1);
  padding: 10px 10px 32px;
  height: 100%;
  
  @media (max-width: 1280px) and (min-width: 769px) {
    padding: 5.4px 5.4px 18px;
  }

  @media (max-width: 600px) {
    padding: 4.2px 4.2px 12px;
  }
  
  .slide-pattern {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 67px;
    height: 20px;

    @media (max-width: 1280px) and (min-width: 601px) {
      width: 36.18px;
      height: 10.8px;
    }

    @media (max-width: 600px) {
      width: 28.29px;
      height: 8.44px;
    }
  }
  
  .slide-level {
    position: absolute;
    top: 30px;
    left: 15px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.03em;
    color: var(--color-white);
    background-color: var(--color-red);
    border-radius: 10px;
    padding: 3px 12px 5px;
    ${fluidTypo(768, 1920, 10, 24)};
    @media (max-width: 1280px) and (min-width: 1025px) {
      padding: 2px 7px 3px;
    }

    @media (max-width: 1024px) {
      font-size: 12px;
      line-height: 15px;
      padding: 1.69px 6.46px 2.69px;
      border-radius: 5.4007px;
    }

    @media (max-width: 600px) {
      font-size: 10px;
      line-height: 13px;
      top: 12px;
      left: 6px;
      padding: 1.30px 5px 2px;
    }
  }
  
  .slide-gift {
    height: 183px;

    @media (max-width: 1680px) and (min-width: 1025px) {
		height: 130px;      
    }
    

    @media (max-width: 1024px) {
      height: 98.83px;
    }

    @media (max-width: 600px) {
      height: 77.49px;
    }
  
    img {
      object-fit: contain;
    }
  }
  
  .slide-title {
    font-weight: 500;
    line-height: 100%;
    text-align: center;
    padding: 10px 0 0;
    ${fluidTypo(768, 1920, 10, 22)};
    @media (max-width: 1280px) and (min-width: 1025px) {
      padding: 6px 0 0;
    }

    @media (max-width: 1024px) {
      font-size: 14px;
      padding: 6px 3px 0;
    }

    @media (max-width: 600px) {
      font-size: 12px;
      padding: 4px 2px 0;
    }
  }
`

export const SliderStyles = styled.div`
  width: 100%;
  @media (max-width: 1440px) {
	max-width: 650px;
  }
  .slick-list {
    margin: 0 -5px;

    @media (max-width: 600px) {
      margin: 0 -4px;
    }
  }
  
  .slick-track{
    display: flex !important;
    align-items: stretch;
    margin-left: 0;
  }
  
  .slick-slide {
    padding: 0 5px;
    height: initial;
    & > div {
      height: 100%;
    }

    @media (max-width: 600px) {
      padding: 0 4px;
    }
  }
  
  .slick-arrow {
    z-index: 100;
    color: var(--color-white);
    background-color: var(--color-black);
    width: 72px;
    height: 72px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 1380px) {
      width: 52px;
      height: 52px;
    }

    @media (max-width: 600px) {
      top: 115%;
      transform: none;
    }
    
    &:hover:not(:active) {
      opacity: .8;
    }
    
    svg {
      width: 32px;
      height: 32px;
      @media (max-width: 1380px) {
        width: 20px;
        height: 20px;
      }
    }
    
    &::before {
      content: none;
    }
    
    &.slick-next {
      @media (min-width: 1381px) {
        right: -7%;
      }
      
      @media (max-width: 1380px) and (min-width: 1025px) {
        right: 0;
      }
      
      @media (max-width: 1024px) and (min-width: 601px) {
        right: -4%;
      }

      @media (max-width: 600px) {
        right: calc(50vw - 80px);
      }
    }

    &.slick-prev {
      
      @media (min-width: 1381px) {
        left: -7%;
      }
      
      @media (max-width: 1380px) and (min-width: 1025px) {
        left: 0;
      }

      @media (max-width: 1024px) and (min-width: 601px) {
        left: -4%;
      }

      @media (max-width: 600px) {
        left: calc(50vw - 80px);
      }
    }
  }
`

export const HeroStyles = styled.div`
    width: 100%;
    max-width: 400px;
    position: relative;
	display: flex;
	align-items: center;
  	justify-content: center;
	margin-left: 80px;

  	@media (max-width: 1600px) {
      	margin-left: 24px;
	    max-width: 300px;
    }

  	img {
		width: 100%;
	  	height: 100%;
	  	object-fit: contain;
    }

    @media (max-width: 768px) {
      max-width: 200px;
      height: auto;
      margin-bottom: 20px;
      margin-left: 0;
    }

    @media (max-width: 450px) {
      max-width: 150px;
    }

    @media (max-width: 374px) {
      margin-bottom: 50px;
    }
  
`

export const BodyWrap = styled.div`
  display: flex;	
  align-items: stretch;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 1600px) {
    max-width: 1100px;
  }

  @media (max-width: 1280px) {
    max-width: 960px;
  }
  
  @media (max-width: 1100px) {
    max-width: 750px;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  
  .body-left {
    width: 100%;
    max-width: 800px;

    @media (max-width: 1280px) and (min-width: 768px) {
      max-width: 60%;
    }
    
    @media (max-width: 768px) {
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-right: 0;
    }
  }
  
  .body-head {
    margin-bottom: 23px;

    @media (max-width: 1024px) {
      margin-bottom: 16px;
    }

    @media (max-width: 768px) {
      margin-bottom: 0;
      width: 100%;
      margin-right: 7%;
      max-width: 165px;
    }

    @media (max-width: 420px) {
      margin-right: 8vw;
      max-width: 40vw;
    }

    @media (max-width: 420px) {
      margin-right: 2vw;
    }
    
    &__name {
      font-weight: 700;
      line-height: 100%;
      margin-bottom: 16px;
      text-transform: uppercase;
      ${fluidTypo(768, 1920, 16, 54)};
      @media (max-width: 1600px) {
        ${fluidTypo(768, 1920, 32, 44)};
      }
      @media (max-width: 1024px) {
        font-size: 40px;
        margin-bottom: 12px;
      }

      @media (max-width: 768px) {
        font-size: 27px;
        margin-bottom: 8px;
      }
    }
    
    &__title {
      font-weight: 300;
      line-height: 110%;
      margin-bottom: 50px;
      ${fluidTypo(768, 1920, 16, 32)};
      @media (max-width: 1600px) {
        ${fluidTypo(768, 1920, 16, 28)};
      }
      @media (max-width: 1680px) and (min-width: 1025px) {
        margin-bottom: 24px;
      }
      
      @media (max-width: 1024px) {
        font-size: 20px;
      }

      @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 32px;
      }
    }
    
    &__sub-title {
      line-height: 120%;
      ${fluidTypo(768, 1920, 14, 26)};
      @media (max-width: 1600px) {
        ${fluidTypo(768, 1920, 14, 20)};
      }
      @media (max-width: 1024px) {
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
`

export const BodyStyles = styled.div<{ deskBG: string, tabletBG: string }>`
  padding: 80px 0 150px; 
  margin-top: -20px;
  background-image: url(${props => props.deskBG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 1921px) {
    background-size: contain;
    padding: 150px 0 200px;
    margin-top: -60px;
  }
  
  @media (max-width: 1600px) {
    margin-top: -40px;
  }

  @media (max-width: 1440px) {
    background-size: 105% 105%;
  }

  @media (max-width: 1280px) {
    padding: 80px 0 100px;
    background-position: 80% 50%;
  }

  @media (max-width: 1100px) {
    background-size: 108% 108%;
    background-position: 50% 50%;
  }

  @media (max-width: 1024px) {
    background-image: url(${props => props.tabletBG});
    background-size: 120% 120%;
    background-position: 50% 25%;
    padding: 80px 0 150px;
  }

  @media (max-width: 768px) {
    background: #fff;
    padding: 20px 0 40px;
    margin-top: 0;
  }
  
  
  .body-bg {
    position: absolute;
    top: -35%;
    left: -20%;
    width: 140%;
    height: 120%;
    z-index: -1;

    img {
      @media (min-width: 1025px) {
        object-fit: contain;
      }
    }
    @media (max-width: 1680px) and  (min-width: 601px) {
      height: 200%;
      top: -35%;
    }
    @media (max-width: 1280px) and (min-width: 1025px) {
      height: 210%;
      top: -38%;
    }
    
    @media (max-width: 1024px) {
      width: 100%;
      left: 0;
      top: -30%;
      height: 167%;
    }

    @media (max-width: 768px) {
      top: -20%;
      height: 150%;
    }
    
    @media (max-width: 600px) {
      display: none !important;
    }
  }
`

export const ChooseHeroStyles = styled.div`
  overflow: hidden;
  padding-bottom: 50px;

  @media (max-width: 1280px) and (min-width: 1024px) {
    padding-bottom: 0;
  }

`
