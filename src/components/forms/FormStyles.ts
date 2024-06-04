import styled from 'styled-components';
import { Form } from 'formik';
import { StyledButton } from '../Button';
import {CheckboxStyles} from "../fields/Checkbox/CheckboxStyles";
import {LabelStyles} from "../fields/Label/LabelStyles";

export const FormStyles = styled(Form)`
  
  
  ${LabelStyles}:not(${CheckboxStyles}) {
    display: block;
    
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    
    input {
      width: 100%;
    }
  }
  
  ${StyledButton} {
    display: block;
    margin: 0 auto;
    
    &.button_margin_top {
      margin-top: 40px;
    }
  }
  
  .form-block {
    &:last-of-type {
      margin-bottom: 40px;
    }
    
    & ~ ${StyledButton} {
      margin-top: 40px;
    }
  }
  
  .form-block-title {
    font-size: 20px;
    font-weight: 500;
    line-height: 120%;
    color: #1c1c1c;
    padding: 10px 0;
    border-bottom: 1px solid #eBeBeB;
    margin-bottom: 8px;
  }
  .textarea {
    height: 120px;
    
    & ~ span {
      top: 24%;
    }
  }
  
  .block-row {
    display: flex;
    
    ${LabelStyles} {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`

export const FormCheckbox = styled.div`
  margin: 20px 0 40px;
  
  ${CheckboxStyles} {
    
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`
