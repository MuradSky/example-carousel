import styled from 'styled-components';

export const LayoutStyles = styled.div`
  padding-top: 110px;
  font-size: 50px;
	
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  main {
    flex: auto;
  }
  
  @media (max-width: 768px) {
    padding-top: 80px;
  }
`;

// @media (max-width: 768px) {
//   padding-top: 80px;
// }
