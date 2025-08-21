import { memo } from 'react';
import MovieView from '../components/movie-view/MovieView';
import { useMovie } from '../service/useMovie';
import { Pagination } from 'antd';
import { useSearchParams } from 'react-router-dom';


const Movies = () => {
  const [params, setParams] = useSearchParams()
  const page = params.get("page") || "1"

  const { getMovies } = useMovie()
  const { data } = getMovies({ page })


  const handlechange = (value: number) => {
    console.log(value);
    params.set("page", value.toString())
    setParams(params)
  }
  return (
    <div className="Movies">
      <h2>Movies</h2>
      <MovieView data={data?.results} />
      <div className="flex justify-center  container mt-[40px]">
        <Pagination
          onChange={handlechange}
          total={data?.total_pages}
          showSizeChanger={false}
          showPrevNextJumpers={false}
          defaultPageSize={1}
          className="bg-white rounded-[12px]"
        />
      </div>
    </div>
  );
};

export default memo(Movies);