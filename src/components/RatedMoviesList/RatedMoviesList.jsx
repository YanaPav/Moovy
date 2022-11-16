import PropTypes from 'prop-types';
import { List, StyledListItem } from '../Common/MovieList.styled';
import { MovieCard } from 'components/MovieCard/MovieCard';

//
export const RatedMoviesList = ({ filtredMovies }) => {
  return (
    <List>
      {filtredMovies.map(({ Poster, Title, Year, imdbID, Genre }) => (
        <StyledListItem key={imdbID}>
          <MovieCard
            poster={Poster}
            year={Year}
            title={Title}
            id={imdbID}
            genre={Genre}
          />
        </StyledListItem>
      ))}
    </List>
  );
};

RatedMoviesList.propTypes = {
  filtredMovies: PropTypes.objectOf(
    PropTypes.shape({
      Poster: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string,
      imdbID: PropTypes.string.isRequired,
      Genre: PropTypes.string,
    })
  ),
};
