import styled from "styled-components";
import {fluidTypo} from 'helpers/styled';
export const SearchStyles = styled.label`
  width: 100%;
  max-width: 430px;
  position: relative;
  display: block;

  @media (min-width: 1025px) {
    margin-left: auto;
  }
  
  input {
    width: 100%;
    border: 1px solid var(--color-smoke);
    border-radius: 20px;
    padding: 14px 54px 14px 20px;

    font-size: 20px;
    line-height: 21px;
    font-family: var(--accent-font);
    transition: var(--transition);
    &:hover,
    &:focus {
      border-color: rgba(0, 0, 0, 0.4);
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    @media (max-width: 1024px) {
      font-size: 16px;
      padding: 10px 54px 10px 20px;
    }
  }
  
  .search-icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    
    width: 28px;
    height: 28px;
    transition: var(--transition);

    @media (max-width: 1024px) {
      width: 16px;
      height: 16px;
    }
    
    &:hover:not(:active) {
      opacity: .7;
    }
  }
`

export const WinnersHead = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 95px;

  @media (max-width: 1024px) {
    display: block;
    margin-bottom: 38px;
  }
  
  .head-title {
    font-weight: 700;
    line-height: 36px;
    text-transform: uppercase;
    margin-right: 10%;
    ${fluidTypo(768, 1920, 32, 50)};
    @media (max-width: 1600px) {
      ${fluidTypo(768, 1920, 32, 40)};
      line-height: 110%;
    }
    @media (max-width: 1024px) {
      font-size: 40px;
      margin-right: 0;
      margin-bottom: 32px;
    }
  }
`

export const WeeklyStyles = styled.div`
  margin-bottom: 70px;
  @media (max-width: 1380px) {
    margin-bottom: 40px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 25px;
  }
  
  ul {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
   	overflow-y: hidden;
	overflow-x: auto;
    padding: 10px 25px;
    margin-left: -25px;

    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
    transition: var(--transition);
    background-color: rgba(228, 0, 43, 0);
    -webkit-background-clip: text;
    @media (max-width: 1024px) {
      margin-bottom: -5px;
    }
    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: inherit;
      border-radius: 10px;
      &:hover {
        background-color: rgba(228, 0, 43, 1);
        scrollbar-color: rgba(228, 0, 43, 1) transparent;
      }
    }

    &:hover {
      background-color: rgba(228, 0, 43, .1);
      scrollbar-color: rgba(228, 0, 43, .1) transparent;
    }
    
    @media (max-width: 1100px) {
      overflow: hidden;
      overflow-x: auto;
      padding: 7px 0;
    }

   
  }
  
  li {
    height: 51px;
    padding: 0 18px;
    flex: auto;
    position: relative;
    @media (max-width: 1024px) {
      height: 35px;
    }
    
    &:first-child {
      &:before {
        border-radius: 40px 0 0 40px;
      }
    }

    &:last-child {
      &:before {
        border-radius: 0 40px 40px 0;
      }
    }
    
    &.is-passed {
      .week-button {
        color:  #B3B3B3;
      }
    }
    
    &:before {
      content: "";
      background-color: #F7F6F5;
      backdrop-filter: blur(3px);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    
    &.is-active {
      .week-button {
        color: var(--color-white);
        &::before {
          opacity: 1;
        }
      }
      .week-end {
        margin-top: 0;
        opacity: 1;
      }
    }
  }
  
  .week-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 20px;
    line-height: 21px;
    color: var(--color-dark);
    position: relative;
    
    span {
      position: relative;
      z-index: 20;
      white-space: nowrap;
    }
    
    &::before {
      content: "";
      position: absolute;
      top: -15%;
      right: -35%;
      z-index: 10;
      width: 170%;
      height: 130%;
      border-radius: 40px;
      background-color: var(--color-red);
      opacity: 0;
      transition: var(--transition);
      @media (max-width: 1100px) {
        top: -10%;
        right: -22.5%;
        width: 140%;
        height: 120%;
      }
    }
    
    &:disabled {
      cursor: no-drop;
    }

    @media (max-width: 1380px) {
      font-size: 16px;
      line-height: 100%;
    }

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  
  .week-end {
    font-weight: 700;
    opacity: 0;
    margin-top: -16px;
    transition: var(--transition);
    color: var(--color-white);
    @media (max-width: 1024px) {
      margin-top: -14px;
    }
  }
`

export const TableMessage = styled.li`
  font-size: 40px;
  line-height: 100%;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
`

export const TableRow = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 30px 12px 32px;
  transition: var(--transition);
  border-bottom: 1px solid var(--color-smoke-1);
  &:hover {
    border-radius: 20px;
    border-bottom-color: transparent;
    background-color: var(--color-smoke-1);

    @media (max-width: 768px) {
      border-radius: 5px;
    }
  }

  @media (max-width: 1024px) {
    padding: 10px 14px 12px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    align-items: flex-start;
  }
  
  .table-cell {
    width: 100%;
    font-size: 22px;
    line-height: 28px;
    color: var(--color-dark);
    &:not(:last-child) {
      margin-right: 10px;
    }
    &:nth-of-type(1) {
      @media (min-width: 601px) {
        max-width: 300px;
      }
    }

    &:nth-of-type(2) {
      @media (min-width: 601px) {
        max-width: 300px;
        
      }
    }

    &:nth-of-type(3) {
      
    }
    
    @media (max-width: 1380px) {
      font-size: 18px;
      line-height: 100%;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }

    &:nth-last-child(2) {
      font-weight: 700;
    }
    
    &:not(.table-cell_first) {
      

      @media (max-width: 600px) {
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
    
    &_first {
      max-width: 100px;
      min-width: 100px;
      @media (max-width: 600px) {
        max-width: 65px;
        min-width: 65px;
      }
    }
  }
  
  .table-flex {
    flex: auto;
    margin-left: 24px;
    @media (min-width: 601px) {
      display: flex;
      margin-left: 0;
      align-items: center;
    }
  }
`

export const TableStyles = styled.div`
  .more-btn {
    display: flex;
    justify-content: center;
    margin: 40px auto 0;

    @media (max-width: 1024px) {
      margin: 20px auto 0;
    }
  }
`

export const WinnersWrap = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 86px 0 80px;
  @media (max-width: 1380px) {
    padding: 60px 40px;
  }

  @media (max-width: 1024px)  {
    padding: 40px 25px;
  }

  @media (max-width: 768px) {
    padding: 40px 15px 60px;
  }
`

export const WinnersStyles = styled.div`
  background-color: var(--color-white);
`
