import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiNetflixFill, RiArrowRightSLine } from "react-icons/ri";
import Button from "../components/Button";
import HeaderWrapper from "../components/HeaderWrapper";
import StyledBox from "../components/StyledBox";
import TextBox, { BoldTextBox } from "../components/TextBox";
import Input from "../components/Input";
import myColor from "../lib/styles/myColor";
import "../styles/homepage.css";

const Header = styled(StyledBox)`
  justify-content: space-between;
`;

const BodyWrapper = styled(StyledBox)`
  flex-direction: column;
  margin: 7rem auto;
`;

/* 기본 Home 페이지 - 로그인 이전 */

const HomePage = () => {
  return (
    <div className="home-container">
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
          <form className="home-content-input" method="post" action="">
            <Input
              name="username"
              autoComplete="username"
              placeholder="이메일 주소"
              white
              size={60}
              height={60}
            />
            <Button red size={1.6}>
              <Link to="/register">
                <div className="home-button-text-icon">
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

export default HomePage;
