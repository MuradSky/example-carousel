import styled from "styled-components";
import {fluidTypo} from 'helpers/styled';

export const FAQTitle = styled.h1`
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  margin-bottom: 60px;

  ${fluidTypo(768, 1920, 32, 54)};
  @media (max-width: 1200px) {
    font-size: 40px;
    line-height: 120%;
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`

export const FAQStyle = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 20px;

  @media (max-width: 1340px) {
    padding: 0 40px 20px;
  }

  @media (max-width: 768px) {
    padding: 0 15px 15px;
  }

  .btn-more {
    display: block;
    margin: 40px auto 0;

    @media (max-width: 1024px) {
      font-size: 24px;
      line-height: 30px;
      padding: 10px 32px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  
  .accordion {
    border: 0;
  }
  .accordion__item {
    background-color: var(--color-white);
    border-radius: 40px;
    padding: 20px 40px;

    @media (max-width: 1024px) {
      padding: 20px;
    }

    @media (max-width: 660px) {
      padding: 15px;
      border-radius: 20px;
    }
    
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  
  .accordion__button {
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 0;
    &:before {
      content: none;
    }
    
    &[aria-expanded="true"] {
      .head-arrow {
        background-color: #000;
        color: #fff;
        
        svg {
          transform: rotate(-90deg);
        }
      }
    }
    
    &:hover {
      background-color: transparent;

      .head-prompt {
        opacity: 1;
      }

      .head-arrow {
        background-color: #000;
        color: #fff;
      }
    }
    
    .head-title {
      font-weight: 500;
      font-size: 34px;
      line-height: 43px;
      margin-right: 24px;
      width: 75%;
      ${fluidTypo(768, 1920, 18, 34)};
      @media (max-width: 1200px) {
        line-height: 30px;
      }

      @media (max-width: 660px) {
        font-size: 18px;
        line-height: 100%;
      }
    }

    .head-prompt {
      font-size: 24px;
      line-height: 30px;
      color: #A6A6A6;
      margin-left: auto;
      opacity: 0;
      transition: var(--transition);
      ${fluidTypo(768, 1920, 16, 24)};
      white-space: nowrap;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }

  .accordion__panel {
    padding: 20px 0 0;
  }
  
  .faq-body {
    font-weight: 300;
    font-size: 22px;
    line-height: 28px;
    ${fluidTypo(768, 1920, 14, 22)};
    @media (max-width: 1200px) {
      line-height: 23px;
    }

    @media (max-width: 660px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
  
  .head-arrow {
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: 1px solid #000;
    color: #000;
    
    margin-left: 40px;
    transition: var(--transition);

    @media (max-width: 1024px) {
      margin-left: auto;
     
    }

    @media (max-width: 660px) {
      width: 36px;
      height: 36px;
    }

    svg {
      width: 28px;
      height: 28px;
      transition: var(--transition);

      @media (max-width: 660px) {
        width: 20px;
        height: 20px;
      }
    }
  }
`
