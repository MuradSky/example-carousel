import styled, {css} from 'styled-components';
import ReactModal from 'react-modal';
import { StyledButton } from '../Button';
import { CheckboxStyles } from '../fields/Checkbox/CheckboxStyles';
// import { UserChecksList } from '../profile/UserChecks/UserChecksStyles';

export const PrizeImage = styled.div`
  	margin: 0 auto;
  	width: 100%;
  	max-width: 220px;
  	min-height: 178px;
  	margin: 23px 0;
  	img {
	  height: 100%;
    }
`

export const PrizeInformer = styled.div`
  font-size: 16px;
  line-height: 120%;
  padding-top: 20px;
  margin: 20px 0 40px;
  border-top: 1px solid #EBEBEB;
  
  ol, ul {
    margin-top: 10px;
    padding-left: 12px;
  }
  a {
    color: var(--color-red);
    &:hover {
      text-decoration: underline;
    }
  }
  strong {
    
    font-size: 20px;
    display: block;
    font-weight: 500;
    margin-bottom: 10px;
  }
`

export const PromoCode = styled.div`
  font-weight: 300;
  font-size: 30px;
  line-height: 120%;
  color: var(--color-red);
  text-align: center;
  padding: 12px;
  width: 100%;
  background: rgba(228, 0, 43, 0.05);
  border-radius: 20px;
  @media (max-width: 1024px) {
	font-size: 24px;    
  }
`



export const ModalTitle = styled.div<{ alignLeft?: boolean }>`
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 20px;
  
  ${props => !props.alignLeft && css`
  	text-align: center;
  `}
  
  &.promo-title {
    font-size: 20px;
  }
`;

export const ModalText = styled.p<{ mb40?: boolean }>`
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #737373;
  
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
  
  ${props => props.mb40 && css`
  	margin-bottom: 40px;
  `}


  
  &.prize-text {
    margin-bottom: 0;
  }

  &.text-success {
    color: #000;
  }

  span {
    display: block;
    strong {
      font-weight: 700;
    }
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const FormsModalSwitch = styled(ModalText)`
  color: #a6a6a6;
  border-top: 1px solid #ebebeb;
  padding-top: 12px;
  margin-top: 40px;

  button {
    font-weight: 500;
    color: #000;
    font-size: 20px;
    line-height: 120%;
  }
`;
export const FormsModalContent = styled.div<{ isSmall?: boolean }>`
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .timer {
    margin-top: 15px;
    font-size: 18px;
    line-height: 110%;
    max-width: 200px;
    text-align: center;
  }
  
  & form {
    width: 100%;
  }

  }
  @media (max-width: 600px) {
    padding: 32px 22px;
  }

  form {
    ${StyledButton} {
      &.btn-center {
        margin-top: 40px;
      }
    }
  }

  ${StyledButton} {
    @media (max-width: 1024px) {
      font-size: 24px;
      padding: 10px 22px;
    }

    @media (max-width: 600px) {
      width: 100%;
    }

    &.btn-center {
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }
  }

  ${CheckboxStyles} {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .modal-icon-email,
  .modal-icon {
    width: 105px;
    margin: 20px auto;

    display: flex;
    justify-content: center;
  }

  .modal-icon-email {
    width: 156px;
  }
  
  .btn-row {
    display: flex;
    align-items: center;
    
    ${StyledButton} {
      &:first-of-type {
        margin-right: 10px;
      }
    }
  }
`;


export const ModalClose = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  z-index: 100;
  color: var(--color-white);

  @media (max-width: 600px) {
    top: auto;
    bottom: -50px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ModalStyles = styled(ReactModal)`
  &.React-Modal-Wrap {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    background-color: #fff;
    position: relative;
    border-radius: 20px;
    @media (max-width: 600px) {
      max-width: 345px;
    }
    &.allPrizes {
      max-width: 1280px;
      width: 80%;
      padding: 60px;
      @media (max-width: 768px) {
        padding: 25px;
      }
      @media (max-width: 450px) {
        width: 100%;
        padding: 15px
      }
      & ${FormsModalContent} {
        max-width: 100%;
        @media (max-width: 450px) {
          padding: 0
        }
      }
      & .btn-center {
        width: 100%;
        max-width: 300px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
      }
    }
  }
`;


export const AppPrizesHead = styled.div`
  font-weight: 300;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 24px;
  @media (max-width: 1100px) {
    display: none;
  }
  div {
    &:first-of-type {
      min-width: 200px;
      margin-right: 40px;
      @media (max-width: 1440px) {
        margin-right: 25px;
        min-width: 170px;
        max-width: 170px;
      }
    }

    &:nth-of-type(2) {
      min-width: 450px;
      margin-right: 60px;

      @media (max-width: 1440px) {
        min-width: 350px;
        max-width: 350px;
        margin-right: 25px;
      }
    }
  }
`

export const ModalTableRow = styled.div`
  display: flex;
  border-bottom: 1px solid #EBEBEB;
  padding-bottom: 20px;
  margin-bottom: 20px;
  @media (max-width: 1100px) {
    display: block;
  }
`;

export const ModalTableCell = styled.div`
  	&:first-of-type {
	  	min-width: 200px;
	  	max-width: 200px;
	  	margin-right: 40px;

      	@media (max-width: 1440px) {
        	margin-right: 25px;
          	min-width: 170px;
          	max-width: 170px;
      	}

      	@media (max-width: 1100px) {
          min-width: initial;
          max-width: initial;
          margin-right: 0;
          margin-bottom: 20px;
        }
    }
	
  	&:nth-of-type(2) {
	    min-width: 450px;
	    max-width: 450px;
	    margin-right: 60px;
      	display: flex;
    	flex-direction: column;

      	@media (max-width: 1440px) {
          min-width: 350px;
	      max-width: 350px;
	      margin-right: 25px;
        }

      	@media (max-width: 1100px) {
          min-width: initial;
          max-width: initial;
	      margin-right: 0;
	      margin-bottom: 20px;
        }
    }
  
  	
 	.logo {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  
	  width: 100%;
      height: 138px;
      background: #F7F6F5;
      border-radius: 20px;
	  padding: 20px;
	  
	  @media (max-width: 1100px) {
        max-width: 220px;
        height: 178px;
	  }

      @media (max-width: 600px) {
        margin: 0 auto;
      }

      img {
	    height: 100%;
	  }
    }
  
  	.type {
      font-weight: 300;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #A6A6A6;
	  margin-bottom: 8px;

      @media (max-width: 1100px) {
        
      }
    }
  
  	.name {
      font-size: 22px;
      line-height: 100%;
      letter-spacing: 0.03em;
	  margin-bottom: 20px;
    }
  	
  	${PromoCode} {
      font-size: 20px;
	  width: auto;
      margin-top: 20px;
	  
	  margin-right: auto;
	  padding: 12px 40px;

      @media (max-width: 600px) {
        width: 100%;
        padding: 12px;
      }
    }
  
  	.description {
      font-weight: 300;
      font-size: 16px;
      line-height: 120%;
	  height: 100%;
	  align-items: center;
      padding: 10px;
	  margin: -10px;
      ol, ul {
        padding-left: 12px;
      }
	  a {
	    color: var(--color-red);
	    &:hover {
	      text-decoration: underline;
	    }
	  }
	  &.is-more {
	    max-height: 90px;
	    overflow: hidden;
		position: relative;

	    &:after {
	      content: "";
          position: absolute;
	      left: 0;
	      bottom: 0;
	      z-index: 100;
	      width: 100%;
	      height: 20px;
          background: linear-gradient(180deg, rgba(255,255,255,0.6474964985994398) 0%, rgba(255,255,255,1) 100%);
        }
	  }
    }
  
  	.label {
	  font-size: 14px;
      font-weight: 700;
		margin-bottom: 10px;
      @media (min-width: 1101px) {
        display: none;
      }
    }
  
  	.btn-more {
	  	display: block;
    	font-size: 16px;
	  	text-align: right;
      	margin-top: 20px;	
	  	margin-left: auto;
      	color: var(--color-red);
  	}
`;
