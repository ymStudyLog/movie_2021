import styled from "styled-components";
import HeaderWrapper, { Spacer } from "../common/HeaderWrapper";
import { RiNetflixFill } from "react-icons/ri";
import myColor from "../../lib/styles/myColor";
import { Link } from "react-router-dom";

/*
 * 회원가입/로그인 페이지 레이아웃 컴포넌트
 */

const Template = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: ${myColor.mainWhite};

  @media only screen and (min-width: 540px) {
    min-width: 430px;
    height: 100vh;
  }
`;

const TemplateWrapper = styled.div`
  margin-top: 5rem;

  @media only screen and (min-width: 540px) {
    max-width: 500px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 35px;
  }
`;

const AuthTemplate = ({ children, noClick }) => {
  return (
    <>
      <HeaderWrapper>
        {noClick ? (
          <RiNetflixFill color={myColor.mainRed[0]} size={55} />
        ) : (
          <Link to="/">
            <RiNetflixFill color={myColor.mainRed[0]} size={55} />
          </Link>
        )}
      </HeaderWrapper>

      <div>
        <TemplateWrapper>
          <Spacer />
          <Template>{children}</Template>
        </TemplateWrapper>
      </div>
    </>
  );
};

export default AuthTemplate;
