import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../service/useMovie";

const MovieDetail = () => {
  const { id } = useParams();
  const numberID = Number(id);

  const { getMovieById } = useMovie();
  const { data, isLoading } = getMovieById(numberID);

  if (isLoading) return <p>Loading...</p>;

  console.log(data);

  return (
    <div className="MovieDetail">
      <h2 className="text-white">{data?.title}</h2>
    </div>
  );
};

export default memo(MovieDetail);
