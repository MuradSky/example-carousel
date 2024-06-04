import styled from 'styled-components';

export const NavStyles = styled.nav<TBool>`
  padding-left: 10.38%;
  padding-top: 27px;
  @media (max-width: 1440px) {
    padding-left: 5%;
  }

  @media (max-width: 1280px) {
    padding-left: 24px;
  }

  @media (max-width: 1240px) {
    order: 3;
    width: 100%;
  }
  
  @media (max-width: 1240px) {
    padding: ${props => props.isActive ?  "20px 15px 15px" : "0 15px"};
    max-height: ${props => props.isActive ? "100px" : 0};
    transition: var(--transition);
    opacity: ${props => props.isActive ? 1 : 0};
    overflow: ${props => props.isActive ? "hidden" : "hidden"};
  }

  @media (max-width: 700px) {
    max-height: ${props => props.isActive ? "100vh" : 0};
  }
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin: -5px -16px;

  @media (max-width: 1440px) {
    margin: -5px -10px;
  }

  @media (max-width: 1240px) {
    justify-content: space-between;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const NavItem = styled.li`
  margin: 0 16px;
  @media (max-width: 1440px) {
    margin: 0 10px;
  }

  @media (max-width: 700px) {
    margin: 0;
    padding: 12px 0;
    width: 100%;
    text-align: center;
    &:not(:last-child) {
      border-bottom: 1px solid #F8F8F8;
    }
  }
  button,
  a {
    font-family: "CeraCondensedCY", sans-serif;
    font-size: 20px;
    line-height: 25px;
    display: inline-block;
    padding: 5px 0;
    
    color: var(--color-black);

    &:hover:not(:active) {
      opacity: 0.5;
    }
  }
`
