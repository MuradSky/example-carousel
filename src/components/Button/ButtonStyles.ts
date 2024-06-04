import styled, { css } from 'styled-components';
import {fluidTypo} from 'helpers/styled';

// @ts-ignore
export const StyledButton = styled.button<TButton>`
  font-family: var(--accent-font);
  font-weight: 500;
  line-height: 30px;
  color: var(--color-white);
  border-radius: 50px;
  padding: 10px 32px;
  transition: all .3s linear;
  position: relative;

  box-shadow: 0 0 0 0 #fbb32f;
  ${fluidTypo(768, 1920, 16, 24)};
  &::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 5px 5px var(--hover-btn-red);
  }
  
  &:active:not(:disabled)::after {
    box-shadow: 0 0 0 0 var(--hover-btn-red);
    opacity: 1;
    transition: 0s;
  }

  ${props => {
    //@ts-ignore
    return props.as === 'a' && css`
	    &::after {
	      content: none !important;
	    }
	  `}
  }};
  
  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 100%;
    padding: 9px 12px;
  }

  &:disabled {
    opacity: .7;
    cursor: no-drop;
  }
  
  ${props => props.variant?.includes("red") &&  css `
    background-color: var(--color-red);
    &:hover:not(:active):not(:disabled) {
      background-color: var(--hover-btn-red);
      box-shadow: var(--hover-btn-red-shadow);
    }
  `}

  ${props => props.variant?.includes("black") &&  css `
    background-color: var(--color-dark);
    &:hover:not(:active):not(:disabled) {
      background-color: var(--hover-btn-black);
      box-shadow: var(--hover-btn-black-shadow);
    }
    
    &::after {
      box-shadow: 0 0 5px 5px var(--hover-btn-black);
    }
    
    &:active:not(:disabled)::after {
      box-shadow: 0 0 0 0 var(--hover-btn-black);
    }
  `}
  
  ${props => props.variant?.includes("white") &&  css `
    background-color: ${props.isLoading ? "var(--color-red)" : "var(--color-white)"} ;
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.6), 0px 4px 30px rgba(228, 0, 43, 0.5);
    color: ${props.isLoading ? "transparent" : "var(--color-red)"};
    &:hover:not(:active):not(:disabled) {
      color: var(--color-white);
      background-color: var(--color-red);
      box-shadow:  0px 4px 30px rgba(255, 255, 255, 0.5);
    }
  `}
  
  ${props => props.variant?.includes("large") && css `
    font-size: 52px;
    line-height: 65px;
    padding: 20px 32px;
    @media (max-width: 1024px) {
      font-size: 26px;
      line-height: 33px;
      padding: 20px;
    }
  `}
  
  color: ${props => props.isLoading ? "transparent" : "var(--color-white)"};
  
  .pre-loader {
    opacity: ${props => props.isLoading ? 1 : 0};
    visibility: ${props => props.isLoading ? "visible" : "hidden"};
    width: 45px;
    height: 45px;

    stroke-dasharray: 47.12388980384689 47.12388980384689;
    stroke-width: 5px;
    stroke-linecap: round;
    stroke: #fff;

    position: absolute;
    top: 50%;
    left: 50%;
    z-index: ${props => props.isLoading ? "20" : "-1000"};
    transform: translate(-50%, -50%);
    transition: var(--transition);

    @media (max-width: 768px) {
      width: 28px;
      height: 28px;
    }
  }
`
