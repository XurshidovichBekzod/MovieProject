import { memo } from 'react';
import { useMovie } from '../../movies/service/useMovie';
import MovieView from '../../movies/components/movie-view/MovieView';

const Home = () => {
  const {getMovies} = useMovie()
  const {data} = getMovies()
  
  return (
    <div className="Home">
      <h2>Home</h2>
      <MovieView data={data?.results}/>
    </div>
  );
};

export default memo(Home);