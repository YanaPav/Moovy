// react
import { useParams } from 'react-router-dom';
// redux-components
import { useGetMovieByIdQuery } from 'redux/slices/getMovieDetailsSlice';
// components
import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { Loader } from 'components/Common/Loader.styled';

//
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useGetMovieByIdQuery(movieId);

  return (
    <>
      <GoBackBtn />

      {isLoading && <Loader />}

      {error && <p>Something goes wrong :( Try again later.</p>}

      {data?.Error && <p>{data.Error}</p>}

      {data && !data.Error && <MovieDetailsCard />}
    </>
  );
};

export default MovieDetailsPage;
