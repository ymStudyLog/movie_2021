import { Link } from "react-router-dom";
import styled from "styled-components";
import TextBox, { BoldTextBox } from "../TextBox";
import Button from "../Button";
import Input from "../Input";

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
          <Input
            name="username"
            autoComplete="username"
            placeholder="이메일 주소"
            size={40}
            height={55}
            onChange={onChange}
            value={form.username}
          />
          <Input
            name="password"
            autoComplete="password"
            type="password"
            placeholder="비밀번호"
            size={40}
            height={55}
            onChange={onChange}
            value={form.password}
          />
          {type === "register" && (
            <Input
              name="passwordConfirm"
              autoComplete="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
              size={40}
              height={55}
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
