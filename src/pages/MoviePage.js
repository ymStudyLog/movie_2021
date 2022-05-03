import HeaderWrapper from "../components/HeaderWrapper";
import Button from "../components/Button";
import StyledBox from "../components/StyledBox";
import TextBox, { BoldTextBox } from "../components/TextBox";
import myColor from "../lib/styles/myColor";
import styled from "styled-components";
import { RiNetflixFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = styled(StyledBox)`
  justify-content: space-between;
`;

const MoviePage = () => {
  return (
    <div>
      <HeaderWrapper>
        <Header width={90}>
          <RiNetflixFill color={myColor.mainRed[0]} size={40} />
          <Link to="/">
              <Button size={1}>
                  로그아웃
              </Button>
          </Link>
        </Header>
      </HeaderWrapper>
    </div>
  );
};

export default MoviePage;
