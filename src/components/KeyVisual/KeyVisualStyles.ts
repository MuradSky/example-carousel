import styled from "styled-components";
import {StyledButton} from '../Button';
import {fluidTypo} from 'helpers/styled';

export const KeyVisualBtn = styled.div`
  position: absolute;
  bottom: 80px;
  left: 17vw;
  right: 0;

  display: flex;
  //justify-content: center;
  @media (max-width: 1590px) {
    left: 12vw;
  }

  @media (max-width: 1240px) {
    left: 80px;
  }
  
  @media (max-width: 1024px) {
    bottom: 30px;
  }

  @media (max-width: 768px) { 
    left: 0;
    bottom: -65px;
  	justify-content: center;
  	z-index: 100;
  }
  
  ${StyledButton} {
    text-align: center;
    padding: 25px 14px;
    color: var(--color-red);
    width: 100%;
    max-width: 295px;
    ${fluidTypo(768, 1920, 20, 32)};
    
    
    @media (max-width: 1590px) {
      padding: 17px 14px;
      max-width: 250px;
    }

    @media (max-width: 1240px) {
      padding: 14px;
      max-width: 200px;
    }
    
    @media (max-width: 1024px) {
      max-width: 140px;
      padding: 12px;
      font-size: 18px;
    }

    @media (max-width: 768px) {
      padding: 14px;
      font-size: 20px;
      line-height: 100%;
      max-width: 180px;

      background-color: var(--color-red);
      color: var(--color-white);
    }
  }
`

export const KeyVisualTitle = styled.div`
	text-align: center;
  	font-size: 80px;
  	${fluidTypo(768, 1920, 24, 80)};
  	line-height: 110%;
  	margin-top: 64px;
  	padding: 0 40px 80px;
  	@media (max-width: 1024px) {
    	padding: 0 20px 80px;
    }
`

export const KeyVisualImage = styled.div`
  	//height: 930px;

  	position: relative;
    img {
      	
    }
  
  	.link {
	  opacity: 0;
      position: absolute;
	  bottom: 23%;
	  right: 5.3%;
	  z-index: 1000;
      min-height: 4%;
	  max-height: 4%;
      display: block;
      width: 15.7%;
	  color: transparent;
      background-color: rgba(255, 255, 255, 1);
	  border-radius: 10px;
	  font-size: 0px;
	  &:hover:not(:active) {
	    opacity: .15;
	  }
	  
	  @media (max-width: 1024px) {
        right: 8.2%;
        width: 18.5%;
        bottom: 27%;
	  }

      @media (max-width: 768px) {
        right: 29%;
        width: 37%;
        bottom: 11%;
        max-height: 3%;
        min-height: 3%;
      }
    }
`

export const KeyVisualStyles = styled.div`
  margin-top: -60px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  
  @media (max-width: 1440px) and (min-width: 1241px) {
    
  }

  @media (max-width: 1240px) and (min-width: 1025px) {
    margin-top: -50px;
  }

  @media (max-width: 1024px) {
    margin-top: -80px;
  }

  @media (max-width: 769px) {
    margin-top: -40px;
    margin-bottom: 0;
  }
`
