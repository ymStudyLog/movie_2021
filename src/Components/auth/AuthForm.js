import { Link } from "react-router-dom";
import Button from "../common/Button";
import styled, { css } from "styled-components";
import myColor from "../../lib/styles/myColor";

const AuthFormContainer = styled.div`
  width: 70%;
`;

const AuthFormSample = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
`;

const Footer = styled.div`
  margin-top: 2.5rem;
  padding: 0 auto;
`;

const ErrorMessage = styled.div`
  color: orange;
  text-align: center;
  font-size: 0.725rem;
  margin-top: 0.8rem;
`;

const TextBox = styled.p`
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

const BoldTextBox = styled(TextBox)`
  font-weight: bold;
`;

/*
 * 기본 스타일링된 회색 배경 인풋
 * props.white = background-color
 * props.size = size(width)
 * props.height = height
 */

const Input = styled.input`
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
      height: ${props.height}rem;
    `}
`;

const AuthFormInput = styled(Input)`
  size: 40;
  height: 55px;
`;

/* ------------------------------------ */

/*
 * 회원가입/로그인 폼 컴포넌트
 * type을 props로 받아 회원가입/로그인 폼을 렌더링
 */

const typeMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = typeMap[type];
  return (
    <AuthFormContainer>
      <AuthFormSample>
        <BoldTextBox size={30}>{text}</BoldTextBox>

        <StyledForm onSubmit={onSubmit}>
          <AuthFormInput
            name="username"
            autoComplete="username"
            placeholder="이메일 주소"
            onChange={onChange}
            value={form.username}
          />
          <AuthFormInput
            name="password"
            autoComplete="password"
            type="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={form.password}
          />
          {type === "register" && (
            <AuthFormInput
              name="passwordConfirm"
              autoComplete="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
              onChange={onChange}
              value={form.passwordConfirm}
            />
          )}
          <Button
            size={1}
            red
            style={{ width: "100%", padding: "1rem 0", marginTop: "1rem" }}
          >
            {text}
          </Button>
        </StyledForm>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </AuthFormSample>

      <Footer>
        {type === "login" ? (
          <>
            <TextBox>아직 회원이 아니신가요?</TextBox>
            <BoldTextBox>
              <Link to="/register">지금 가입하세요</Link>
            </BoldTextBox>
          </>
        ) : (
          <BoldTextBox>
            <Link to="login">로그인하러 가기</Link>
          </BoldTextBox>
        )}
      </Footer>
    </AuthFormContainer>
  );
};



export default AuthForm;
