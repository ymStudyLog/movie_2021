import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";
import styled from "styled-components";
import Moviemain from "./Moviemain";
import myColor from "../../lib/styles/myColor";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 66vh;
  margin-top: 5rem;
  color: ${myColor.mainWhite};
`;

/* 스와이퍼 컨테이너 */
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 66vh;
  margin-top: 5rem;
  color: ${myColor.mainWhite};
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Arrowswiper = ({ isLoading, movies, user }) => {
  SwiperCore.use([Navigation]);

  return (
    <Wrapper>
      <StyledSwiper
        navigation
        slidesPerView={2}
        spaceBetween={100}
        centeredSlides
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true, dragSize: 24 }}
        onSlideChange={() => console.log("slide change")}
      >
        {user && isLoading ? (
          <SwiperSlide>
            <StyledBox>
              <span>loading...</span>
            </StyledBox>
          </SwiperSlide>
        ) : (
          <>
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Moviemain
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              </SwiperSlide>
            ))}
          </>
        )}
        {!user && (
          <SwiperSlide>
            <StyledBox>
              <span>로그인 후에 이용하실 수 있습니다.</span>
              <Link to="/login">로그인 하러 가기</Link>
            </StyledBox>
          </SwiperSlide>
        )}
      </StyledSwiper>
    </Wrapper>
  );
};

export default Arrowswiper;
