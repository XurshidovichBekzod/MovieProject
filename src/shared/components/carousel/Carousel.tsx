import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "./styles.css"; // ixtiyoriy

import { useMovie } from "../../../features/movies/service/useMovie"; // sizdagi hook

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { getMovies } = useMovie();
  const { data, isLoading, isError } = getMovies();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>API error!</div>;

  // null pathlarni filtrlaymiz, 10 tasini olamiz
  const movies = (data.results ?? [])
    .filter((m: any) => m.backdrop_path && m.poster_path)
    .slice(0, 10);

  return (
    <>
      {/* Katta rasm swiper */}
      <Swiper
        style={{
          // CSS custom property — strelkalar rangi
          // @ts-ignore
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        // Swiper destroy bo‘lganda xatoni oldini olish uchun guard
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {movies.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title || movie.original_title}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {movies.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.original_title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
