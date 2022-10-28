import { useSelector } from 'react-redux';

export const RatedMoviesPage = () => {
  const ratedMovies = useSelector(state => state.ratedMovies);
  console.log(ratedMovies);
  return <ul></ul>;
};
