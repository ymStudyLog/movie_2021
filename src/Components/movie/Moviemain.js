/* 사진이랑 타이틀만 보여지고 그다음에 호버링이나 클릭시 디테일 보여지게 수정하기 */
import styled from "styled-components";
import PropTypes from "prop-types";

const MovieContainer = styled.div`
  position: absolute;
  height: 100vh;
`;

const StyledImg = styled.img`
  float: left;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const Moviemain = ({ title, year, summary, poster, genres }) => {
  return (
    <MovieContainer>
      <StyledImg src={poster} alt={title} title={title} />
      <StyledList>
        <li>{title}</li>
        <li>{year}</li>
        <li>{summary}</li>
        <li>{genres}</li>
      </StyledList>
    </MovieContainer>
  );
};

Moviemain.propTypes = {
  year: PropTypes.number,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Moviemain;
