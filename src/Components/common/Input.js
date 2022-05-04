import styled, { css } from "styled-components";
import myColor from "../../lib/styles/myColor";

/*
 * 기본 스타일링된 회색 배경 인풋
 * props.white = background-color
 * props.size = size(width)
 * props.height = height
 */

const StyledInput = styled.input`
  text-align: left;
  background-color: ${myColor.mainGray[8]};
  color: ${myColor.mainWhite};
  font-size: 15px;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  & + & {
    margin-top: 1rem;
  }

  ${(props) =>
    props.white &&
    css`
      background-color: ${myColor.mainWhite};
    `}

  ${(props) =>
    props.size &&
    css`
      size: ${props.size};
    `}
    
    ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;

const Input = (props) => <StyledInput {...props} />;

export default Input;
