import styled, { keyframes  } from 'styled-components';
import { Field } from 'formik';

const ripple = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  20% {
    transform: translate(-50%, -50%) scale(.8);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
`



export const CheckboxBox = styled.span`
  border: 1px solid #BBBBBB;
  border-radius: 8px;
  height: 24px;
  width: 24px;
  min-width: 24px;
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  

  &::before {
    content: '';
    border-radius: 50%;
    background-color: rgba(228, 0, 43, .2);
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 50px;
    height: 50px;
  }
  
  svg {
    width: 18px;
    height: 18px;
    transform: scale(0);
    transition: var(--transition);
  }
`

export const CheckboxInput = styled(Field)`
  position: absolute;
  left: -10000%;
  visibility: hidden;
  z-index: -1000;
  &:checked {
    & ~ ${CheckboxBox} {
      background-color: var(--color-red);
      border-color: var(--color-red);
      svg {
        transform: scale(1);
      }
      &::before {
        animation: ${ripple} .3s ease-out;
      }
    }
  }
`

export const CheckboxText = styled.span`
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;
  color: var(--color-black);
  margin-left: 20px;
  
  a {
    color: var(--color-red);
    &:hover:not(:active) {
      text-decoration: underline;
      opacity: .7;
    }
  }
`
export const CheckboxContainer = styled.div`
display: flex;
`


export const CheckboxStyles = styled.label<{ disabled?: boolean }>`
  display: flex;
  cursor: pointer;
  position: relative;
  flex-wrap: wrap;
  pointer-events: ${props => props.disabled ? "none" : "initial"};
  ${CheckboxBox} {
    opacity: ${props => props.disabled ? .5 : 1};
  }
`

export const ErrorField = styled.span<TError>`
  font-weight: 300;
  font-size: 18px;
  display: block;
  margin: 10px 0;
  line-height: 110%;
  color: var(--color-red);
  transition: all .5s linear;
  max-height: ${props => props.isError ? "10vh" : "10vh"};
  overflow: ${props => props.isError ? "visible" : "hidden"};
  opacity: ${props => props.isError ? 1 : 0};
`
