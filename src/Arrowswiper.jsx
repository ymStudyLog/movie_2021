import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";
import "./Arrowswiper.scss";
import Moviemain from "./Moviemain";

const Arrowswiper = ({ isLoading, movies }) => {
  SwiperCore.use([Navigation]);

  return (
    <div className="Arrowswiper--moviedata">
      <Swiper navigation className="swiper">
        {isLoading ? (
          <SwiperSlide className="movie-content">
            <div className="loader">
              <span className="loader_text">loading...</span>
            </div>
          </SwiperSlide>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <SwiperSlide key={movie.id} className="movie-content">
              {/* map() 함수의 반복되는 곳에 key 값을 주어야함 Moviemain에 key 값을 주면 소용없음 */}
                <Moviemain
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              </SwiperSlide>
            ))}
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Arrowswiper;
