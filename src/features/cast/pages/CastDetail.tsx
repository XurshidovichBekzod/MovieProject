import { memo } from 'react';
import { useParams } from 'react-router-dom';
import useCast from '../service/useCast';
import MovieView from '../../movies/components/movie-view/MovieView';
import imageDefoult from "../../../shared/assets/photo.png"

const CastDetail = () => {
  const { id } = useParams();
  const { getCastById, getCastByIdInfo } = useCast();
  const { data } = getCastById(Number(id));
  const { data: moviesData } = getCastByIdInfo(Number(id), "movie_credits");

  const images = data?.profile_path ? `https://image.tmdb.org/t/p/original${data.profile_path}`: imageDefoult;

  return (
    <>
      <div className="container gap-[100px] flex">
        <img className="w-[300px] rounded-xl shadow-lg" src={images} alt={""} />
        
        <div className="w-[400px]">
          <h2 className="text-white font-bold text-[20px] line-clamp-1 mb-[20px]">
            {data?.name}
          </h2>
          <p className="text-white">
            {data?.biography || "Biography not available."}
          </p>
        </div>
      </div>

      <div className="mt-[50px]">
        <MovieView data={moviesData?.cast || []} />
      </div>
    </>
  );
};

export default memo(CastDetail);
