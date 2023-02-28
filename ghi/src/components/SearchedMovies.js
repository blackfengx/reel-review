import React,  { useEffect, useState } from 'react'
import { useAuthContext } from "./useToken";
import { useNavigate } from 'react-router-dom';

export default function SearchedMovies(props) {
    const { token } = useAuthContext();
    const navigate = useNavigate();
    const [SearchedMovies, setSearchedMovies] = useState([])
    const fetchData = async () => {
    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/movies/${props.searchTerm}`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }, credentials: "include"
    });
    const searched = await response.json();
    setSearchedMovies(searched);
    console.log(searched)
  };

  const movieDetail = (movie_id) => {
    console.log(movie_id);
    navigate(`/movie/detail/${movie_id}`);
  };


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="card">
        {SearchedMovies.map((movie) => (
          <div onClick={() => movieDetail(movie.movie_id)} key={movie.movie_id}>
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
