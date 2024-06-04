import styled, {css} from 'styled-components';
import {Modal} from '../Modal';
import {StyledButton} from '../../Button';

export const PromoModalStyles = styled(Modal)`
  background: transparent !important;
  
  ${StyledButton} {
    margin: 0 auto;
    display: block;

    @media (max-width: 1024px) {
      font-size: 24px;
      padding: 10px 32px;
    }
  }
`
export const ModalTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

export const ModalLogo = styled.div`
  width: 340px;
  height: 204px;
  margin: 0 auto 20px;
 
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
 `

export const ModalTinkoff = styled.div`
  background: #1C1C1C;
  border-radius: 20px;
  padding: 50px 80px;
  position: relative;
  @media (max-width: 768px) {
    padding: 22px;
    max-width: 345px;
    margin: 0 auto;
  }
  
  .y-1 {
    position: absolute;
    top: -40px;
    left: -10px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  .y-2 {
    position: absolute;
	top: 70px;
    right: -55px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  .y-3 {
    position: absolute;
    bottom: -50px;
    left: -50px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  ${ModalTitle} {
    color: #fff;
  }
`
export const ModalMoreTur = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 50px 80px;
  position: relative;
  @media (max-width: 768px) {
    padding: 22px;
    max-width: 345px;
    margin: 0 auto;
  }
  .decor {
    position: absolute;
    top: -32px;
    left: -60px;
    width: 160%;
    height: 122%;
    z-index: 1;
    @media (max-width: 768px) {
      display: none;
    }
  }
  ${ModalLogo},
  ${StyledButton} {
    position: relative;
    z-index: 10;
  }
  
  ${ModalTitle} {
    color: #000;
    position: relative;
    z-index: 10;
  }
`
export const ModalA101 = styled.div<{ isSecond?: boolean }>`
  background: #fff;
  border-radius: 20px;
  padding: 50px 80px;
  position: relative;
  
  ${props => props.isSecond && css`
  	padding: 45px;
  `}
  
  @media (max-width: 768px) {
    padding: 22px;
    max-width: 345px;
    margin: 0 auto;
  }

  .decor {
    position: absolute;
    top: -125px;
    left: -120px;
    width: 140%;
    height: 135%;
    z-index: 1;
    @media (max-width: 768px) {
      display: none;
    }
  }

  ${ModalLogo},
  ${StyledButton} {
    position: relative;
    z-index: 10;
  }

  ${ModalTitle} {
    color: #000;
    position: relative;
    z-index: 10;
  }
`
