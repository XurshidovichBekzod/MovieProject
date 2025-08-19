import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../shared/lib/redux/index';
import Image from '../../../shared/components/image/Image';
import { toggleWishlist } from '../../../shared/lib/redux/feature/wishlistSlice';


const Bookmark = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const dispatch = useDispatch();

  if (!wishlist || wishlist.length === 0) {
    return <p className="text-center text-gray-500 pt-[150px] pb-[150px] ">Wishlistda ma'lumot yo‘q</p>
  }

  return (
    <div className="Bookmark text-white container">
      <div className="grid grid-cols-4 gap-3">
        {wishlist.map(movie => (
          <div key={movie.id} className="p-2text-white">
            <Image height={480} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            <h3 className='line-clamp-1'>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
            <button onClick={() => dispatch(toggleWishlist(movie))} className="border-[0px] bg-red-800 w-[100%] h-[30px] rounded-[2px] text-white">like</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Bookmark);
