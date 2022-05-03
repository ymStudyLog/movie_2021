import styled from "styled-components";
import HeaderWrapper from "../HeaderWrapper";
import StyledBox from "../StyledBox";
import { RiNetflixFill } from "react-icons/ri";
import myColor from "../../lib/styles/myColor";
import { Link } from "react-router-dom";

/*
 * 회원가입/로그인 페이지 레이아웃 컴포넌트
 */

const AuthTemplateContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const AuthTemplateSample = styled(StyledBox)`
  width: 70vh;
  height: calc(100vh - 5rem);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateContainer>
      <HeaderWrapper>
        <div>
          <Link to="/">
            <RiNetflixFill color={myColor.mainRed[0]} size={55} />
          </Link>
        </div>
      </HeaderWrapper>

      <AuthTemplateSample>{children}</AuthTemplateSample>
    </AuthTemplateContainer>
  );
};

export default AuthTemplate;
