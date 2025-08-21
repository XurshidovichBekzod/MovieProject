import { memo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../service/useMovie";
import MovieView from "../components/movie-view/MovieView";
import imageDefoult from "../../../shared/assets/photo.png"

const MovieDetail = () => {
  const { id } = useParams();
  const numberID = Number(id);
  const { getMovieById, getMovieItems } = useMovie();
  const { data } = getMovieById(numberID);
  const { data: images } = getMovieItems(Number(id), "images");
  const { data: similarData } = getMovieItems(Number(id), "similar");
  const { data: personInformation } = getMovieItems(Number(id), "credits");

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="MovieDetail text-white container">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
            className="h-[250px] sm:h-[400px] w-full rounded-2xl object-cover"
            alt=""
          />
        </div>

        <div className="flex flex-col sm:flex-row mt-[20px] sm:mt-[50px] sm:gap-[50px] gap-[20px]">
          <div className="flex justify-center sm:justify-start">
            <img
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              className="w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] rounded-2xl object-cover"
              alt=""
            />
          </div>

          <div className="px-2 sm:px-0">
            <h1 className="text-[24px] sm:text-[40px] font-bold max-w-[400px]">
              {data?.title}
            </h1>
            <h2 className="max-w-[400px] text-sm sm:text-base mt-2">{data?.overview}</h2>
            <div className="flex justify-between mt-3 mb-3 text-red-800 text-sm sm:text-base">
              <p>{data?.release_date}</p>
              <p>{data?.vote_average}</p>
              <p>{data?.popularity}</p>
            </div>
            <h1 className="text-[18px] sm:text-[25px] font-bold mb-2">{data?.status}</h1>
            <p className="max-w-[300px] text-sm sm:text-base">{data?.tagline}</p>
            <button
              className="w-[120px] sm:w-[130px] text-sm sm:text-base cursor-pointer text-white rounded-[12px] h-[40px] sm:h-[47px] bg-[#C61F1F] mt-[30px] sm:mt-[80px]"
              onClick={() => navigate("/")}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[30px] sm:mt-[50px] container flex gap-[15px] sm:gap-[30px] overflow-x-auto scrollbar-hide">
        {images?.backdrops?.slice(0, 7)?.map((item: any, index: number) => (
          <img
            key={index}
            className="w-[140px] sm:w-[200px] flex-shrink-0 rounded-md"
            src={`https://image.tmdb.org/t/p/original${item.file_path}`}
            alt=""
          />
        ))}
      </div>


      <div className="container mt-[40px] sm:mt-[75px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {personInformation?.cast?.map((item: any) => {
          const img = item.profile_path
            ? `https://image.tmdb.org/t/p/original${item.profile_path}`
            : imageDefoult;
          return (
            <div
              key={item.id}
              className="w-full bg-[#303030] text-white p-[10px] flex flex-col items-center sm:flex-row sm:w-[260px] sm:h-[160px] rounded-[12px] gap-[10px]"
            >
              <img
                onClick={() => navigate(`/cast/${item.id}`)}
                className="w-[100px] h-[120px] sm:w-[150px] sm:h-[130px] rounded-[12px] object-cover cursor-pointer"
                src={img}
                alt={item.original_name}
              />
              <h1 className="line-clamp-1 text-sm sm:text-base">{item.original_name}</h1>
            </div>
          );
        })}
      </div>

      {/* Similar movies */}
      <div className="mt-[50px] sm:mt-[100px]">
        <MovieView data={similarData?.results?.slice(0, 8)} />
      </div>
    </>
  );
};

export default memo(MovieDetail);
