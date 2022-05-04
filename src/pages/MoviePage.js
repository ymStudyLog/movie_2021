import HeaderWrapper from "../components/common/HeaderWrapper";
import Button from "../components/common/Button";
import StyledBox from "../components/common/StyledBox";
import myColor from "../lib/styles/myColor";
import styled from "styled-components";
import { RiNetflixFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import MovieForm from "../containers/MovieForm";
import { logout } from "../modules/user";
import { useDispatch } from "react-redux";

const Header = styled(StyledBox)`
  justify-content: space-between;
`;

const MoviePage = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  }

  return (
    <div>
      <HeaderWrapper>
        <Header width={90}>
          <RiNetflixFill color={myColor.mainRed[0]} size={40} />
          <Link to="/">
            <Button size={1} onClick={onLogout}>로그아웃</Button>
          </Link>
        </Header>
      </HeaderWrapper>

      <MovieForm />
    </div>
  );
};

export default MoviePage;
