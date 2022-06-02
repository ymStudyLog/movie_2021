import styled from "styled-components";

/* 화면 맨 위에 fixed된 header 부분*/
const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: transparent;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderWrapper = (props) => <StyledHeader {...props} />;

/* headerWrapper안에 들어갈 element가 배치될 div */
const BoxInsideStyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  
  @media (min-width: 480px) {
    width: 90vw;
    padding: 0.25rem;
  }
`;
export const Header = (props) => <BoxInsideStyledHeader {...props} />;

/* header 공간을 차지해서 body부분과 겹치지 않게 해주는 spacer */
const EmptySpace = styled.div`
  height: 5rem;
`;
export const Spacer = (props) => <EmptySpace {...props} />;

export default HeaderWrapper;
