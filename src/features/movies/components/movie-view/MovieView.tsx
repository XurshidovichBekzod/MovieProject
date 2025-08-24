import { memo, type FC } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../../../shared/components/image/Image";
import { toggleWishlist } from "../../../../shared/lib/redux/feature/wishlistSlice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";

interface Props {
  data: any[] | undefined;
  isLoading?: boolean;
}

const MovieView: FC<Props> = ({ data, isLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[300px]">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
      {data?.map((movie: any) => (
        <div key={movie.id}>
          <div onClick={() => navigate(`/movie/${movie.id}`)}>
            <Image
              height={480}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          </div>
          <div className="p-2">
            <h3
              className="font-bold line-clamp-1 text-white"
              title={movie.title}
            >
              {movie.title}
            </h3>
            <p className="text-yellow-500 font-bold">
              ⭐ {movie.vote_average.toFixed(1)}
            </p>
          </div>
          <div>
            <button
              onClick={() => dispatch(toggleWishlist(movie))}
              className="border-[0px] bg-red-800 w-[100%] h-[30px] rounded-[2px] text-white"
            >
              Like
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(MovieView);
