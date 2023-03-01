import React, { useEffect, useState } from "react";
import { useAuthContext } from "./useToken";
import { useNavigate } from "react-router-dom";

export default function TrendingMovies() {
  const [trending, setTrending] = useState([]);
  const { token } = useAuthContext();
  const navigate = useNavigate();
  const fetchData = async () => {
    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/movies/trending`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include",
    });
    const trendingMovies = await response.json();
    setTrending(trendingMovies);
  };

  const movieDetail = (movie_id) => {
    console.log(movie_id);
    navigate(`/movie/detail/${movie_id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen px-8 py-8">
      <div className="grid grid-cols-5 gap-4 ml-8 mr-8">
        {trending.map((movie) => (
          <div
            className="relative max-w-sm rounded overflow-hidden shadow-movie-shadow border-x-8 border-y-8 border-white  bg-white hover:bg-blue-600 hover:border-blue-600 opacity-90"
            onClick={() => movieDetail(movie.movie_id)}
            key={movie.movie_id}
          >
            <img
              src={
                movie.poster_path !== null
                  ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : `https://image.tmdb.org/t/p/original/qzMYKnT4MG1d0gnhwytr4cKhUvS.jpg`
              } //not the real path wed use but it works!
              alt=""
              className="object-cover"
            />
            <div className="text-2xl">{movie.title}</div>
            <div> Rating: {movie.vote_average.toFixed(1)} &#x2B50;</div>
          </div>
        ))}
      </div>
    </div>
  );
}
