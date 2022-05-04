import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";
import styled from "styled-components";
import Moviemain from "./Moviemain";
import myColor from "../lib/styles/myColor";

const MoviesContainer = styled.div`
  height: 100vh;
`;

/* 스와이퍼 컨테이너 */
const StyledSwiper = styled(Swiper)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 66vh;
  margin-top: 3rem;
  color: ${myColor.mainWhite};
`;

/* 스와이퍼 버튼 */
const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  z-index: 999;
  transition-delay: 0.1s;
  transition-duration: 1s;
  color: ${myColor.mainWhite};

  &:hover{
    cursor: pointer;
  }
`;

const Arrowswiper = ({ isLoading, movies }) => {
  SwiperCore.use([Navigation]);

  return (
    <div>
      <StyledSwiper navigation>
        {isLoading ? (
          <StyledSwiperSlide>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>loading...</span>
            </div>
          </StyledSwiperSlide>
        ) : (
          <MoviesContainer>
            {movies.map((movie) => (
              <StyledSwiperSlide key={movie.id}>
                <Moviemain
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              </StyledSwiperSlide>
            ))}
          </MoviesContainer>
        )}
      </StyledSwiper>
    </div>
  );
};

export default Arrowswiper;
