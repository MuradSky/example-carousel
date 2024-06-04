import styled, {css} from 'styled-components';
import DatePicker from "react-date-picker";


export const Placeholder = styled.span<TBool>`
  display: block;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  color: #BBBBBB;
  
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  
  span {
    color: var(--color-red);
  }
`

export const LabelStyles = styled.label<{ disabled: boolean, isFocus: boolean }>`
  pointer-events: ${props => props.disabled ? "none" : "initial"};
  ${props => props.isFocus && css`
    .react-date-picker__inputGroup__divider,
    input {
      color: initial;
    }
    ${Placeholder} {
      display: none;
    }
    .react-date-picker__inputGroup__input--hasLeadingZero {
      margin-left: 0; 
  `}
`

export const TextAreaStyles = styled.textarea<TError & TTextField>`
  
`
export const Input = styled.div<TError >`
  position: relative;
  
  .icon-eye {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    z-index: 10;
    color: #bbb;
    
    &:hover {
      color: #1C1C1C;
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
    
  }
  ${TextAreaStyles},
  input {
    font-family: var(--accent-font);
    font-weight: 300;
    width: 100%;
    font-size: 20px;
    line-height: 25px;
    border-radius: 20px;
    border: 1px solid ${props => props.isError ? "#e4002b" : "#bbb"};
    padding: 12.5px 20px;
    transition: var(--transition);
    &:focus ~ ${Placeholder} {
      display: none;
    }

    &:focus:not(:disabled),
    &:hover:not(:disabled) {
      border-color: ${props => props.isError ? "#e4002b" : "var(--color-dark)"} ;
      box-shadow: 0 0 0 2px  ${props => props.isError ? "rgba(228, 0, 43, .1)" : "rgba(0, 0, 0, .1)"};
    }
    
    &:disabled {
      background: var(--color-smoke);
    }
  }
`

export const DatePickerStyles = styled(DatePicker)<TError>`
  width: 100%;
  
  input {
    border: 0 !important;
    border-radius: 0;
    box-shadow: none !important;
    background: transparent !important;
    transition: none !important;
    padding: 0;
    min-width: 12px;
    margin: 0 !important;
  }
  
  .react-date-picker__inputGroup__leadingZero {
    font-family: var(--accent-font);
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    margin: 0 !important;
  }
  
  .react-date-picker__wrapper {
    display: flex;
    align-items: flex-end;
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid ${props => props.isError ? "#e4002b" : "#bbb"} !important;
    transition: var(--transition);
    padding: 12.5px 20px;

    .react-date-picker__inputGroup__divider {
      padding: 0 1px;
    }
  }
`
export const ErrorField = styled.span<TError>`
  font-weight: 300;
  font-size: 18px;
  display: block;
  line-height: 110%;
  color: var(--color-red);
  transition: all .5s linear;
  max-height: ${props => props.isError ? "10vh" : "10vh"};
  overflow: ${props => props.isError ? "visible" : "hidden"};
  opacity: ${props => props.isError ? 1 : 0};
`

