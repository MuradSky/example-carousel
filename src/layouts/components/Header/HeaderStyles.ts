import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButton } from 'components/Button';

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 700;
  
  width: 100%;
  max-width: var(--body-width);
  margin: 0 auto;
`



export const HeaderWrap = styled.div`
  display: flex;
  padding: 0 50px 16px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  border-radius:  0px 0px 40px 40px;
  background-color: var(--color-white);
  position: relative;
  
  @media (max-width: 1240px) {
    flex-wrap: wrap;
    z-index: 30;
    padding-bottom: 20px;
  }
  
  @media (max-width: 1024px) {
    padding: 0 15px 10px;
    border-radius:  0px 0px 20px 20px;
  }
`

export const HeaderLogo = styled(Link)`
  width: 82px;
  height: 59px;
  display: block;

  @media (max-width: 1240px) {
    order: 1;
  }
  
  @media (max-width: 1024px) {
    width: 50px;
    height: 36px;
  }
  
`

export const HeaderButtons = styled.div`
  margin-left: auto;
  padding-top: 16px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 20;

  @media (max-width: 1240px) {
    order: 2;
  }
  
  ${StyledButton} {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
  @media (max-width: 1024px) {
    flex: auto;
    justify-content: flex-end;
    padding-top: 11px;
  }
`

export const HeaderAreaBtn = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: var(--color-black);
  padding: 10px 0 10px 20px;
  display: flex;
  align-items: center;
	

  svg {
    margin-left: 10px;

    @media (max-width: 1024px) {
      width: 20px;
      height: 20px;
    }

    @media (max-width: 1024px) {
      margin-left: 0;
    }
  }

  &:hover:not(:active) {
    opacity: .7;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 100%;
    padding: 0;
    margin: 0 0 0 8px;

    &:hover:not(:active) {
      border-color: #adadad;
    }
    
	.icon {
      width: 32px;
	  height: 32px;
      border: 1px solid #F7F6F5;
	  display: flex;
	  align-items: center;
      justify-content: center;
      border-radius: 50%;
	  margin-left: 8px;
    }
    span {
      //display: none;
    }
  }
`

export const HeaderLoginBtn = styled(StyledButton)`
  display: flex;
  align-items: center;
  
  span {
    @media (max-width: 1024px) {
      display: none;
    }
  }
  
  svg {
    
    @media (min-width: 1025px) {
      display: none;
    }

    @media (max-width: 1024px) {
      width: 20px;
      height: 20px;
    }
  }
  
  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 100%;
    
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
    justify-content: center;
  }
`
