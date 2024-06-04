import styled from "styled-components";
import {ProfileInformer} from "pages/profile/ProfileStyles";
import {Form} from "formik";

export const CharacterTitle = styled.div`
  font-weight: 400;
  font-size: 26px;
  line-height: 120%;
  text-align: center;
  margin-bottom: 10px;
`

export const CharacterInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 55px;
  ${ProfileInformer} {
    display: inline-flex;
    //align-items: center;
    padding: 10px;
    svg {
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
`

export const SelectedButton = styled.label`
  display: block;
  width: 100%;
  max-width: 300px;
  height: 160px;

  @media (max-width: 660px) {
    max-width: 220px;
    height: 110px;
  }
  
  .btn-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    
    border: 1px solid rgba(243, 16, 59, 0);
    border-radius: 8000px;
    position: relative;
    cursor: pointer;
    transition: var(--transition);
    padding: 10px;
    @media (max-width: 660px) {
      border-radius: 6285.71px;
    }
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: var(--color-smoke-1);
      border-radius: 8000px;
      @media (max-width: 660px) {
        border-radius: 6285.71px;
      }
    }
    
  }
  
  &:hover {
    .btn-wrap {
      border-color: rgba(243, 16, 59, .5);
    }
    
    .btn-check {
      opacity: .5;
    }
  }

  input {
    position: absolute;
    left: -1000px;
    opacity: 0;
    z-index: -10000;
    visibility: hidden;
    &:checked ~ {
      .btn-wrap {
        border-color: rgba(243, 16, 59, 1);
      }
      
      .btn-wrap .btn-check {
        opacity: 1;
      }
    }
  }
  
  &:nth-child(1) {
    .btn-name {
      @media (min-width: 361px) {
        right: -35px;
      }
      @media (max-width: 360px) {
        right: 0;
      }
    }
  }

  &:nth-child(2) {
    .btn-name {
      right: -42px;
      @media (max-width: 768px) {
        right: -22px;
      }

      @media (max-width: 660px) {
        right: -38px;
      }

      @media (max-width: 360px) {
        right: -3px;
      }
    }

  }

  &:nth-child(3) {
    .btn-name {
      right: -28px;

     

      @media (max-width: 360px) {
        right: 5px;
      }
    }

    .btn-img {
    }
  }

  &:nth-child(4) {
    .btn-name {
      right: 18px;
      @media (max-width: 768px) {
        right: 38px;
      }

      @media (max-width: 660px) {
        right: 6px;
      }

      @media (max-width: 360px) {
        right: 35px;
      }
    }

    .btn-img {
      @media (max-width: 768px) {
        left: 20px;
      }
    }
  }
  
  .btn-name {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    color: #E4002B;
    z-index: 100;
    position: absolute;
    bottom: 10px;

    @media (max-width: 660px) {
      font-size: 24px;
      line-height: 30px;
    }

    @media (max-width: 360px) {
      font-size: 20px;
      line-height: 26px;
    }
  }
  
  .btn-check {
    position: absolute;
    top: -25px;
    right: 25px;
    width: 56px;
    height: 56px;
    opacity: 0;
    transition: var(--transition);

    @media (max-width: 660px) {
      width: 44px;
      height: 44px;
    }
  }
  
  .btn-img {
    position: absolute;
    top: -20px;
    left: 0;
    
    img {
      @media (max-width: 660px) {
        width: 70%;
      }
    }
  }
`

export const FormStyles = styled(Form)`
  .form-wrap {
    display: flex;
    flex-wrap: wrap;
    margin: -66px -60px 50px;
    justify-content: center;
    @media (max-width: 1340px) {
      margin: -66px -30px 50px;
    }

    @media (max-width: 660px) {
        flex-direction: column;
        justify-content: flex-start;
        margin: -68px 0 30px;
    }
  }
  
  ${SelectedButton} {
    width: calc(50% - 120px);
    margin: 66px 60px 0;

    @media (max-width: 1340px) {
      width: calc(50% - 60px);
      margin: 66px 30px 0;
    }

    @media (max-width: 768px) {
      width: 100%;
      max-width: 250px;
    }

    @media (max-width: 660px) {
      margin: 60px 0 0;
      max-width: 220px;
    }
  }

  .form-button {
    @media (max-width: 660px) {
      display: flex;
      align-items: center;
    }
    
    button[type="button"] {
      display: flex;
      align-items: center;
      
      svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    
      @media (min-width: 661px) {
        display: none;
      }
    }
    
    button {
      display: block;
      text-align: center;
      margin: 0 auto;
      @media (max-width: 1024px) {
        font-size: 24px;
        padding: 10px 32px;
      }
      @media (max-width: 660px) {
        font-size: 16px;
        padding: 10px 16px;
        
      }

      &:not(.is-show) {
        opacity: 0;
        pointer-events: none;
      }
    }
    button[type="submit"] {
      @media (min-width: 661px) {
        display: block;
        text-align: center;
        margin: 0 auto;
      }

      @media (max-width: 660px) {
        flex: auto;
        margin-left: 20px;
      }
    }
  }
`


export const LevelTop = styled.div`
  font-size: 22px;
  line-height: 28px;
  color: var(--color-dark);

  display: flex;
  align-items: center;
  margin-bottom: 40px;

  width: 100%;
  
  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 23px;
  }
  @media (max-width: 660px) {
    order: 2;
  }
  
  @media (max-width: 370px) {
    font-size: 14px;
    line-height: 120%;
  }



  .top-item {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 180px;
    white-space: nowrap;

    @media (max-width: 660px) {
      max-width: initial;
    }
    
    &:first-child {
      margin-right: 40px;
      @media (max-width: 1200px) {
        margin-right: 30px;
      }
    }
  }
  
  .top-numb {
    background: rgba(228, 0, 43, 0.05);
    border-radius: 10px;
    padding: 2.5px 12px;
    color: var(--color-red);
    margin-left: 13px;
    letter-spacing: 0.06em;

    @media (max-width: 660px) {
      padding: 2.5px 8px;
      margin-left: 7px;
    }
  }
`

export const LevelArticle = styled.div`
  

  @media (min-width: 661px) {
    width: 45%;
  }

  @media (max-width: 660px) {
    order: 3;
	display: flex;
    align-items: center;
    flex-direction: row-reverse;
    overflow-y: hidden;
    overflow-x: auto;
  }
  
  .article-item {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      margin-right: 15px;
    }
    &.is-zero[data-level="true"] {
      .article-number {
        color: #fff;
        background: #737373;
      }
      .article-title {
        border-color: currentColor;
        color: #737373;
      }
    }
    
    &:not(:last-child) {
      margin-bottom: 15px;
      @media (max-width: 1200px) {
        margin-bottom: 14px;
      }

      @media (max-width: 768px) {
        margin-bottom: 0;
      }
    }
    
    
    &[data-level="true"]:not(.is-zero) {
      margin-left: -8px;
      @media (max-width: 1200px) {
        margin-left: -5px;
      }

      @media (max-width: 768px) {
        margin-left: 0;
      }
      
      .article-number {
        font-size: 30px;
        width: 68px;
        height: 68px;
        background-color: var(--color-red);
        @media (max-width: 1200px) {
          font-size: 20px;
          width: 58px;
          height: 58px;
        }

        @media (max-width: 768px) {
          min-width: 58px;
        }
      }
      .article-title {
        color: var(--color-red);
        border-color: var(--color-red);
        padding: 15px 24px;
        font-size: 30px;
        @media (max-width: 1200px) {
          font-size: 20px;
          line-height: 25px;
          padding: 12px 24px;
        }
      }
      
      & ~ [data-level]{
        .article-number {
          color: var(--color-red);
          background: #FDF2F4;
        }
        .article-title {
          border-color: currentColor;
        }
      }
    }
  }
  
  .article-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: var(--color-smoke);
    padding: 11px 24px;
    border: 1px solid var(--color-smoke);
    border-radius: 50px;
    margin-left: 10px;
    @media (max-width: 1200px) {
      font-size: 20px;
      line-height: 25px;
      padding: 10px 24px;
    }

    @media (max-width: 768px) {
      white-space: nowrap;
    }
  }
  
  .article-number {
    border-radius: 50px;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    background-color: var(--color-smoke);
    color: var(--color-white);

    @media (max-width: 1200px) {
      font-size: 20px;
      width: 46px;
      height: 46px;
    }

    @media (max-width: 768px) {
      min-width: 46px;
    }
  }
  
  button {
    display: inline-block;
    font-size: 44px;
    line-height: 120%;
    padding: 20px;
    margin-top: 25px;
    width: 100%;
    max-width: 344px;
    @media (max-width: 1200px) {
      font-size: 28px;
      line-height: 35px;
      max-width: 315px;
      padding: 12px;
    }

    @media (max-width: 420px) {
      max-width: 100%;
      margin-top: 14px;
    }
  }
`

export const LevelFigure = styled.div`
  background: #F7F6F5;
  border-radius: 1500px;
  @media (min-width: 661px) {
    width: 50%;
    margin-top: -60px;
  }

  @media (max-width: 660px) {
    width: 100%;
    order: 1;
    margin-top: 10px;
    margin-bottom: 50px;
  }
  
  .figure-wrap {
    width: 100%;
    height: 100vh;
    max-width: 412px;
    max-height: 500px;
    margin: 0 auto;
    
    position: relative;
    @media (max-width: 1200px) {
      max-width: 290px;
      max-height: 345px;
    }

    @media (max-width: 660px) {
      max-width: 255px;
      max-height: 270px;
    }
  }

  .figure-name {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-transform: uppercase;
    color: var(--color-red);
  
    position: absolute;
    top: 70px;
    left: -30px;
    z-index: 10;
    @media (max-width: 1200px) {
      font-size: 36px;
      line-height: 45px;
    }

    @media (max-width: 660px) {
      font-size: 32px;
      line-height: 40px;
      top: 20px;
    }

    @media (max-width: 370px) {
      font-size: 24px;
      line-height: 120%;
      left: -10px;
    }
  }
  
  .figure-text {
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    color: var(--color-white);
    position: absolute;
    top: 20px;
    right: -20%;
    z-index: 10;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;


    @media (max-width: 1200px) {
      font-size: 16px;
    }

    @media (max-width: 660px) {
      font-size: 12px;
      top: -10%;
      right: -8%;
    }

    @media (max-width: 370px) {
      right: 0%;
      font-size: 12px;
    }
    
    span {
      display: block;
      position: relative;
      z-index: 100;
      max-width: 220px;
      margin: 60px 40px 100px;
      @media (max-width: 1200px) {
        max-width: 153px;
        margin: 24px 20px 64px;
      }

      @media (max-width: 660px) {
        max-width: 116px;
        margin: 28px 18px 45px;
      }

      @media (max-width: 370px) {
        margin: 28px 8px 45px;
      }
    }
  }

  .figure-img {
    width: 400px;
    max-width: 400px;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
	z-index: 300;
    @media (max-width: 1200px) {
      bottom: -80px;
    }

    @media (max-width: 660px) {
      bottom: -30px;
      left: 50%;
      max-width: 320px;
      img {
      }
    }
  }
`

export const LevelWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 1340px) and (min-width: 661px) {
    margin-bottom: 30px;
  }
`

export const CharacterWrap = styled.div`
  padding-left: 40px;
  @media (max-width: 1080px) {
    padding-left: 0;
    padding-top: 24px;
  }
`

export const CharacterStyles = styled.div`
  flex: auto;
`
