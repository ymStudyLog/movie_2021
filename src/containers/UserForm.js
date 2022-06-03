import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawal } from "../modules/user";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import {
  AuthFormButton,
  AuthFormContainer,
  AuthFormInput,
  BoldTextBox,
  ErrorMessage,
  StyledForm,
  TextBox,
} from "../components/auth/AuthForm";
import { changeInput, initializeForm, modify } from "../modules/auth";
import myColor from "../lib/styles/myColor";

const WithdrawalButton = styled(AuthFormButton)`
  margin: 0 !important;
  background: ${myColor.mainGray[6]} !important;
  &:hover {
    background: ${myColor.mainGray[5]} !important;
    color: ${myColor.mainBlack} !important;
    font-weight: bold;
  }
`;

const UserForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { user, form, switchError, switchAuth } = useSelector(({ user, auth }) => ({
    user: user.user,
    form: auth.register,
    switchError: auth.switchError,
    switchAuth: auth.switchAuth,
  }));

  const onWithdrawal = () => {
    const userAgree = confirm(
      "회원 탈퇴시 사용자 정보가 전부 삭제됩니다. 계속 하시겠습니까?"
    );
    if (userAgree) {
      dispatch(withdrawal());
      history.push("/");
    } else return;
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeInput({
        form: "register",
        key: name,
        value: value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { password, passwordConfirm } = form;
    //오류 처리 1. 인풋창 중 한군데라도 비었을때
    if ([password, passwordConfirm].includes("")) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }
    //오류 처리 2. 비밀번호 불일치시
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      dispatch(changeInput({ form: "register", key: "password", value: "" }));
      dispatch(
        changeInput({ form: "register", key: "passwordConfirm", value: "" })
      );
      return;
    }
    dispatch(modify({ password }));
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (switchError) {
      //기타 오류 처리
      setError("비밀번호 변경 실패");
      return;
    }
    if (switchAuth) {
      console.log("Modify success");
      setError("비밀번호 변경 성공");
    }
  }, [switchError, switchAuth]);

  return (
    <AuthFormContainer>
      <div>
        <BoldTextBox size={20}>{user.username}</BoldTextBox>
        <TextBox>회원 페이지</TextBox>
        <TextBox>비밀번호를 변경하거나 회원을 탈퇴할 수 있습니다.</TextBox>
        <StyledForm onSubmit={onSubmit}>
          <AuthFormInput
            name="password"
            type="password"
            autoComplete="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={form.password}
          />
          <AuthFormInput
            name="passwordConfirm"
            type="password"
            autoComplete="passwordConfirm"
            placeholder="비밀번호 확인"
            onChange={onChange}
            value={form.passwordConfirm}
          />
          <AuthFormButton size={1} onClick={onSubmit}>
            비밀번호 변경
          </AuthFormButton>
        </StyledForm>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <WithdrawalButton size={1} onClick={onWithdrawal}>
          회원 탈퇴
        </WithdrawalButton>
      </div>
    </AuthFormContainer>
  );
};

export default withRouter(UserForm);
