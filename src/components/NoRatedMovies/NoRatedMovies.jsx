// components
import { NoRatedMoviesWrap } from './NoRatedMovies.styled';
import noMoviesPoster from 'images/noMoviesPoster.png';

//
export const NoRatedMovies = () => {
  return (
    <NoRatedMoviesWrap>
      <p>You have no rated movies yet :(</p>
      <img src={noMoviesPoster} alt="popcorn" />
    </NoRatedMoviesWrap>
  );
};
