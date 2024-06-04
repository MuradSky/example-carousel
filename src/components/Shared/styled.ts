import styled from 'styled-components';
import {fluidTypo} from 'helpers/styled';

export const VkShare = styled.span`
  font-family: var(--accent-font);
  font-weight: 500;
  line-height: 30px;
  color: var(--color-white);
  border-radius: 50px;
  padding: 10px 32px;
  transition: all .3s linear;
  position: relative;
  background-color: #1976D2;
  box-shadow: 0 0 0 0 #1976D2;
  ${fluidTypo(768, 1920, 16, 24)};

  display: inline-flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
  
  &::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 5px 5px #1976D2;
  }

  &:active:not(:disabled)::after {
    box-shadow: 0 0 0 0 #1976D2;
    opacity: 1;
    transition: 0s;
  }
`
