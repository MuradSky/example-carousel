import styled from "styled-components";
import {fluidTypo} from 'helpers/styled';

export const Stages = styled.div`
  position: relative;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  
  &:hover {
    .stage-img {
      transform: scale(1.1);
    }
  }
  
  .stage-inner {
    position: relative;
    background-position: left top;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    display: inline-block;

    svg {
      @media (max-width: 768px) {
		width: 100%;
      }
    }
  }
  
  .stage-numb {
    font-weight: 700;
    font-size: 160px;
    line-height: 70%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: var(--color-red);
    text-shadow: 2px 2px 0px #F5A623;
    margin-right: 14px;
   
    ${fluidTypo(768, 1920, 50, 160)};
    @media (max-width: 768px) {
      font-size: 100px;
    }
  }
  .stage-btn,
  .stage-title {
    font-weight: 700;
    font-size: 22px;
    line-height: 36px;
    text-transform: uppercase;
    ${fluidTypo(768, 1920, 16, 22)};
    @media (max-width: 1380px) {
      line-height: 110%;
      margin-bottom: 5px;
    }

    @media (min-width: 1025px) {
      span {
        display: block;
      }
      br {
        //display: none;
      }
    }
  }
  
  .stage-title {
    line-height: 100%;
  }


  .stage-btn {
    color: var(--color-red);
    text-decoration-line: underline;
  }
  
  .stage-text {
    font-size: 22px;
    line-height: 110%;
    text-transform: uppercase;
    ${fluidTypo(768, 1920, 16, 22)};

    @media (min-width: 1025px) {
      span {
        display: block;
      }
      br {
        //display: none;
      }
    }
    
  }

  .stage-img {
    position: absolute;
    transition: var(--transition);
    
    
    img {
      @media (max-width: 1440px) {
        width: 70%;
        object-fit: contain;
      }

      @media (max-width: 1440px) {
        width: initial;
      }
    }
  }
  
  .stage-arrow {
    position: absolute;
    @media (max-width: 1380px) {
      width: 10%;
    }
  }
`

export const StageOne = styled(Stages)`
  margin-bottom: 100px;
  @media (max-width: 1380px)  {
    margin-bottom: 4vw;
  }
  @media (max-width: 1024px)  {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    margin-bottom: 40px;
    order: 1;
  }
  
  .stage-inner {
    @media (max-width: 1380px) and (min-width: 1025px) {
      svg {
        width: 17vw;
      }
    }
  }
  
  .stage-arrow {
    top: 110%;
    @media (max-width: 1380px) {
      top: 95%;
      width: 8%;
      left: 7%;
    }

    @media (max-width: 1024px) {
      top: 90%;
      left: -2%;
    }
  }
  
  .stage-img {
    top: -40%;
    right: -20%;
    @media (max-width: 1680px) {
      width: 55%;
    }

    @media (max-width: 1380px) {
      top: -35%;
    }
    
    @media (max-width: 1024px) {
      top: -45%;
      right: -22%;
      width: 60%;
    }
    
    @media (max-width: 768px) {
      top: -30%;
      width: 80px;
      height: 80px;
      right: 0px;
    }
  }
  
`

export const StageTwo = styled(Stages)`
  @media (max-width: 1024px) {
    margin-top: -4vw;
  }
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 40px;
    order: 2;
  }
  .stage-img {
    top: -18%;
    right: -10%;
    width: 150px;

    @media (max-width: 1680px) {
      width: 33%;
    }

    @media (max-width: 1380px) {
      top: -15%;
      width: 40%;
      right: -10%;
    }

    @media (max-width: 1024px) {
      top: -20%;
      right: -10%;
      width: 30%;
    }

    @media (max-width: 768px) {
      top: -35%;
      right: -10px;
      width: 90px;
      height: 90px;
    }
  }
  .stage-inner {
    @media (max-width: 1380px) and (min-width: 1025px){
      svg {
        width: 25vw;
      }
    }
  }
  .stage-arrow {
    top: 110%;
    right: -10%;

    @media (max-width: 1380px) {
      width: 65%;
      top: 100%;
    }

    @media (max-width: 1024px) {
      top: 120%;
      right: 0%;
      width: 45%;
    }

    @media (max-width: 768px) {
      top: 110%;
      right: 8%;
      width: 60px;
    }
  }
`

export const StageThree = styled(Stages)`
  margin: 0 auto;
  width: auto;
 
  @media (max-width: 1024px) {
    margin-top: -4vw;
  }

  @media (max-width: 768px) {
    order: 3;
    margin: 0;
  }
  
  .stage-img {
    position: absolute;
    top: -25%;
    left: 5%;
	width: 43%;

    @media (max-width: 1680px) {
      width: 35%;
    }
    
    @media (max-width: 1380px) {
      top: 0;
      left: 0;
    }
    @media (max-width: 1024px) {
      width: 30%;
      top: -25%;
      left: 12%;
    }
    @media (max-width: 768px) {
      top: -25%;
      left: 0;
      width: 80px;
      height: 80px;
    }
  }
  .stage-inner {
    @media (max-width: 1380px) and (min-width: 1025px) {
      svg {
        width: 16vw;
      }
    }
  }
  .stage-arrow {
    top: 14%;
    right: -70%;
  
    @media (max-width: 1380px) {
      width: 55%;
      top: 10%;
      right: -70%;
    }

    @media (max-width: 1024px) {
      width: 45%;
      top: 35%;
      right: -45%;
    }

    @media (max-width: 768px) {
      width: 100px;
      top: 97%;
      right: auto;
      left: -5%;
      transform: rotate(90deg);
    }
  }
`

export const StageFour = styled(Stages)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    order: 4;
    margin-bottom: 50px;
    margin-top: -20px;
  }
  .stage-img {
    &:not(.stage-img_sm) {
      top: -35%;
      right: 17%;

      @media (max-width: 1680px) {
        width: 32%;
        top: -30%;
      }

      @media (max-width: 1380px) {
        width: 30%;
        top: -10%;
        right: 20%;
      }

      @media (max-width: 1024px) {
        width: 80px;
        height: 80px;
        right: 25%;
        top: -10%;
      }

      
    }
    
    &_sm {
      top: 70%;
      left: 0;
      @media (max-width: 1680px) {
        width: 15%;
      }

      @media (max-width: 1024px) {
        width: 40px;
        height: 40px;
        top: 80%;
      }
    }
  }
  .stage-inner {
    @media (max-width: 1380px) and (min-width: 1025px) {
      svg {
        width: 25vw;
      }
    }
  }
  .stage-arrow {
    top: -110%;
    left: 5%;

    @media (max-width: 1380px) {
      width: 14%;
      top: -65%;
      left: 0%;
    }

    @media (max-width: 1024px) {
      top: -38%;
      left: 13%;
      width: 12%;
    }

    @media (max-width: 768px) {
      top: 100%;
      left: auto;
      right: 10%;
      width: 80px;
    }
  }
`

export const StageFife = styled(Stages)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 135px;

  @media (max-width: 1380px) {
    margin-bottom: 3vw;
  }

  @media (max-width: 1024px) {
    margin-bottom: 5vw;
  }
  @media (max-width: 768px) {
    order: 5;
    justify-content: flex-start;
  }
  .stage-inner {
    @media (max-width: 1380px) and (min-width: 1025px) {
      svg {
        width: 17vw;
      }
    }
  }
  .stage-img {
    top: -30%;
    left: -15%;

    @media (max-width: 1680px) {
      width: 80%;
    }
    
    @media (max-width: 1380px) {
      top: -10%;
      left: -10%;
      width: 70%;
    }
    
    @media (max-width: 1024px) {
      top: -25px;
      width: 100px;
      height: 100px;
    }
    
    @media (max-width: 768px) {
      left: 4%;
      top: -25px;
      width: 100px;
      height: 100px;
    }
  }
`

export const Character = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  height: 400px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  img {
    position: absolute;
    top: 30%;
    left: 48%;
    width: 400px;
    min-width: 400px;
    height: 400px;
    transform: translate(-50%, -50%);
  }
  
  @media (max-width: 1380px) {
    max-width: 300px;
    height: 300px;
    
    img {
      width: 300px;
      min-width: 300px;
      height: 300px;
      left: 45%;
    }
  }

  @media (max-width: 1024px) {
    max-width: 256px;
    height: 256px;

    img {
      width: 256px;
      min-width: 256px;
      height: 256px;
      left: 45%;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto 60px;
  	position: relative;
    top: auto;
    left: auto;
    transform: none;
    img {
      position: static;
      width: initial;
      height: initial;
      min-width: initial;
      transform: none;
    }
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto -110px;
  position: relative;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 1380px) {
    //margin-bottom: 120px;
  }

  @media (max-width: 1024px) {
    margin: 0 auto -80px;
  }
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 357px;
    margin: 0 auto;
    overflow: hidden;
  }
`

export const BottomPattern = styled.div`
    
`

export const Inner = styled.div`
  padding-top: 110px;
  @media (max-width: 1380px) {
    padding-top: 80px;
  }
  @media (max-width: 1280px) {
    padding: 100px 40px 0;
  }
  
  @media (max-width: 1024px) {
    padding: 80px 20px 0;
  	margin: 0 auto; 
  }

  @media (max-width: 768px) {
    padding: 20px 15px 0;
  }

  @media (max-width: 500px) {
    padding: 80px 15px 0;
  }
`

export const DrawStageStyles = styled.div`
  background-color: var(--color-white);
  
`
