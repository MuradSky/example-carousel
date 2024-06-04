import styled, {css} from 'styled-components';
import {StyledButton} from '../Button';
import {fluidTypo} from 'helpers/styled';

export const LevelUpTimerStyled = styled.div`
	color: #fff;
  	font-size: 16px;
  	line-height: 100%;
  	max-width: 200px;
  	text-align: center;
  	padding: 10px 20px;
  	border: 1px solid rgba(255, 255, 255, .2);
  	border-radius: 30px;
  	margin-right: 24px;
`

export const LevelUpStyled = styled.div<{isProfile?: boolean}>`
  margin-top: 40px;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 15px;
    margin-top: 30px;
  }
  
  .clear {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 16px;
    height: 16px;
    z-index: 10;
  }
  
  .wrap {
    display: flex;
    align-items: center;
	position: relative;
    background: linear-gradient(180deg, #333333 0%, rgba(28, 28, 28, 0.9) 100%);
    border-radius: 30px;
    padding: 30px;

    @media (max-width: 1300px) {
      padding: 20px;
    }
    @media (max-width: 1024px) {
      flex-wrap: wrap;
    }
    @media (max-width: 768px) {
      border-radius: 15px;
      display: block;
    }
    
  }

  .logo {
    display: flex;
    align-items: center;
    background-color: var(--color-white);
    margin-right: 32px;

   
    small {
      text-transform: initial;
    }
    span {
      margin-left: 12px;
      margin-right: 10px;

      @media (max-width: 1024px) {
        margin-left: 6px;
        margin-right: 6px;
      }
    }

    img {
      min-width: 24px;
      min-height: 24px;
      object-fit: contain;

      @media (max-width: 1024px) {
        min-width: 18px;
        min-height: 18px;
      }
    }
    
    picture {
      &:nth-of-type(2) {
        @media (max-width: 1024px) {
          width: 109px;
          height: 25px;
        }
      }
    }

    white-space: nowrap;
    font-weight: 500;
    line-height: 100%;
    padding: 16px 18px;
    text-transform: uppercase;
    color: var(--color-red);
    border-radius: 50px;
    @media (max-width: 1024px) {
      padding: 9px 7px;
      //display: ${props => props.isProfile ? 'none' : 'flex' };
    }

    @media (max-width: 768px) {
      justify-content: center;
      max-width: 305px;
      margin: ${props => props.isProfile ? '0 0 15px' : '0 auto 15px' };
    }
    
    ${fluidTypo(768, 1920, 16, 40)};

    @media (max-width: 1650px) {
      ${fluidTypo(768, 1920, 16, 30)};
    }

    @media (max-width: 1024px) {
      font-size: 26px;
    }
  }

  .content {
    display: flex;
    align-items: center;
    margin-right: auto;
    @media (max-width: 1300px) {
      display: block;
    }
  
    @media (max-width: 768px) {
      margin-right: 0;
      padding-right: 0;
    }
  }
  
  .title {
    font-weight: 500;
    line-height: 50px;
    text-transform: uppercase;
    color: var(--color-white);
    ${fluidTypo(768, 1920, 10, 32)};

    @media (max-width: 1680px) {
      ${fluidTypo(768, 1920, 16, 26)};
      line-height: 40px;
    }

    @media (max-width: 1300px) {
      ${fluidTypo(768, 1920, 16, 25)};
      line-height: 100%;
    }

    
    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 110%;
      text-align: center;
      margin-right: 0;
      margin-bottom: 16px;
    }
    span {
      line-height: 1;
      border: 1px solid var(--color-white);
      border-radius: 50px;
      display: inline-block;
      padding: 10px 18px;
      margin: 0 8px;

      @media (max-width: 1300px) {
        padding: 5px 12px;
      }

      @media (max-width: 768px) {
        padding: 0;
        border: 0;
        margin: 0;
      }
    }
  }

  .text {
    color: var(--color-white);
    line-height: 100%;
    max-width: 410px;
    margin: 0 20px;
    ${fluidTypo(768, 1920, 12, 24)};
    @media (max-width: 1680px) {
      max-width: 250px;
      ${fluidTypo(768, 1920, 12, 20)};
    }
    @media (max-width: 1300px) {
      max-width: initial;
    }

    @media (max-width: 1024px) {
      order: 2;
      margin-top: 10px;
      font-size: 20px;
      width: 70%;
    }

    @media (max-width: 768px) {
      text-align: center;
      margin-bottom: 16px;
      font-size: 14px;
      line-height: 100%;
      max-width: 100%;
      width: auto;
    }
  }

  ${StyledButton}.button-link:not(.form-btn) {
    font-weight: 500;
    white-space: nowrap;
    background-color: #FFDD2D;
    display: flex;
    align-items: center;
    color: var(--color-dark);
   
    ${props => !props.isProfile && css`
      //@media (max-width: 1601px) {
      //  margin-top: 20px;
      //  margin-left: auto;
      //}

      @media (max-width: 1161px) {
        margin-left: 20px;
      }

      @media (max-width: 1024px) {
        order: 5;
        margin-top: 0;
        margin-left: auto;
      }

      @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        font-size: 16px;
        line-height: 20px;
      }
    `}

    ${props => props.isProfile && css`
      @media (max-width: 1251px) {
		
      }
      @media (max-width: 1024px) {
        margin-left: 0;
        margin-top: 24px;
        width: 100%;
        max-width: 270px;
        justify-content: center;
        .logo {
          display: none !important;
        }
      }

      @media (max-width: 768px) {
        font-size: 16px;
		justify-content: center;
        margin-top: 16px;
        padding: 5px;
        max-width: initial;
        width: 40%;
      }

      @media (max-width: 530px) {
        width: 100%;
        margin-top: 0;
      }
    `}
    
    &:hover:not(:active) {
      background-color: #b99d00;
      box-shadow:  0px 4px 30px rgba(255, 221, 45, .5);
    }

    svg {
      width: 24px;
      height: 24px;
      margin-left: 10px;

      @media (max-width: 1024px) {
        width: 19px;
        height: 19px;
      }
      @media (max-width: 1024px) {
        width: 16px;
        height: 16px;
      }
    }
  }
  
  	 .form {
        margin-left: auto;
	 	width: 100%;
	   	max-width: 230px;
		position: relative;
		margin-right: 24px;
        @media (max-width: 1024px) {
          margin-left: 0;
          margin-top: 24px;
          max-width: 270px;
        }

       @media (max-width: 530px) {
         max-width: 100%;
         margin: 0 0 16px;
       }
	   
     	${StyledButton} {
	      position: absolute;
	      top: 0;
	      right: 0;
          width: 50px;
          height: 50px;
	      padding: 0;
          border-radius: 50px;
	      display: flex;
	      align-items: center;
	      justify-content: center;
	      
	      &:not(.is-valid) {
            border: 1px solid #A6A6A6;
            background: rgba(255, 255, 255, 0.3);
	      }

          @media (max-width: 768px) {
            width: 40px;
            height: 40px;
          }
	      
	      svg {
	        width: 28px;
	        height: 28px;
	        margin: 0;
	      }
        }
     }
  
  	 .form-input {
	   font-family: var(--accent-font);
       font-weight: 300;
       font-size: 20px;
       line-height: 25px;
	   height: 50px;
       background: rgba(255, 255, 255, 0.1);
       border: 1px solid rgba(235, 235, 235, 0.3);
       border-radius: 40px;
       color: #BBBBBB;
	   padding: 10px 60px 10px 20px;
	   width: 100%;

       @media (max-width: 768px) {
         height: 40px;
         font-size: 16px;
       }
	   
	   &.is-valid {
         background-color: #fff;
	     color: #1c1c1c;
	   }
	   &::placeholder {
         font-size: 20px;
         line-height: 25px;
	   }
     }
  
  	${props => props.isProfile && css`
	  	padding: 0;
	  	margin-bottom: 20px;
	  	.wrap {
		  //@media (max-width: 1024px) {
		  //  flex-direction: column;
		  //}

          @media (max-width: 768px) {
            flex-wrap: wrap;
            display: flex;
            justify-content: center;
          }
	    }
	  
    	.logo {
          font-size: 30px;
	      svg {
            width: 24px;
            height: 24px;
	      }
        }
	  	.content {
		  display: block;
          @media (max-width: 768px) {
            width: 100%;
            max-width: initial;
            margin-bottom: 16px;
          }
	    }
 	  	.title {
          line-height: 33px;
	      margin-right: 0;
          ${fluidTypo(768, 1920, 14, 26)};
          @media (max-width: 1024px) {
            font-size: 22px;
            line-height: 110%;
            margin-bottom: 15px;
          }
	      
		  span {
		    margin: 0 6px;
		    padding: 2px 8px;

            @media (max-width: 768px) {
              padding: 0;
              margin: 0 2px;
            }
		  }
	    }
	  	.text {
		  max-width: initial;
          font-size: 20px;
		  margin-left: 0;
		  margin-top: 10px;
          ${fluidTypo(768, 1920, 12, 20)};
          @media (max-width: 1024px) {
            font-size: 14px;
            margin: 0;
          }
        }
      	${StyledButton} {
          font-size: 24px;
          line-height: 30px;
          padding: 10px 24px;
          ${fluidTypo(768, 1920, 12, 24)};
        }
  	`}
`
