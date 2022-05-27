import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Arrowswiper from "../components/movie/Arrowswiper";
import axios from "axios";
import { startLoading, finishLoading } from "../modules/loading";

const MovieForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(({ loading }) => ({
    isLoading: loading["isLoading"],
  }));

  /* 외부 API로 영화 데이터 가져오기 */
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    dispatch(startLoading("isLoading"));
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );

      const sortedMovies = [];
      for (let x of movies) {
        const movie = new Object({
          id: x.id,
          title: x.title,
          year: x.year,
          summary: x.summary,
          image: x.medium_cover_image,
          genres: x.genres,
        });
        sortedMovies.push(movie);
      }
      setMovies(sortedMovies);
      dispatch(finishLoading("isLoading"));
    } catch (e) {
      console.log(e);
      dispatch(startLoading("isLoading"));
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <Arrowswiper movies={movies} isLoading={isLoading} />;
};

export default MovieForm;
