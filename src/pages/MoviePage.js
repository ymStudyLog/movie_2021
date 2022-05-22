import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { logout } from "../modules/user";
import Arrowswiper from "../components/movie/Arrowswiper";
import HeaderWrapper, {
  Spacer,
  Header,
} from "../components/common/HeaderWrapper";
import Button from "../components/common/Button";
import myColor from "../lib/styles/myColor";
import { RiNetflixFill } from "react-icons/ri";

const MoviePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    setMovies(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    try{
      const storageUser = localStorage.getItem('user');
      console.log(user);
      console.log(storageUser);
      if(!user || !storageUser) {
        console.log("로그인 중 아님");
        return;
      }
      getMovies();
    } catch(e){
      console.log('토큰 오류 혹은 localStorage 오류');
    }
  }, []);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <HeaderWrapper>
        <Header>
          <RiNetflixFill color={myColor.mainRed[0]} size={40} />
          <div>
            <Link to="/">
              <Button size={1} onClick={onLogout}>
                로그아웃
              </Button>
            </Link>
          </div>
        </Header>
      </HeaderWrapper>
      <Spacer />

      <Arrowswiper movies={movies} isLoading={isLoading} user={user} />
    </div>
  );
};

export default MoviePage;
