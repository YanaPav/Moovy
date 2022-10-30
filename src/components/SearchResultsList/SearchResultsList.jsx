import { useSelector, useDispatch } from 'react-redux';
import {
  LinearProgress,
  Pagination,
  Stack,
  Box,
  ListItem,
} from '@mui/material';
import { useGetMoviesByTitleQuery } from '../../redux/slices/searchMoviesSlice';
import { MovieCard } from '../MovieCard/MovieCard';
import { setPage } from '../../redux/slices/filterValuesSlice';
import * as Scroll from 'react-scroll';

export const SearchResultsList = () => {
  const dispatch = useDispatch();
  const { title, releaseYear, page } = useSelector(state => state.filterValues);
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
    dispatch(setPage(e.target.textContent));
  };

  return (
    <>
      {isLoading && <LinearProgress sx={{ marginTop: '14px' }} />}

      {error && <p>Something goes wrong :( Try again later.</p>}
      {/* Real error {error.data.Error} */}

      {data?.Error && <p>{data.Error}</p>}

      {data && !data?.Error && (
        <Box
          component="ul"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            padding: 0,
          }}
        >
          {data.Search?.map(({ Poster, Title, imdbID, Year }) => (
            <ListItem sx={{ padding: '0', width: '350px', height: '620px' }}>
              <MovieCard
                key={imdbID}
                poster={Poster}
                title={Title}
                id={imdbID}
                year={Year}
              />
            </ListItem>
          ))}
        </Box>
      )}

      {data?.totalResults > 10 && (
        <Stack spacing={2}>
          <Pagination
            hidePrevButton
            hideNextButton
            count={Math.ceil(data.totalResults / 10)}
            onClick={pageClickHandle}
            sx={{ marginLeft: 'auto', marginRight: 'auto', padding: '16px 0' }}
          />
        </Stack>
      )}
    </>
  );
};
