import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import AuthTemplate from "../components/auth/AuthTemplate";
import UserForm from "../containers/UserForm";
import styled from "styled-components";

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserLoginBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const UserPage = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  return (
    <div>
      {!user && (
        <AuthTemplate noClick>
          <UserBox>
            <span>로그인 후에 이용하실 수 있습니다.</span>
            <UserLoginBox>
              <Link to="/login">
                <Button size={1}>로그인</Button>
              </Link>
            </UserLoginBox>
          </UserBox>
        </AuthTemplate>
      )}
      {user && (
        <AuthTemplate noClick>
          <UserForm />
        </AuthTemplate>
      )}
    </div>
  );
};

export default UserPage;
