import styled from "styled-components";

/* 
 * screen 맨 위에 위치 고정된 header 부분 
 */

const StyledHeader = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 5rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
`;

const HeaderWrapper = (props) => <StyledHeader {...props} />;

export default HeaderWrapper;
