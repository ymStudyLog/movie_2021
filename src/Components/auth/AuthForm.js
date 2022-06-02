import { Link } from "react-router-dom";
import Button from "../common/Button";
import styled, { css } from "styled-components";
import myColor from "../../lib/styles/myColor";

export const AuthFormContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  
  @media only screen and (min-width: 540px) {
    width: 70%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
`;

export const Footer = styled.div`
  margin-top: 0.8rem;
  padding: 0 auto;
`;

export const ErrorMessage = styled.div`
  color: orange;
  text-align: center;
  font-size: 0.725rem;
  margin-top: 0.8rem;
`;

export const TextBox = styled.p`
  text-align: center;

  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size}px;
    `}
`;

export const BoldTextBox = styled(TextBox)`
  font-weight: bold;
`;

export const AuthFormInput = styled.input`
  font-size: 15px;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${myColor.mainGray[8]};
  color: ${myColor.mainWhite};
  size: 40;
  height: 55px;

  &:focus {
    outline: none;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const AuthFormButton = styled(Button)`
  width: 100%;
  padding: 1rem 0;
  margin-top: 1rem;
`;

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
      <div>
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
          <AuthFormButton size={1}>{text}</AuthFormButton>
        </StyledForm>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
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
            <Link to="/login">로그인하러 가기</Link>
          </BoldTextBox>
        )}
      </Footer>
    </AuthFormContainer>
  );
};

export default AuthForm;
