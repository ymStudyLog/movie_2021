import styled, { css } from "styled-components";
import myColor from "../lib/styles/myColor";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  color: ${myColor.mainWhite};
  outline: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  background: ${myColor.mainGray[7]};
  &:hover {
    background: ${myColor.mainGray[8]};
  }

  ${(props) =>
    props.red &&
    css`
      background: ${myColor.mainRed[0]};
      &:hover {
        background: ${myColor.mainRed[1]};
      }
    `}

      ${props =>
        props.size && 
        css`
            font-size: ${props.size}rem;
        `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
