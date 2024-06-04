import {AccordionItem} from 'react-accessible-accordion';
import styled, {css} from 'styled-components';
import {fluidTypo} from 'helpers/styled';

export const PeriodCardsStyles = styled.div<{ isGrey?: boolean }>`
  	border: 1px solid #EBEBEB;
  	border-radius: 20px;
  	overflow: hidden;
  
  	${props => props.isGrey && css`
      .header {
        background-color: #F7F6F5;
      }
    `};
  
  	@media (max-width: 1024px) {
	  border: 0;
	  border-radius: 0;
    }
  
  	&:not(:last-child) {
      @media (min-width: 1025px) {
	  	margin-bottom: 10px;
      }

      @media (max-width: 1024px) {
        border-bottom: 1px solid #EBEBEB;
      }
    }
	.header {
      display: flex;
	  align-items: center;
      padding: 20px;
      @media (max-width: 1024px) {
        padding: 12px;
      }
	  @media (max-width: 400px) {
	    flex-wrap: wrap;
	  }

      &.is-tinkoff {
        background-color: #F7F6F5;
      }
	}
  
  	.tinkoff-title {
      display: flex;
	  align-items: center;
      margin-right: 32px;
	  
      @media (max-width: 650px) {
        flex-direction: column;
        align-items: flex-start;
      }
      @media (max-width: 400px) {
        margin-right: 0;
        margin-top: 10px;
        width: 100%;
        order: 3;
      }

      .logo {
        margin-right: 32px;

        @media (max-width: 1024px) {
          width: 125px;
        } 
        
        @media (max-width: 600px) {
          width: 100px;
          height: 26px;
          margin-right: 0;
        }
      }

      & ~ .level-status {
        margin-left: auto;
      }
	  strong {
        font-size: 22px;
        line-height: 28px;
        ${fluidTypo(768, 1920, 16, 22)};
	  }
  	}
  
  	.header-title {
      font-size: 22px;
      line-height: 28px;
	  ${fluidTypo(768, 1920, 16, 22)};

      margin-right: 20px;
      min-width: 230px;
      max-width: 230px;
      @media (max-width: 1024px) {
        max-width: 150px;
        min-width: 150px;
      }
      @media (max-width: 600px) {
        max-width: 100px;
        min-width: 100px;
      }
      @media (max-width: 374px) {
        width: 100%;
        max-width: initial;
        min-width: initial;
        margin-bottom: 6px;
      }
      @media (max-width: 1024px) {
        line-height: 20px;
      }

      @media (max-width: 600px) {
        font-size: 14px;
        line-height: 18px;
        margin-right: 10px;
      }

      @media (max-width: 374px) {
        font-size: 12px;
        line-height: 16px;
      }
    }
  
  	.header-date {
      font-weight: 300;
      line-height: 28px;
      display: flex;
	  align-items: center;
	  margin-right: 20px;
      ${fluidTypo(768, 1920, 16, 22)};
	  span {
	    &:last-child {
	      margin-left: 20px;
          @media (max-width: 600px) {
            margin-left: 4px;
          }
	    }
	  }

      @media (max-width: 1024px) {
        line-height: 20px;
      }

      @media (max-width: 600px) {
        font-size: 14px;
        line-height: 18px;
      }
      @media (max-width: 374px) {
        font-size: 12px;
        line-height: 16px;
      }
    }
  
  	.level-status {
      font-weight: 500;
      font-size: 22px;
      line-height: 28px;
	  margin-left: auto;
      display: flex;
	  align-items: center;
	  white-space: nowrap;
      ${fluidTypo(768, 1920, 16, 22)};
	  
      @media (max-width: 1024px) {
        line-height: 20px;
      }

      @media (max-width: 600px) {
        font-size: 14px;
        line-height: 18px;
      }
      @media (max-width: 374px) {
        font-size: 12px;
        line-height: 16px;
      }
	  svg {
        width: 24px;
        height: 24px;
        margin-left: 6px;
        @media (max-width: 600px) {
          width: 20px;
          height: 20px;
          margin-left: 3px;
        }

        @media (max-width: 374px) {
          width: 16px;
          height: 16px;
        }
	  }
    }
  
  	.checks {
      border-top: 1px solid #EBEBEB;
      padding: 20px;

      @media (max-width: 1024px) {
        padding: 12px;
      }

      @media (max-width: 600px) {
        margin-top: 12px;
        padding-top: 6px;
      }
    }
  
  	.checks-item {
      display: flex;
	  align-items: flex-start;
	  &:not(:last-of-type) {
	    margin-bottom: 12px;
	  }
      @media (max-width: 600px) {
        display: block;
      }
    } 
  
  	.prizes {
	  flex: auto;
    }
  
  	.prize-item {
      display: flex;
	  align-items: flex-start;
      
	  @media (max-width: 600px) {
        display: block;
      }
	  
	  &:not(:last-child) {
        margin-bottom: 12px;
        @media (max-width: 600px) {
          margin-bottom: 10px;
        }
	  }
    }
  
  	.prize-content {
	  flex: auto;
	  margin-right: 20px;
      @media (max-width: 600px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  
  	.prize-name {
      line-height: 100%;
      letter-spacing: 0.03em;
	  margin-bottom: 6px;
      ${fluidTypo(768, 1920, 16, 22)};

      @media (max-width: 1024px) {
        font-size: 16px;
      }

      @media (max-width: 600px) {
        margin-right: 0;
      }
    }
  	
  	.prize-type {
      font-weight: 300;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  
  	.prize-btn {
	  white-space: nowrap;
      font-size: 18px;
	  margin-left: auto;
      display: flex;
	  align-items: center;
	  line-height: 100%;
	  flex-direction: row-reverse;
      background-color: var(--color-white);
	  color: var(--color-red);
	  border: 1px solid currentColor;
	  padding: 6px 14px;
	  &:hover:not(:active) {
        color: var(--color-white);
	  }

      @media (max-width: 600px) {
        margin-left: 0;
      }

      svg {
	    width: 20px;
	    height: 20px;
	    margin-left: 6px;
	  }
    }
`

export const UserChecksList = styled(AccordionItem)`
  flex: auto;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  
  @media (min-width: 1025px) {
    display: flex;
  }
  
  .accordion__panel {
    flex: auto;
    padding: 0;
	
    &[hidden] {
      @media (min-width: 1025px) {
        display: block;
      }
    }

    @media (max-width: 1024px) {
      border: 1px solid #EBEBEB;
      border-radius: 0 0 20px 20px;
    }
  }


  .checks-date {
    @media (min-width: 1025px) {
      max-width: 195px;
      min-width: 195px;
      margin-right: 50px;
      padding: 20px 0;
    }

    @media (max-width: 1024px) {
      padding: 10px 0 0;
      cursor: pointer;
    }

    .accordion__button {
      padding: 0;
      background: transparent;
      border: 0;
      &::before {
        content: none;
      }
      
      &[aria-expanded="true"] .checks-date__numb {
        @media (max-width: 1024px) {
          border-radius: 20px 20px 0 0;
        }
      }
    }
    
    &__numb {
      font-weight: 400;
      font-size: 22px;
      line-height: 28px;
      color: #A6A6A6;
      background-color: #F8F8F8;
      border-radius: 20px;
      padding: 8px 20px;
      transition: var(--transition);
      display: flex;
      align-items: center;


      ${fluidTypo(768, 1920, 16, 16)};

      @media (max-width: 720px) {
        font-size: 16px;
        line-height: 20px;
      }

      &:hover {
        @media (max-width: 1024px) {
          background-color: #e7e7e7;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
      }

      &[aria-expanded="false"] {
        svg {
          transform: rotate(-180deg);
        }
      }

      span {
        @media (max-width: 1024px) {
          margin-right: 24px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
        margin-left: auto;
        transition: var(--transition);
        @media (min-width: 1025px) {
          display: none;
        }
      }
    }
  }

  .status {
    border-radius: 20px;
    padding: 8px 8px 8px 20px;
    font-size: 22px;
    line-height: 28px;

    max-width: 208px;
    min-width: 208px;

    margin-right: 42px;

    display: flex;
    align-items: center;

    ${fluidTypo(768, 1920, 16, 22)};

    @media (max-width: 1024px) {
      font-size: 16px;
      line-height: 20px;
      //margin-right: 18px;
      max-width: 125px;
      min-width: 125px;
      padding: 8px 8px 8px 16px;
    }

    @media (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 10px;
    } 
    
    .status-text {
      font-size: 16px;
      line-height: 20px;
      margin-left: auto;
      color: var( --color-green);
    }
    
    svg {
      width: 20px;
      height: 20px;
      margin-left: 7px;

      @media (max-width: 720px) {
        width: 20px;
        height: 20px;
      }
    }
    
    &_red {
      background-color: rgba(228, 0, 43, 0.05);
      color: var(--color-red);
    }

    &_green {
      background-color: #DFFAEC;
    }

    &_grey {
      background-color: #F8F8F8;
    }

    &_yellow {
      background-color: #FFF8DF;
    }
  }
`

export const UserChecksBody = styled.div`
    .list-top {
      display: flex;
      align-items: center;
      margin-bottom: 24px;

      @media (max-width: 1024px) {
        display: none;
      }

      .list-title {
        font-weight: 300;
        font-size: 22px;
        line-height: 28px;
      
        &:first-child {
          min-width: 195px;
          margin-right: 50px;
        }
      }
    }
`

export const UserChecksTop = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    margin-bottom: 24px;
  }

  @media (max-width: 720px) {
    flex-wrap: wrap;
    align-items: center;
  }
  
  .top-title {
    font-weight: 700;
    line-height: 36px;
    text-transform: uppercase;
    min-width: 190px;
    margin-right: 74px;
    ${fluidTypo(768, 1920, 32, 40)};
    
    @media (max-width: 1024px) {
      font-size: 32px;
      line-height: 36px;
      min-width: initial;
      margin-right: 30px;
      white-space: nowrap;
    }

    @media (max-width: 720px) {
      order: 1;
      margin-right: 20px;
    }

    @media (max-width: 370px) {
      font-size: 28px;
      line-height: 120%;
    }
    
    span {
      
    }  
  }
  
  button {
    margin-left: auto;
    white-space: nowrap;
    @media (max-width: 720px) {
      order: 2;
    }

    @media (max-width: 1024px) {
      font-size: 16px;
      padding: 8px 20px;
    }
  }
`

export const UserChecksStyles = styled.div`
    width: 100%;
   
    .accordion {
      border: 0;
    }
`
