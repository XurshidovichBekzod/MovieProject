import { memo } from 'react';
import MovieView from '../../movies/components/movie-view/MovieView';
import { useMovie } from '../../movies/service/useMovie';

const Bookmark = () => {
   const { getMovies } = useMovie()
    const { data } = getMovies()
  return (
    <div className="Bookmark">
      <h2>Bookmark</h2>
      <MovieView data={data?.results} />
    </div>
  );
};

export default memo(Bookmark);