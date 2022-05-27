import styled from "styled-components";
import PropTypes from "prop-types";
import "./Moviemain.css";
import { useState } from "react";

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 300px;
    height: 433px;
  }
`;

const Moviemain = ({ title, year, summary, poster, genres }) => {
  const [card, setCard] = useState(true);

  const onhandleClick = () => {
    setCard(!card);
  };

  return (
    <MovieContainer className="container">
      {card ? (
        <>
          <StyledBox className="item front-face">
            <StyledImg src={poster} alt={title} title={title} />
          </StyledBox>
          <StyledBox className="item back-face" onClick={onhandleClick}>
            <StyledList>
              <li>Title: {title}</li>
              <li>Year: {year}</li>
              <li>Genres: </li>
              <ul>
                {genres.map((el) => {
                  return <li key={el}>{el}</li>;
                })}
              </ul>
            </StyledList>
          </StyledBox>
        </>
      ) : (
        <StyledBox className="summary" onClick={onhandleClick}>
          {summary ? summary : "No summary"}
        </StyledBox>
      )}
    </MovieContainer>
  );
};

Moviemain.propTypes = {
  year: PropTypes.number,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Moviemain;
