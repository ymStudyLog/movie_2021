import styled from 'styled-components';

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4rem auto;
  min-height: 460px;

  @media (min-width: 320px) and (max-width: 700px) {
    max-width: 90vw;
  }
  
  @media (min-width: 701px) and (max-width: 869px) {
    max-width: 620px;
    min-height: 500px;
  }

  @media (min-width: 870px) {
    max-width: 780px;
    min-height: 460px;
  }
`;

const BodyWrapper = (props) => <StyledBody {...props} />;

export default BodyWrapper; 

