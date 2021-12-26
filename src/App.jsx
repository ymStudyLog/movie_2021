import { useState, useEffect } from "react";
import axios from "axios";
import Movieframe from "./Movieframe";
import Movievideo from "./Movievideo";
import Arrowswiper from "./Arrowswiper";
import "./App.scss";


const App = () => {
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

  return (
    <div>
      <Movieframe>
        <Movievideo />
        <div className="filter-by">
          <h3>추천 영화 평점순 TOP 20</h3>
          {/* filter 뒤에 transition 걸어서 모두 한번에 볼수 있는 페이지 만들어서 링크걸기 */}
        </div>
        <div className="movie_container">
          <Arrowswiper
            isLoading={isLoading}
            movies={movies}
          />
        </div>
      </Movieframe>
    </div>
  );
};

export default App;