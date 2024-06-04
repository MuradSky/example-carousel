import styled from "styled-components";
import {fluidTypo} from 'helpers/styled';
import {StyledButton} from '../../Button';

export const ChangeStyles = styled.div`
	margin-bottom: 24px;
  	margin-top: auto;
  
  	@media (max-width: 768px) {
	  margin-top: 32px;
    }
  
  	${StyledButton} {
      @media (max-width: 768px) {
        width: 100%;
        max-width: 140px;
      }
      svg {
        margin-right: 10px;
      }
      span {
        display: flex;
        align-items: center;
      }
    }
`

export const ProfileDataTitle = styled.div`
  font-weight: 700;
  line-height: 36px;
  text-transform: uppercase;
  margin-bottom: 40px;
  
  ${fluidTypo(768, 1920, 28, 40)};
  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  @media (max-width: 340px) {
    font-size: 30px;
    line-height: 26px;
  }
  
  
`

export const ProfileDataUser = styled.div`
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 32px;
  ${fluidTypo(768, 1920, 20, 32)};
  @media (max-width: 1340px) {
    font-size: 24px;
    line-height: 100%;
  }

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 220px;
    margin: 0;
    margin-right: 20px;
  }

  @media (max-width: 420px) {
    margin-bottom: 20px;
  }
  
  span {
    display: block;
  }
`

export const ProfileDataContact = styled.p`
  font-weight: 300;
  line-height: 28px;

  display: flex;
  align-items: center;
  ${fluidTypo(768, 1920, 12, 22)};
  @media (max-width: 1340px) {
    font-size: 16px;
    line-height: 20px;
  }
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    
    &:nth-of-type(2) {
      margin-right: 0;
      margin-left: 10px;
    }
  }
`

export const ProfileDataInfo = styled.div`
  position: relative;
    min-height: 200px;
    margin: 20px 0;

  @media (max-width: 1340px) {
    min-height: 175px;
  }

  @media (max-width: 1080px) {
    min-height: initial;
    width: 100%;
    max-width: 319px;
    margin: 0 0 0 auto;
  }

  @media (max-width: 780px) {
    margin: 20px 0 0;
  }

  .pre-loader {
    stroke-width: 5px;
    stroke-linecap: round;
    stroke: var(--color-red);
    stroke-dasharray: 47.12388980384689 47.12388980384689;
	width: 45px;
    height: 45px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const ProfileDataButton = styled.button`
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #A6A6A6;
  
  display: flex;
  align-items: center;
  ${fluidTypo(768, 1920, 12, 20)};
  @media (max-width: 1340px) {
    font-size: 14px;
    line-height: 18px;
  }
  
  svg {
    width: 24px;
    height: 24px;
    margin-left: 10px;
  }

  &:hover:not(:active) {
    color: #000;
  }
`

export const ProfileDataStyles = styled.div`
  width: 100%;
  max-width: 268px;
  border-right: 1px solid #EBEBEB;
  padding-right: 28px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1080px) {
    max-width: 100%;
    flex-wrap: wrap;
    border-right: 0;
    border-bottom: 1px solid #EBEBEB;
    padding-right: 0;
    padding-bottom: 20px;
  }
  
  .profile-contacts {
    @media (max-width: 1080px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media (max-width: 780px) {
      flex: auto;
    }

    @media (max-width: 689px) {
      display: block;
    }

    @media (max-width: 460px) {
      width: 100%;
      margin-right: 0;
      margin-top: 20px;
    }
  }
  
  .profile-buttons {
    
    @media (max-width: 1080px) {
      position: absolute;
      top: 25px;
      right: 25px;
      
      width: 50%;
      margin-left: auto;
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
  .mob-wrap {
    margin-bottom: auto;
    @media (max-width: 1080px) and (min-width: 769px){
      display: flex;
      padding-bottom: 20px;
    }
    @media (max-width: 768px) {
      .profile-contacts {
        margin: 16px 0;
      }
    }
  }
  .mb-10 {
    margin-bottom: 10px;
  }
`
