import styled from "styled-components";

/*
 * 화면 맨 위에 fixed된 header부분
 */
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

/* header 공간을 차지해줄 빈 div */

const EmptySpace = styled.div`
  height: 5rem;
`;

export const Spacer = (props) => <EmptySpace {...props}/>;

const HeaderWrapper = (props) => <StyledHeader {...props} />;

export default HeaderWrapper;