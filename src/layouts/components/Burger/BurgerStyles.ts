import styled from 'styled-components';

export const BurgerStyles = styled.button<TBool>`
  @media (min-width: 1241px) {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  
  margin-left: 10px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? "var(--color-white)" : "var(--color-smoke)"};
  border: 2px solid var(--color-smoke);
  
  @media (max-width: 1024px) {
    width: 32px;
    height: 32px;
  }
  
  &:hover:not(:active) {
    background-color: var(--color-white);
    box-shadow: var(--hover-btn-black-shadow);
  }
`

export const BurgerLines = styled.span<TBool>`
  width: 20px;
  height: 20px;
  position: relative;

  @media (max-width: 1024px) {
    width: 16px;
    height: 16px;
  }
  
  span {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 30px;
    background-color: ${props => props.isActive ? "transparent" : "#333"};
    transition: var(--transition);
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 30px;
      background-color: #333;
      transition: var(--transition);
    }

    &::before {
      transform: ${props => props.isActive ? "translateY(0px) rotate(45deg)" : "translateY(-5px)"};
    }

    &::after {
      width:  ${props => props.isActive ? "100%" : "80%"};
      transform: ${props => props.isActive ? "translateY(0px) rotate(-45deg)" : "translateY(5px)"};
    }
  }
`