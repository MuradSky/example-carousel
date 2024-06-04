import styled from "styled-components";
import {fluidTypo} from 'helpers/styled';
import {StyledButton} from '../../../components/Button';

export const FooterBottom = styled.div`
  border-radius: 60px 60px 0px 0px;
  background-color: var(--color-white);
  padding: 40px 0;

  @media (max-width: 1480px) {
    padding: 40px 20px;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
    border-radius: 30px 30px 0 0;
  }
  

  p.footer-text {
    a {
      color: var(--color-red);
      &:hover {
        text-decoration: underline;
      }
    }
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

export const FooterTop = styled.div`
  position: relative;
  color: var(--color-white);
  padding: 50px 0;
  border-radius: 40px;
  background-color: var(--color-dark);
  
  .age {
    width: 46px;
    height: 46px;
	margin-left: 20px;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    color: #737373;
    
    display: flex;
    align-items: center;
    justify-content: center;
	border-radius: 50%;
    border: 1px solid #737373;

    @media (max-width: 1024px) {
      width: 34px;
      height: 34px;
    }

    @media (max-width: 768px) {
      position: absolute;
      margin-left: 0;
      bottom: 25px;
      right: 25px;
    }
  }
  
  @media (max-width: 1480px) {
    padding: 50px 20px;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
    border-radius: 20px;
  }
  
  .top-head {
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    @media (max-width: 1200px) {
      margin-bottom: 20px;
    }
  }
  
  .top-button {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    
    border-radius: 50px;
    display: inline-flex;
    align-items: center;

    color: var(--color-white);
    padding: 7px 20px;
    border: 1px solid var(--color-white);
    margin-left: auto;

    @media (max-width: 1200px) {
      font-size: 14px;
      line-height: 18px;
      white-space: nowrap;
    }
    
    &:hover:not(:active) {
      color: var(--color-dark);
      background-color: var(--color-white);
    }
    
    svg {
      width: 24px;
      height: 24px;
      margin-left: 2px;
    }
  }
  
  .top-body {
    display: flex;
    align-items: flex-end;
    @media (max-width: 660px) {
      display: block;
    }
  }
  
  .top-regulations__link {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: var(--color-white);

    display: flex;
    align-items: center;
    padding: 3px 0;

    @media (max-width: 1200px) {
      font-size: 14px;
      line-height: 18px;
      padding: 2px 0;
    }
    
    &:not(:last-child) {
      margin-bottom: 5px;
      @media (max-width: 768px) {
        margin-bottom: 3px;
      }
    }
    
    &:hover:not(:active) {
      opacity: .5;
    }
    
    svg {
      width: 24px;
      height: 24px;
      margin-left: 5px;
      transform: rotate(45deg);
    }
  }
  
  .top-tel {
    margin-right: 40px;
    margin-left: auto;

    @media (max-width: 660px) {
      margin: 24px 0 20px;
    }
    
    .footer-subtitle {
      text-align: right;
      margin-bottom: 16px;
      
      @media (max-width: 660px) {
        text-align: left;
        margin-bottom: 2px;
      }
    }
  }
  
  .top-tel__link {
    font-weight: 700;
    line-height: 36px;
    text-transform: uppercase;
    color: var(--color-white);
    ${fluidTypo(768, 1920, 32, 54)};
    display: block;
	text-align: right;
    @media (max-width: 1200px) {
      line-height: 100%;
    }

    @media (max-width: 768px) {
      font-size: 27px;
      text-align: left;
    }
    
    &:hover:not(:active) {
      opacity: .5;
    }
  }
  
  .top-support {
    margin-bottom: -9px;
    @media (max-width: 660px) {
      margin-bottom: 0;
    }
    .footer-subtitle {
      text-align: right;
      margin-bottom: 8px;
      @media (max-width: 1200px) {
        margin-bottom: 18px;
      }
      @media (max-width: 1024px) {
        margin-bottom: 16px;
      }
      @media (max-width: 768px) {
        margin-bottom: 10px;
      }
      @media (max-width: 660px) {
        text-align: left;
      }
    }

    @media (max-width: 1200px) {
      margin-bottom: -3px;
    }

    ${StyledButton} {
      display: inline-block;
      background-color: var(--color-white);
      box-shadow: none !important;
      color: var(--color-dark);
      border: 1px solid #fff;
      @media (max-width: 1200px) {
        font-size: 14px;
        line-height: 18px;
      }

      &::after {
        box-shadow: 0 0 5px 5px var(--color-white);
      }

      &:active:not(:disabled)::after {
        box-shadow: 0 0 0 0 var(--color-white);
        opacity: 1;
        transition: 0s;
      }
      
      &:hover:not(:active) {
        box-shadow: none;
        background-color: var(--color-dark);
        color: var(--color-white);
      }
    }
  }
`

export const FooterStyles = styled.footer`
  margin-top: auto;
  padding: 32px 40px 0;

  @media (max-width: 768px) {
    padding: 30px 15px 0;
  }
  
  .footer-title {
    font-weight: 700;
    line-height: 36px;
    text-transform: uppercase;
	${fluidTypo(768, 1920, 32, 54)};

    @media (max-width: 1200px) {
      line-height: 110%;
    }

    @media (max-width: 768px) {
      font-size: 27px;
      margin-right: 10px;
    }

    @media (max-width: 370px) {
      font-size: 25px;
    }
  }

  .footer-subtitle {
    font-weight: 300;
    line-height: 43px;
    ${fluidTypo(768, 1920, 16, 34)};
    @media (max-width: 1200px) {
      line-height: 100%;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  
  .footer-text {
    font-weight: 300;
    font-size: 22px;
    line-height: 140%;
    color: #737373;
    &:not(:last-child) {
      margin-bottom: 6px;
    }
    ${fluidTypo(768, 1920, 14, 22)};
    @media (max-width: 1200px) {
      font-size: 14px;
      line-height: 140%;
    }
  }
  
  .footer-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`
