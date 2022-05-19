import styled from "styled-components";
import PropTypes from "prop-types";

const MovieContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
`;

const StyledList = styled.ul`
  list-style: none;
  font-size: 1.5rem;
  padding: 0;
`;

const StyledBox = styled.div` 
  height: 66vh;
  margin-left: 0.6rem;
`;

const Moviemain = ({ title, year, summary, poster, genres }) => {
  return (
    <MovieContainer>
      <StyledImg src={poster} alt={title} title={title} />
      <StyledBox>
        <StyledList>
          <li>Title: {title}</li>
          <li>Year: {year}</li>
          <li>Genres: {genres}</li>
        </StyledList>
        <div>{summary}</div>
      </StyledBox>
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
