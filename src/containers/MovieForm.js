import { useEffect, useState } from "react";
import { withRouter } from "../../node_modules/react-router-dom/index";
import Arrowswiper from "../components/Arrowswiper";
import axios from 'axios';

const MovieForm = () => {
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
  
  return <Arrowswiper movies={movies} isLoading={isLoading} />;
};

export default withRouter(MovieForm);
