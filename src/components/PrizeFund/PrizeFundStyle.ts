import styled, {css} from "styled-components";
import {fluidTypo} from 'helpers/styled';

export const KeyBanner = styled.div<{ bg?: string, bgM?: string }>`
  background-image: url(${props => props.bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 70%;
  margin-left: auto;
  margin-right: 100px;
  padding-right: 100px;
  margin-top: -50px;
  @media (max-width: 1600px) {
    margin-right: 0;
    width: 85%;
  }
  @media (max-width: 1024px) {
    margin-top: -30px;
    width: 93%;
    padding-right: 70px;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding-right: 10px;
    background-image: url(${props => props.bgM});
    background-position: right 10px;
    margin-bottom: 50px;
  }
  
  .title {
    margin-top: -40px;
    margin-left: -20px;

    @media (max-width: 1024px) {
      margin-top: -70px;
      margin-left: -10px;
    }
    
    @media (max-width: 600px) {
      max-width: 210px;
      margin-top: 0;
    }
  }
  .title-top {
    font-weight: 700;
    ${fluidTypo(768, 1920, 16, 40)};
    margin-bottom: 7px;
    text-transform: uppercase;
    line-height: 110%;
    @media (max-width: 600px) {
      font-size: 22px;
    }
  }
  .title-bottom {
    text-transform: uppercase;
    line-height: 110%;
    ${fluidTypo(768, 1920, 12, 26)};
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  
  .image {
    width: 264px;

    @media (max-width: 600px) {
      width: 100px;
    }
  }
`

export const PrizeImage = styled.div`
  transition: var(--transition);
  position: relative;
  z-index: 1;
  cursor: pointer;
  &:hover {
    z-index: 10;
    transform: scale(1.07);
  }
  
  img {
    height: auto;
    object-fit: contain;
  }
`

export const HeroBanner = styled.div<{ bg?: string, bgM?: string }>`
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 50%;
  padding:  0 0 100px 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 80px;

  @media (max-width: 1600px) {
    margin: 0;
  }
  
  @media (max-width: 1440px) {
    background-position: 0 30%;
  }

  @media (max-width: 1024px) {
    padding:  0 0 30px 50px;
    background-position: 0 70%;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    background-image: url(${props => props.bgM});
    background-position: 50% 85px;
    
    padding: 0 0 40px;
    margin: -60px 0 30px;
  }
  
  .title {
    font-weight: 700;
    line-height: 110%;
    text-transform: uppercase;
    ${fluidTypo(768, 1920, 16, 40)};
    @media (max-width: 1440px) {
      ${fluidTypo(768, 1920, 16, 30)};
    }

    @media (max-width: 600px) {
      font-size: 22px;
      text-align: center;
      padding: 0 23px;
      br {
        display: none;
      }
    }

    @media (max-width: 370px) {
      font-size: 18px;
    }
  }
  
  .image {
    margin: -5% 0 -4.5%;
    width: 40%;

    @media (max-width: 600px) {
      width: 280px;
      margin: 0 0 -20px;
    }
  }
`


export const ImageWrap = styled.div<{ top?: boolean, mb?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1594px;
  margin: 0 auto;
  ${props => props.mb && css`
    
    @media (max-width: 1024px) {
      margin-bottom: 80px;
      
    }
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  `}
  
  ${props => props.top && css`
      @media (max-width: 1024px) {
        flex-direction: column;
      }
    @media (max-width: 768px) {
      display: block;
    }

  `}
  ${props => !props.top && css`
      //margin-bottom: -100px;
    @media (max-width: 1024px) {
      margin-bottom: 0;
    }
    
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  `}
  
  ${PrizeImage} {
    ${props => props.top && css`
      width: 51.5%;
      flex-wrap: nowrap;
      @media (max-width: 1024px) {
        width: 70%;
        flex-wrap: wrap;
      }

      @media (max-width: 768px) {
        width: 100%;
      }
      
      &:nth-child(1) {
        margin-right: -3.5%;
        @media (max-width: 1024px) {
          margin-right: auto;
          margin-top: -30px;
          order: 2;
        }
        @media (max-width: 768px) {
          margin: 0;
          
        }
      }
      
      &:nth-child(2) {
        margin-top: -13%;
        margin-left: -3.5%;
        @media (max-width: 1024px) {
          margin-left: auto; 
          margin-top: 0;
          order: 1;
        }
        @media (max-width: 768px) {
          margin: 0 0 -10px;
        }
      }
      
      &:nth-child(3) {
        margin-top: -21.5%;
        margin-left: auto;
        width: 48%;
        z-index: 10;
        @media (max-width: 1024px) {
          margin-top: 0;
          width: 70%;
          order: 3;
        }

        @media (max-width: 768px) {
          margin-top: 24px;
          width: 100%;
        }
      }
    `}
    
    ${props => !props.top && css`
      width: 49.5%;

      @media (max-width: 1024px) {
        width: 51%;
      }
      
      @media (max-width: 600px) {
        width: 100%;
      }
      
      &:nth-child(1) {
        @media (max-width: 1024px) {
          width: 100%;
        }
        @media (max-width: 600px) {
          margin: 0;
        }
      }
      
      &:nth-child(2) {
        margin-left: -3.5%;
        @media (max-width: 1024px) {
          margin-top: 0;
        }
        @media (max-width: 600px) {
          margin: 0;
          
        }
      }

      &:nth-child(3) {
        margin-top: -4%;
        margin-right: -3%;
        @media (max-width: 1024px) {
          margin-top: 0;
          margin-right: 0;
        }

        @media (max-width: 600px) {
          margin: 0;
          width: 100%;
        }
      }

      &:nth-child(4) {
        width: 51%;
        margin-top: -14%;
        margin-left: -3.5%;
        @media (max-width: 1024px) {
          margin-top: -5%;
          width: 70%;
        }
        
        @media (max-width: 600px) {
          margin: 0;
          width: 100%;
        }
      }
    `}
  }
`

export const HeadTitle = styled.h3`
  line-height: 100%;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: inherit;
  ${fluidTypo(768, 1920, 16, 60)};
  @media (max-width: 1600px) {
    ${fluidTypo(768, 1929, 30, 40)};
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
`

export const HeadText = styled.p`
  line-height: 110%;
  color: inherit;

  ${fluidTypo(768, 1920, 16, 32)};
  @media (max-width: 1600px) {
    ${fluidTypo(768, 1929, 16, 28)};
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const PrizeHead = styled.div<{ mb1?: boolean, mb2?: boolean, isSecond?: boolean }>`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 600px) {
    text-align: center;
  }
  
  
  ${props => props.mb1 && css`
    margin-bottom: 60px;
    @media (max-width: 1024px) {
      margin-bottom: 32px;
    }
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  `}
  ${props => props.mb2 && css`
    margin-bottom: 150px;

    @media (max-width: 1024px) {
      margin-bottom: 120px;
    }

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 600px) {
      padding-top: 20px;
      margin-bottom: 30px;
    }
  `}
  
  ${props => props.isSecond && css`
    @media (min-width: 1025px) {
      max-width: 50%;
      margin: 0 0 60px;
      text-align: right;
    }
  `}
`

export const PrizeTitle = styled.h2`
  line-height: 100%;
  text-transform: uppercase;
  margin-bottom: 80px;
  text-align: center;
  color: inherit;
  ${fluidTypo(768, 1920, 16, 80)};

  @media (max-width: 1600px) {
    ${fluidTypo(768, 1920, 32, 60)};
  }

  @media (max-width: 1440px) {
    margin-bottom: 50px;
  }
  
  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 32px;
  }
`

export const PrizeWrap = styled.div`
  color: var(--color-white);
  @media (max-width: 1680px) {
    max-width: 1380px;
    margin: 0 auto;
  }
  @media (max-width: 1600px) {
    padding: 0 40px;
  }

  @media (max-width: 1540px) {
    max-width: 1200px;
  }

  @media (max-width: 1440px) {
    max-width: 1000px;
  }
  
  @media (max-width: 1024px) {
    max-width: 800px;
    padding: 0 25px;
  }
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  
`

export const SliderImage = styled.div`
  width: 100%;
  max-width: 280px;
  margin-bottom: 20px;
  transition: var(--transition);
  @media (max-width: 1024px) {
    margin-bottom: 12px;
  }
`

export const SliderText = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  text-align: center;

  @media (max-width: 1440px) {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`

export const SliderItem = styled.div`
  &:hover {
    ${SliderImage} {
      transform: scale(1.1);
    } 
  }
`


export const SliderBg = styled.div`
  position: absolute;
  top: -50%;
  left: -10%;
  width: 120%;
  z-index: -1;

  @media (max-width: 1440px) {
    top: -30%;
    left: -17%;
    width: 130%;
  }

  @media (max-width: 1024px) {
    top: -32%;
    left: -7%;
    width: 115%;
  }
  @media (max-width: 600px) {
    width: 140%;
    height: 240%;
    left: -10%;
    top: -90%;
  }
  @media (max-width: 420px) {
    height: 290%;
    top: -105%;
  }
`

export const SliderStyles = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1024px) {
    max-width: 800px;
  }
  
  &:hover {
    @media (max-width: 1500px) {
      .slick-arrow {
        opacity: 1;
      }
    }
  }
  
  .slick-arrow {
    z-index: 100;
    color: var(--color-red);
    background-color: var(--color-white);

    width: 72px;
    height: 72px;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    

    @media (max-width: 1500px) and (min-width: 1025px){
      opacity: 0;
    }

    @media (max-width: 1024px) {
      width: 52px;
      height: 52px;
    }

    @media (max-width: 600px) {
      top: auto;
      bottom: -70px;
      transform: none;
    }
    
    svg {
      @media (max-width: 1024px) {
        width: 20px;
        height: 20px;
      }
    }
    
    &:hover:not(:active) {
      opacity: .8;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    
    &::before {
      display: none;
    }
    
    &.slick-prev {
      left: -12%;
      @media (max-width: 1660px) {
        left: -6%;
      }

      @media (max-width: 1500px) and (min-width: 1025px), (max-width: 900px) {
        left: 0;
      }
      
      @media (max-width: 600px) {
        left: calc(50vw - 80px);
      }
    }
    &.slick-next {
      right: -12%;
      @media (max-width: 1660px) {
        right: -6%;
      }

      @media (max-width: 1500px) and (min-width: 1025px), (max-width: 900px) {
        right: 0;
      }
      
      @media (max-width: 600px) {
        right: calc(50vw - 80px);
      }
    }
  }
  
  .slick-list {
    margin: -10px -27.5px;
    padding: 10px 0;
    @media (max-width: 1024px) {
      margin: -10px -5px;
    }
  }
  .slick-slide {
    padding: 0 27.5px;
    @media (max-width: 1024px) {
      padding: 0 5px;
    }
  }
`

export const PrizeFundStyle = styled.div`
  padding: 70px 0 220px;
  overflow: hidden;
  @media (max-width: 1024px) {
    padding: 20px 0 140px;
  }

  @media (max-width: 768px) {
    padding: 40px 0 100px;
  }

  @media (max-width: 600px) {
    padding: 40px 0 140px;
  }

  .info-text {
    font-size: 20px;
    max-width: 1300px;
    margin: 140px auto 0;
    text-align: center;
    
    @media (max-width: 1024px) {
      margin: 100px auto 0;
    }

    @media (max-width: 600px) {
      margin: 140px auto 0;
      font-size: 16px;
    }
  }
`
