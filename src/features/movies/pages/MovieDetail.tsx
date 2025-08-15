import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../service/useMovie";

const MovieDetail = () => {
  const { id } = useParams();
  const numberID = Number(id);
  const { getMovieById } = useMovie();
  const { data } = getMovieById(numberID);
  console.log(data);

  const navigate = useNavigate();
  

  return (
    <div className="MovieDetail text-white container">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} className="h-[500px] w-[100%] container rounded-4xl" alt="" />
      </div>
      <div className="flex mt-[50px] gap-[130px]">
        <div className=""> 
          <img src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} className="w-[300px] h-[400px] rounded-2xl" alt="" />
        </div>
        <div>
          <h1 className="text-[40px] font-bold">{data?.title}</h1>
          <h2 className="w-[400px]">{data?.overview}</h2>
          <div className="flex justify-between mt-[10px] mb-[10px] text-red-800">
            <p>{data?.release_date}</p>
            <p>{data?.vote_average}</p>
            <p>{data?.popularity}</p>
          </div>
          <h1 className="text-[25px] font-bold mb-[10px]">{data?.status}</h1>
          <p>{data?.tagline}</p>
          <button className="w-[130px] cursor-pointer text-white rounded-[12px] h-[47px] bg-[#C61F1F] mt-[80px]" onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default memo(MovieDetail);
