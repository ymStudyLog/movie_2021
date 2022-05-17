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

const InnerBox = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 70vw;
  min-height: 8rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  text-align: left;
  background-color: ${myColor.mainWhite};
  color: ${myColor.mainGray[8]};
  font-size: 20px;
  padding: 10px;
  border: none;
  line-height: 30px;

  &:focus {
    outline: none;
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
        <NewText size={3} bold style={{ margin: "0" }}>
          평점이 높은 영화부터 확인하세요.
        </NewText>
        <NewText
          size={1.6}
          style={{ maxWidth: "625px", margin: "1rem auto 0.7rem" }}
        >
          다양한 디바이스에서 사용하세요. 마음에 드는 영화는 북마크할 수
          있습니다.
        </NewText>

        <InnerBox>
          <NewText size={1.2} style={{ marginTop: "2rem" }}>
            시작할 준비가 되셨나요? 멤버십을 등록하려면 이메일 주소를
            입력하세요.
          </NewText>

          <Wrapper>
              <div style={{ display: "flex", justifyContent: "center " }}>
                <Input
                  type="email"
                  name="username_home"
                  autoComplete="username_home"
                  placeholder="이메일 주소"
                />
                <Button red size={1.6} onClick={() => console.log("클릭")}>
                  <Link to="/register">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      시작하기 <RiArrowRightSLine />
                    </div>
                  </Link>
                </Button>
              </div>
              <div>에러 표시</div>
          </Wrapper>
        </InnerBox>
      </StyledBody>
    </>
  );
};

export default HomePage;
