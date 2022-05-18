import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import HeaderWrapper, {
  Spacer,
  Header,
} from "../components/common/HeaderWrapper";
import Button from "../components/common/Button";
import { RiNetflixFill, RiArrowRightSLine } from "react-icons/ri";
import myColor from "../lib/styles/myColor";
import styled from "styled-components";

const FirstText = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 0;
  font-size: 3rem;
`;

const SecondText = styled.p`
  text-align: center;
  font-size: 1.6rem;
  max-width: 625px;
  margin: 1rem auto 0.7rem;
`;

const ThirdText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
`;

const BodyWrapper = styled.div`
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

const MainBody = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 70vw;
  min-height: 8rem;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  border: none;
  line-height: 30px;
  width: 25rem;
  color: ${myColor.mainGray[8]};

  &:focus {
    outline: none;
  }
`;

const ButtonText = styled.div`
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: orange;
  font-size: 0.725rem;
  margin-top: 0.5rem;
`;

/* 
 * 기본 Home 페이지 - login 이전, logout 이후 
 */

const HomePage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState(null);
  const inputEl = useRef();
  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const onhandleClick = () => {
    if (userEmail.length == 0) {
      setError("빈칸을 채워주세요.");
      setUserEmail("");
      inputEl.current.focus();
    } else if (userEmail.match(emailRegExp) == null) {
      setError("올바른 이메일을 입력하세요.");
      setUserEmail("");
      inputEl.current.focus();
    }
    else{
      //회원가입 페이지 이동 + 아이디 리덕스 username에 저장
    }
  };

  return (
    <>
      <HeaderWrapper>
        <Header>
          <RiNetflixFill color={myColor.mainRed[0]} size={40} />
          <div>
            <Link to="/login">
              <Button size={1}>로그인</Button>
            </Link>
          </div>
        </Header>
      </HeaderWrapper>
      <Spacer />

      <BodyWrapper>
        <FirstText>평점이 높은 영화부터 확인하세요.</FirstText>
        <SecondText>
          다양한 디바이스에서 사용하세요. 마음에 드는 영화는 북마크할 수
          있습니다.
        </SecondText>

        <MainBody>
          <ThirdText>
            시작할 준비가 되셨나요? 멤버십을 등록하려면 이메일 주소를
            입력하세요.
          </ThirdText>

          <FormWrapper>
            <div>
              <Input
                type="text"
                placeholder="이메일 주소"
                ref={inputEl}
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  setError(null);
                }}
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </div>
            <Button
              size={1.6}
              onClick={() => {
                onhandleClick();
              }}
            >
              <ButtonText>
                시작하기 <RiArrowRightSLine />
              </ButtonText>
            </Button>
          </FormWrapper>
        </MainBody>
      </BodyWrapper>
    </>
  );
};

export default HomePage;
