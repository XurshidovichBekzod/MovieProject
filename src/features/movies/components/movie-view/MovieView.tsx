import { memo, type FC } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../../../shared/components/image/Image";
import { toggleWishlist } from "../../../../shared/lib/redux/feature/wishlistSlice";
import { useDispatch } from "react-redux";

interface Props {
  data: any[] | undefined;
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
            <p className="text-yellow-500 font-bold">⭐ {movie.vote_average}</p>
          </div>
          <div>
            <button onClick={() => dispatch(toggleWishlist(movie))} className="border-[0px] bg-red-800 w-[100%] h-[30px] rounded-[2px] text-white">Like</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(MovieView);
