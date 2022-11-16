// react
import { useSearchParams } from 'react-router-dom';
import * as Scroll from 'react-scroll';
// libraries
import { Stack } from '@mui/material';
// redux-components
import { useGetMoviesByTitleQuery } from 'redux/slices/searchMoviesSlice';
// components
import { MovieCard } from '../MovieCard/MovieCard';
import { StyledParination } from './SearchResultsList.styled';
import { Loader } from '../Loader/Loader.styled';
import { List, StyledListItem } from '../MovieList/MovieList.styled';

//
export const SearchResultsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const title = searchParams.get('title');
  const releaseYear = searchParams.get('releaseYear');

  const { data, error, isLoading } = useGetMoviesByTitleQuery(
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

    if (releaseYear) {
      setSearchParams({ title, releaseYear, page: e.target.textContent });
      return;
    }
    setSearchParams({ title, page: e.target.textContent });
  };

  if (!title) return;

  return (
    <>
      {isLoading && <Loader />}

      {error && <p>Something goes wrong :( Try again later.</p>}
      {/* Real error {error.data.Error} */}

      {data?.Error && <p>{data.Error}</p>}

      {data && !data?.Error && (
        <List>
          {data.Search?.map(({ Poster, Title, imdbID, Year }) => (
            <StyledListItem key={imdbID}>
              <MovieCard
                poster={Poster}
                title={Title}
                id={imdbID}
                year={Year}
              />
            </StyledListItem>
          ))}
        </List>
      )}

      {data?.totalResults > 10 && (
        <Stack spacing={2}>
          <StyledParination
            hidePrevButton
            hideNextButton
            page={Number(page) || 1}
            count={Math.ceil(data.totalResults / 10)}
            onClick={pageClickHandle}
          />
        </Stack>
      )}
    </>
  );
};
