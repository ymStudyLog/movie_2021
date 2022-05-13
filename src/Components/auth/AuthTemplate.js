import styled from "styled-components";
import HeaderWrapper, { Spacer } from "../common/HeaderWrapper";
import { RiNetflixFill } from "react-icons/ri";
import myColor from "../../lib/styles/myColor";
import { Link } from "react-router-dom";

/*
 * 회원가입/로그인 페이지 레이아웃 컴포넌트
 */

const Template = styled.div`
  max-width: 450px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: ${myColor.mainWhite};
`;

const TemplateWrapper = styled.div`
  max-width: 520px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 35px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <>
      <HeaderWrapper>
        <div>
          <Link to="/">
            <RiNetflixFill color={myColor.mainRed[0]} size={55} />
          </Link>
        </div>
      </HeaderWrapper>

      <div style={{ height: "100vh", width: "100%" }}>
        <TemplateWrapper>
          <Spacer />
          <Template>{children}</Template>
        </TemplateWrapper>
      </div>
    </>
  );
};

export default AuthTemplate;
