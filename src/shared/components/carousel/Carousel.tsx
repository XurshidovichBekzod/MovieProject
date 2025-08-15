import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useMovie } from "../../../features/movies/service/useMovie";

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { getMovies } = useMovie();
  const { data, isLoading, isError } = getMovies();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>API error!</div>;

  const movies = (data.results ?? [])
    .filter((m: any) => m.backdrop_path && m.poster_path)
    .slice(0, 10);

  return (
    <div className="mx-auto max-w-[1200px] px-4">
      {/* KATTA SLAYDER */}
      <Swiper
        spaceBetween={12}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl
                   [--swiper-navigation-color:#fff] [--swiper-pagination-color:#fff]"
      >
        {movies.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <img
              className="w-full h-full object-cover block"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title || movie.original_title}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMB SLIDER */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={6}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4 pb-2"
      >
        {movies.map((movie: any) => (
          <SwiperSlide key={movie.id} className="cursor-pointer">
            <img
              className="h-[110px] md:h-[130px] w-full object-cover rounded-xl
                         ring-1 ring-white/10 hover:ring-white/40 transition block"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.original_title}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
