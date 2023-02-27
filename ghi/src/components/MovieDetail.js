import React, { useEffect, useState } from 'react'
import { useAuthContext } from "./useToken";
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
  const[movieDetail, setMovieDetail] = useState([]);
  const { token } = useAuthContext();
  const { id } = useParams()
const fetchData = async () => {
    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/movie/${id}`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }, credentials: "include"
    });
    const movie = await response.json();
    setMovieDetail(movie);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
    <div>MovieDetail</div>
    <div>
      {movieDetail.title}
    </div>
   <img
    src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
    alt=""
    />
    <div>
      {movieDetail.runtime}
    </div>
    <div>
      {movieDetail.vote_average}
    </div>
    </div>
  )
}
