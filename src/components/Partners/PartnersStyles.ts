import styled from "styled-components";
import {StyledButton} from '../Button';
import {fluidTypo} from 'helpers/styled';
export const Cards = styled.div`


  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
  
  .body {
    flex: auto;
    padding: 38px 35px 35px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1100px) {
      padding: 20px;
    }
    ${StyledButton} {
      max-width: 177px;
      margin-top: auto;
      padding: 10px;
      text-align: center;
		
      @media (max-width: 600px) {
        max-width: 145px;
      }
    }
  }
	
  
  .slick-slider {
    margin-bottom: -40px;

    @media (max-width: 1500px) and (min-width: 0px) {
      margin-bottom: 20px;
    }

    @media (max-width: 600px) {
      margin-bottom: 40px;
    }
  }
  
  .slick-track {
    display: flex;
    align-items: stretch;
    .slick-slide {
      height: initial;
      & > div {
        height: 100%;
        .card {
          display: flex !important;
          height: 100%;
        }
      }
    }
  }
  
  .slick-list {
    margin: 0 -20px;
    padding-bottom: 40px;

    @media (max-width: 600px) {
      margin: 0 -10px;
    }
  }

  .slick-arrow {
    z-index: 400;
    color: var(--color-red);
    background-color: var(--color-white);

    width: 72px;
    height: 72px;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 1500px) and (min-width: 0px){
      top: 102%;
    }

    @media (max-width: 1024px) {
      width: 52px;
      height: 52px;
    }

    @media (max-width: 600px) {
      top: auto;
      bottom: -30px;
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
      left: -8%;
      @media (max-width: 1660px) {
        left: -6%;
      }

      @media (max-width: 1500px) and (min-width: 0px), (max-width: 900px) {
        left: 0;
      }

      @media (max-width: 600px) {
        left: calc(50vw - 80px);
      }
    }
    &.slick-next {
      right: -8%;
      @media (max-width: 1660px) {
        right: -6%;
      }

      @media (max-width: 1500px) and (min-width: 0px), (max-width: 900px) {
        right: 0;
      }

      @media (max-width: 600px) {
        right: calc(50vw - 80px);
      }
    }
  }
  
  .slick-slide {
    padding: 0 20px;

    @media (max-width: 600px) {
      padding: 0 10px;
    }
    
    .card {
      margin: 0;
      width: auto;
    }
  }
  
  .card {
    //width: calc(33.33333% - 40px);
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    border-radius: 30px;

    transition: box-shadow .3s linear;
    
    @media (max-width: 1100px) {
      margin: 0 10px;
      border-radius: 15px;
      width: calc(33.33333% - 20px);
    }

    @media (max-width: 600px) {
      flex-direction: row;
      width: initial;
      border-radius: 10px;
      margin: 0;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    
    &:hover:not(:active) {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    
    picture {
      display: block;
      @media (max-width: 600px) {
        min-width: 120px;
      }
    }
    img {
      display: block;
      height: 100%;
      border-radius: 30px;
      @media (max-width: 1100px) {
        border-radius: 15px;
      }
      @media (max-width: 600px) {
        border-radius: 10px;
        
      }
    }
    
    h3 {
      font-weight: 500;
      font-size: 32px;
      line-height: 120%;
      margin-bottom: 24px;
      ${fluidTypo(768, 1920, 14, 32)};
      @media (max-width: 1100px) {
		margin-bottom: 16px;
      }

      @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 12px;
      }
    }
    p {
      font-weight: 300;
      font-size: 20px;
      line-height: 135%;
      margin-bottom: 24px;
      ${fluidTypo(768, 1920, 10, 20)};
      @media (max-width: 1100px) {
        font-size: 16px;
        margin-bottom: 16px;
      }
      @media (max-width: 768px) {
        font-size: 12px;        
        margin-bottom: 12px;
      }
    }
  }
`

export const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  padding-top: 60px;
  @media (max-width: 1100px) {
    margin: -8px;
    padding-top: 30px;
  }
  .item {
    width: calc(25% - 30px);
    margin: 15px;
    background-color: var(--color-white);
    position: relative;
    //height: 190px;
    border-radius: 30px;
    transition: box-shadow .3s linear;
    
    &.col-3 {
      width: calc(33.33333% - 30px);
    }
    
    &:hover:not(:active) {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    
    img {
      border-radius: 30px;
    }
    
    @media (max-width: 1100px) {
      height: 110px;
      border-radius: 15px;
      width: calc(25% - 16px);
      margin: 8px;
      &.col-3 {
        width: calc(33.33333% - 16px);
      }

      img {
        margin: auto;
      }
    }

    @media (max-width: 768px) {
      width: calc(50% - 16px);
      &.col-3 {
        width: calc(50% - 16px);
      }
    }
  }
`


export const PartnersWrap = styled.div`
  	position: relative;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    z-index: 10;
    padding: 20px 0;

    @media (max-width: 1380px) {
      padding: 20px 40px;
    }

    @media (max-width: 1024px) {
      padding: 20px 30px;
    }

    @media (max-width: 768px) {
      padding: 20px 15px;
    }

    @media (max-width: 600px) {
      padding: 40px 15px;
    }

 
  
    .wrap-title {
      font-weight: 700;
      line-height: 36px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 56px;
      ${fluidTypo(768, 1920, 32, 54)};
      
      @media (max-width: 1024px) {
        margin-bottom: 30px;
      }

      @media (max-width: 768px) {
        font-size: 27px;
        margin-bottom: 20px;
      }
    }
`

export const PartnersStyles = styled.div`
  position: relative;
  margin: 60px 40px 40px;
  padding: 80px 0;
  position: relative;

  @media (max-width: 1440px) {
    padding: 60px 0;
  }

  @media (max-width: 1280px) {
    padding: 40px 0;
  }
  @media (max-width: 1024px) {
    margin: 60px 15px 20px;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #F7F6F5;
    border-radius: 50px;
    
    @media (max-width: 768px) {
      border-radius: 0;
    }
  }
  
  
  @media (max-width: 1024px) {
    padding: 30px 0;
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    margin: 40px 0;
  }


  @media (max-width: 600px) {
    padding: 0 0 20px;
  }
  
  .wrap-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    
    @media (max-width: 1440px) {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    img {
      object-fit: fill;
      
      @media (max-width: 1770px) {
        object-fit: cover;
      }
    }
  }
`
