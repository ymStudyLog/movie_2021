import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiNetflixFill, RiArrowRightSLine } from "react-icons/ri";
import Button from "../components/common/Button";
import HeaderWrapper from "../components/common/HeaderWrapper";
import StyledBox from "../components/common/StyledBox";
import TextBox, { BoldTextBox } from "../components/common/TextBox";
import Input from "../components/common/Input";
import myColor from "../lib/styles/myColor";
import { useRef } from 'react';

/* 기본 Home 페이지 - 로그인 이전 */
const HomePage = () => {
  const inputEl = useRef();

  return (
    <div style={{ width:'100%', height:'100vh' }}>
      <HeaderWrapper>
        <Header width={90}>
          <RiNetflixFill color={myColor.mainRed[0]} size={40} />
          <Link to="/login">
            <Button red size={1}>
              로그인
            </Button>
          </Link>
        </Header>
      </HeaderWrapper>

      <BodyWrapper width={70} height={40}>
        <BoldTextBox size={50} margin>
          영화와 시리즈를 무제한으로.
        </BoldTextBox>
        <TextBox size={25} margin>
          다양한 디바이스에서 시청하세요. 언제든 해지하실 수<br /> 있습니다.
        </TextBox>

        <StyledBox width={100} height={20} style={{ flexDirection: "column" }}>
          <TextBox size={20} margin>
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </TextBox>
          <form style={{ display:'flex', textAlign:'center' }}>
            <Input
              ref={inputEl}
              name="username_home"
              autoComplete="username_home"
              placeholder="이메일 주소"
              white
              size={60}
              height={60}
            />
            <Button red size={1.6}>
              <Link to="/register">
                <div style={{ display:'flex', alignItems:'center' }}>
                  시작하기 <RiArrowRightSLine />
                </div>
              </Link>
            </Button>
          </form>
        </StyledBox>
      </BodyWrapper>
    </div>
  );
};

const Header = styled(StyledBox)`
  justify-content: space-between;
`;

const BodyWrapper = styled(StyledBox)`
  flex-direction: column;
  margin: 7rem auto;
`;

export default HomePage;
