import styled, { css } from "styled-components";
import myColor from "../lib/styles/myColor";

/* 중앙 정렬되는 기본 div 박스 - width, height props 처리 */

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 0.25rem 0;
  color: ${myColor.mainWhite};

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}%;
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height}vh;
    `}
`;

const StyledBox = (props) => <StyledDiv {...props} />;

export default StyledBox;
