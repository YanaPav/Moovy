import { useSelector, useDispatch } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useGetMoviesByTitleQuery } from '../../redux/slices/searchMoviesSlice';
import { MovieCard } from '../MovieCard/MovieCard';
import { setPage } from '../../redux/slices/filterValuesSlice';
import * as Scroll from 'react-scroll';

export const SearchResultsList = () => {
  const dispatch = useDispatch();
  const { title, releaseYear, page } = useSelector(state => state.filterValues);
  const { data, isLoading } = useGetMoviesByTitleQuery(
    {
      title,
      releaseYear,
      page,
    },
    { skip: !title }
  );

  const pageClickHandle = e => {
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop();
    dispatch(setPage(e.target.textContent));
  };

  return (
    <>
      {isLoading && <LinearProgress />}
      {data?.Error && <p>{data.Error}</p>}
      {data && (
        <ul>
          {data.Search?.map(({ Poster, Title, imdbID, Year }) => (
            <MovieCard
              key={imdbID}
              poster={Poster}
              title={Title}
              id={imdbID}
              year={Year}
            />
          ))}
        </ul>
      )}
      {data?.totalResults > 10 && (
        <Stack spacing={2}>
          <Pagination
            hidePrevButton
            hideNextButton
            count={Math.ceil(data.totalResults / 10)}
            onClick={pageClickHandle}
          />
        </Stack>
      )}
    </>
  );
};
