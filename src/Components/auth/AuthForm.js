import { Link } from "react-router-dom";
import styled from "styled-components";
import TextBox, { BoldTextBox } from "../TextBox";
import Button from "../Button";
import Input from "../Input";
import { BOLD_WEIGHT } from "../../../../../AppData/Local/Microsoft/TypeScript/4.6/node_modules/jest-matcher-utils/build/index";

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
  padding:0 auto;
`;

/*
 * 회원가입/로그인 폼 컴포넌트
 * type을 props로 받아 회원가입/로그인 폼을 렌더링
 */

const typeMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ type }) => {
  const text = typeMap[type];
  return (
    <AuthFormContainer>
      <AuthFormSample>
        <BoldTextBox size={30}>{text}</BoldTextBox>
        <StyledForm>
          <Input
            type="email"
            placeholder="이메일 주소"
            name="username"
            gray
            margin
            size={30}
            height={50}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            name="password"
            gray
            margin
            size={30}
            height={50}
          />
          {type === "register" && (
            <Input
              type="password"
              placeholder="비밀번호 확인"
              name="passwordConfirm"
              gray
              margin
              size={30}
              height={50}
            />
          )}
        </StyledForm>
        <Button size={1} red style={{ width: "100%", padding: "1rem 0" }}>
          {text}
        </Button>
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
