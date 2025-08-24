import { memo } from "react";
import MovieView from "../components/movie-view/MovieView";
import { useMovie } from "../service/useMovie";
import { Pagination, Select, Spin } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGenres } from "../service/useGenres";

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const page = params.get("page") || "1";
  const with_genres = params.get("genre") || "";

  const { getMovies } = useMovie();
  const { data, isLoading } = getMovies({ page, with_genres });

  const { getGenres } = useGenres();
  const { data: genresData, isLoading: genresLoading } = getGenres();

  const option = genresData?.genres?.map(({ id, name }: any) => ({
    value: id.toString(),
    label: name,
  }));

  const handlePageChange = (value: number) => {
    params.set("page", value.toString());
    setParams(params);
  };

  const handleChangeGenre = (value: string) => {
    params.set("genre", value);
    params.set("page", "1");
    setParams(params);
  };

  return (
    <div className="Movies">
      <h2>Movies</h2>
      <div className="container mb-4 flex items-center gap-3">
        <Select
          className="w-40"
          placeholder="Select genre"
          options={option}
          value={with_genres}
          onChange={handleChangeGenre}
          loading={genresLoading}
          allowClear
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <Spin size="large" />
        </div>
      ) : (
        <>
          {data?.results?.length ? (
            <MovieView data={data?.results} />
          ) : (
            <p className="text-center text-[#6A7282] mt-40 mb-20">
              No movies found for this genre
            </p>
          )}

          <div className="flex justify-center container mt-[40px]">
            <Pagination
              onChange={handlePageChange}
              total={data?.total_results || 0}
              pageSize={20}
              showSizeChanger={false}
              className="bg-white rounded-[12px] p-2"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Movies);
