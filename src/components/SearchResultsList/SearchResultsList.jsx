import { useSearchParams } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import {
  LinearProgress,
  Pagination,
  Stack,
  Box,
  ListItem,
} from '@mui/material';
import { useGetMoviesByTitleQuery } from '../../redux/slices/searchMoviesSlice';
import { MovieCard } from '../MovieCard/MovieCard';

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
            <ListItem
              key={imdbID}
              sx={{ padding: '0', width: '350px', height: '620px' }}
            >
              <MovieCard
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
            page={Number(page) || 1}
            count={Math.ceil(data.totalResults / 10)}
            onClick={pageClickHandle}
            sx={{ marginLeft: 'auto', marginRight: 'auto', padding: '16px 0' }}
          />
        </Stack>
      )}
    </>
  );
};
