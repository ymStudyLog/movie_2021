import Button from "../Components/Button";
import styled, { css } from "styled-components";
import { RiNetflixFill, RiArrowRightSLine } from "react-icons/ri";
import myColor from "../lib/styles/myColor";
import "../styles/homepage.css";

const Header = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 5rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
`;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 0.25rem 0;
  color: ${myColor.mainWhite};

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}%;
    `}

  ${(props) =>
    props.between &&
    css`
      justify-content: space-between;
    `}

    ${(props) =>
    props.flexCol &&
    css`
      flex-direction: column;
    `}

    ${props => 
        props.mt && 
        css`
            margin: 7rem auto;
        `}
   
`;

{/* styled 컴포넌트 리팩토링 필요함 */}

const TextBox = styled.p`
    text-align: center;
    margin:1rem;
    ${props=>
        props.size && 
        css`
            font-size: ${props.size}px;
        `}
    ${props=>
        props.bold &&
        css`
            font-weight: bold;
        `}
`;

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-header-wrapper">
        <Header>
          <StyledBox width={90} between>
            <RiNetflixFill color={myColor.mainRed[0]} size={40} />
            <Button red size={1}>로그인</Button>
          </StyledBox>
        </Header>
      </div>

      <StyledBox width={70} height={40} flexCol mt>
        <TextBox size={50} bold>영화와 시리즈를 무제한으로.</TextBox>
        <TextBox size={25}>다양한 디바이스에서 시청하세요. 언제든 해지하실 수<br /> 있습니다.</TextBox>

        <StyledBox width={100} height={20} flexCol>
          <TextBox size={20}>
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </TextBox>
          <div className="home-content-input">
            <input
              type="email"
              name="email"
              id="home-input"
              placeholder="이메일 주소"
              size={60}
            />
            <Button red size={1.6}>
              <div className="home-button-text-icon">
                시작하기 <RiArrowRightSLine />
                </div>
            </Button>
          </div>
        </StyledBox>
      </StyledBox>
    </div>
  );
};

export default HomePage;
