import styled, { css } from "styled-components";

/* 스타일링된 텍스트 박스 & Bold 처리된 텍스트 박스 */

const StyledP = styled.p`
  text-align: center;
  
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size}px;
    `}

  ${props =>
    props.margin && 
    css`
      margin: 1rem;  
    `}
`;

const BoldStyledP = styled(StyledP)`
  font-weight: bold;
`;

export const BoldTextBox = props => <BoldStyledP {...props} />;

const TextBox = (props) => <StyledP {...props} />;

export default TextBox;
