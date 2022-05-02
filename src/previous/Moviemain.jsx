import "./Moviemain.scss";
import PropTypes from "prop-types";

const Moviemain = ({ title, year, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <ul>
        <li>{title}</li>
        <li>{year}</li>
        <li>{summary}</li>
        <li>{genres}</li>
      </ul>
    </div>
  );
};

Moviemain.propTypes = {
  year: PropTypes.number,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
/* isRequired 빼고 값이 넘어오지 않을때 어떻게 할건지 조건문 작성하기 */
export default Moviemain;
