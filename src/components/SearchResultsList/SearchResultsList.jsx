import { useGetMoviesByTitleQuery } from '../../redux/searchMoviesSlice';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const SearchResultsList = ({ title }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetMoviesByTitleQuery(
    {
      title,
      page,
    },
    { skip: !title }
  );

  return (
    <>
      {isLoading && <LinearProgress />}
      {data?.Error && <p>{data.Error}</p>}
      {data && (
        <ul>
          {data.Search?.map(({ Poster, Title, imdbID }) => (
            <li key={imdbID}>
              <img src={Poster} alt={Title} />
              {Title}
            </li>
          ))}
        </ul>
      )}
      {data?.totalResults > 10 && (
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(data.totalResults / 10)}
            onChange={() => console.log(page)}
          />
        </Stack>
      )}
    </>
  );
};
