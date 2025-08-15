import { memo } from 'react';
import MovieView from '../components/movie-view/MovieView';
import { useMovie } from '../service/useMovie';
import Carousel from '../../../shared/components/carousel/Carousel';


const Movies = () => {
  const { getMovies } = useMovie()
  const { data } = getMovies()
  return (
    <div className="Movies">
      <h2>Movies</h2>
      <Carousel/>
      <MovieView data={data?.results} />
    </div>
  );
};

export default memo(Movies);