import styled,{ css } from "styled-components";
import myColor from "../lib/styles/myColor";

const StyledInput = styled.input`
    text-align: left;
    background-color: ${myColor.mainWhite};
    font-size: 15px;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;

    &:focus{
        outline: none;
    }

    ${props=>
        props.gray &&
        css`
            background-color: ${myColor.mainGray[8]};
            color: ${myColor.mainWhite};
        `}

    ${props=>
        props.size &&
        css`
            size: ${props.size};
        `}
    
    ${props=>
        props.height &&
        css`
            height: ${props.height}px;
        `}
    
    ${props=>
        props.margin &&
        css`
            margin: 0.5rem 0;
        `}
    
`;

const Input = props => <StyledInput {...props} />;

export default Input;
