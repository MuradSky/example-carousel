import styled from "styled-components";
import {StyledButton} from 'components/Button';
import {LoaderWrapper} from 'components/Loader/LoaderStyles';

export const AuthMessage = styled.div`
  	padding-top: 100px;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	button {
	  display: block;
	  margin-top: 70px;
    }
  
	h2 {
	  font-size: 60px;
	  text-align: center;
	}
`

export const ProfileLevelUp = styled.div`
	width: 100%;
  	max-width: 1280px;
  	margin: 0 auto;
`

export const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  
  padding: 40px;
  border-radius: 20px;
  background-color: var(--color-white); 
  
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  
  @media (max-width: 1340px) {
    padding: 25px;
  }

  @media (max-width: 1080px) {
    display: block;
    max-width: 100%;
  }

  @media (max-width: 660px) {
    padding: 20px;
  }
`

export const ProfileInformer = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;

  padding: 20px;
  background: #FFF8DF;
  border-radius: 20px;

  @media (max-width: 1340px) {
    font-size: 14px;
  }

  @media (max-width: 1080px) {
    display: flex;
    padding: 10px;
  }

  .flex {
    display: flex;
    align-items: center;
    svg {
      margin: 0 6px 0 0;
    }
  }
  
  span {
    display: block;
  }

  svg {
    min-width: 24px;
    width: 24px;
    height: 24px;
    margin-bottom: 6px;

    @media (max-width: 1080px) {
      min-width: 16px;
      height: 16px;
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
  
   ${StyledButton} {
     font-size: 20px;
     line-height: 25px;
     padding: 10px;
     width: 100%;
     display: block;
     margin-top: 10px;
   }
  
  .bottom {
    @media (max-width: 1080px) {
      ${StyledButton} {
        font-size: 14px;
        max-width: 140px;
        padding: 9px;
        line-height: 110%;
      }
    }
  }
`

export const ProfileStyles = styled.div`
  padding: 0 15px;
`

export const ProfileLoader = styled.div`
  	margin: 40px 0;
  	@media (max-width: 1080px) {
    	margin: 20px 0;
  	}
	${LoaderWrapper} {
      background-color: transparent;
	}
`
