import React from "react";
import { Link } from "react-router-dom";
import HeaderWrapper, { Spacer } from "../components/common/HeaderWrapper";
import Button from "../components/common/Button";
import { RiNetflixFill, RiArrowRightSLine } from "react-icons/ri";
import myColor from "../lib/styles/myColor";
import styled, { css } from "styled-components";

const StyledBody = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 2.5rem;
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NewText = styled.p`
  text-align: center;

  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size}rem;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

const TextBox = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 70vw;
  min-height: 9rem;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 8rem;
  padding-top: 0.7rem;
`;


const Input = styled.input`
  text-align: left;
  background-color: ${myColor.mainGray[8]};
  color: ${myColor.mainWhite};
  font-size: 15px;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${myColor.mainWhite};
  size: 50; 
  height: 3.6rem;

  &:focus {
    outline: none;
  }

  & + & {
    margin-top: 1rem;
  }
`;


/* 기본 Home 페이지 - 로그인 이전 */

const HomePage = () => {
  return (
    <>
      <HeaderWrapper>
        <div
          style={{
            padding: "0.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90vw",
          }}
        >
          <RiNetflixFill color={myColor.mainRed[0]} size={40} />

          <div>
            {/* 한/영 변환 드롭다운 구현 예정 */}
            <Button size={1} style={{ marginRight: "2rem" }}>
              한/영 변환
            </Button>
            <Link to="/login">
              <Button red size={1}>
                로그인
              </Button>
            </Link>
          </div>
        </div>
      </HeaderWrapper>

      <Spacer />

      <StyledBody>
        <NewText size={3} bold style={{ margin: "0", minWidth: "625px" }}>
          영화와 시리즈를 무제한으로.
        </NewText>
        <NewText
          size={1.6}
          style={{ maxWidth: "625px", margin: "1rem auto 0.7rem" }}
        >
          다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
        </NewText>

        <TextBox>
          <StyledForm>
            <NewText
              size={1.2}
              style={{ margin: "0", padding: "0 2.5rem 1.5rem" }}
            >
              시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
              주소를 입력하세요.
            </NewText>

            <div style={{ marginBottom: "0.5rem" }}>
              <Input
                name="username_home"
                autoComplete="username_home"
                placeholder="이메일 주소"
              />
              <Button red size={2}>
                <Link to="/register">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    시작하기 <RiArrowRightSLine />
                  </div>
                </Link>
              </Button>
            </div>
          </StyledForm>
        </TextBox>
      </StyledBody>
    </>
  );
};

export default HomePage;
