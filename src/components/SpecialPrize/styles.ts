import styled from 'styled-components';
import {StyledButton} from '../Button';

export const BlockStyled = styled.div`
  	margin-bottom: 32px;
  
	.wrap {
      background-color: #f7f6f5;
      border-radius: 20px;
	  padding: 20px;
    }
  
  	.icon {
	  margin-bottom: 10px;
	  svg {
        width: 24px;
        height: 24px;
	  }
    }
  
  	.title {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
	  margin-bottom: 20px;
	  span {
	    display: block;
        color: #E4002B;
        &:first-child {
          margin-top: 5px;
        }
      }
    }
  
  	.text {
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 120%;
	  margin-bottom: 10px;
    }
  
  	${StyledButton} {
	  width: 100%;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
`


