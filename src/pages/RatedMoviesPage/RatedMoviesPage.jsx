// react
import { useSelector } from 'react-redux';
import { useState } from 'react';
import * as Scroll from 'react-scroll';
// redux-components
import { selectRatedMovies } from 'redux/selectors';
// components
import { GenreFilter } from 'components/GenreFilter/GenreFilter';
import { NoRatedMovies } from 'components/NoRatedMovies/NoRatedMovies';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import {
  NoRatedMoviesWrap,
  FilterWrap,
  NoMovieText,
} from './RatedMoviesPage.styled';
import { RatedMoviesList } from 'components/RatedMoviesList/RatedMoviesList';

//
const RatedMoviesPage = () => {
  const ratedMovies = useSelector(selectRatedMovies);
  const isRatedMovies = ratedMovies.length > 0;
  const [genreFilterValue, setGenreFilterValue] = useState('');

  const scroll = Scroll.animateScroll;
  scroll.scrollToTop();

  const handlerFilterChange = e => {
    setGenreFilterValue(e.currentTarget.value);
  };

  const filtredMovies = ratedMovies.filter(({ Genre }) =>
    Genre?.toLowerCase().includes(genreFilterValue.toLowerCase())
  );

  return (
    <>
      {!isRatedMovies && (
        <NoRatedMoviesWrap>
          <GoBackBtn />
          <NoRatedMovies />
        </NoRatedMoviesWrap>
      )}

      {isRatedMovies && (
        <>
          <FilterWrap>
            <GoBackBtn />
            <GenreFilter
              value={genreFilterValue}
              onChange={handlerFilterChange}
            />
          </FilterWrap>

          {filtredMovies.length === 0 && (
            <NoMovieText>
              There are no movies in the "{genreFilterValue}" genre
            </NoMovieText>
          )}

          <RatedMoviesList filtredMovies={filtredMovies} />
        </>
      )}
      <ScrollUp />
    </>
  );
};

export default RatedMoviesPage;
