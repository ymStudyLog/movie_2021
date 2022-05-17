import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
import { logout } from "../modules/user";
import Arrowswiper from "../components/movie/Arrowswiper";
import HeaderWrapper, { Spacer } from "../components/common/HeaderWrapper";
import Button from "../components/common/Button";
import myColor from "../lib/styles/myColor";
import { RiNetflixFill } from "react-icons/ri";

const MoviePage = () => {
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
      getMovies();
    }, []);
    
    const dispatch = useDispatch();
    const onLogout = () => {
      dispatch(logout());
    }

  return (
    <div>
      <HeaderWrapper>
        <div
          style={{
            padding: "0.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90vw",
          }}
        >
          <RiNetflixFill color={myColor.mainRed[0]} size={40} />

          <div>
            <Link to="/">
              <Button red size={1} onClick={onLogout}>
                로그아웃
              </Button>
            </Link>
          </div>
        </div>
      </HeaderWrapper>
      <Spacer />
      
      <Arrowswiper movies={movies} isLoading={isLoading} />
    </div>
  );
};

export default MoviePage;
