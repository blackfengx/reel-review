import React, { useEffect, useState } from "react";
import { useAuthContext } from "./useToken";

export default function TrendingMovies() {
  const [trending, setTrending] = useState([]);
  const { token } = useAuthContext();
  const fetchData = async () => {
    console.log(token, "----------------------------------------------------");
    const url = "http://localhost:8000/api/movies/trending";
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }, credentials: "include"
    });
    const trendingMovies = await response.json();
    console.log(
      trendingMovies,
      "----------------------------------------------------"
    );
    setTrending(trendingMovies);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="card">
        {trending.map((movie) => (
          <div key={movie.movie_id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
            <div>{movie.title}</div>
            <div>{movie.vote_average}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
