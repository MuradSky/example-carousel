import styled, {css} from 'styled-components';

export const LoaderWrapper = styled.div<{ isSm?: boolean }>`
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
	
  
  ${props => !props.isSm && css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5000;
    background: #fff;
    padding: 100px 0 200px;
    height: 100vh;
  `}
`;
export const LoaderText = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  line-height: normal;
  text-align: center;

  @media (max-width: 758px) {
    font-size: 20px;
  }
`

export const LoaderImage = styled.img`
  max-width: 350px;
  margin: 0 auto;
  height: auto;

  @media (max-width: 758px) {
    max-width: 280px;
    margin-bottom: 24px;
  }
`;
