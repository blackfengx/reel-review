import React, { useEffect, useState } from "react";
import { useAuthContext } from "./useToken";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MovieDetail() {
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState([]);
  const { token } = useAuthContext();
  const { id } = useParams();
  const fetchData = async () => {
    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/movie/${id}`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include",
    });
    const movie = await response.json();
    setMovieDetail(movie);
  };

  const movieReview = (movie_id) => {
    navigate(`/reviews/create/${movie_id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bg-bg-dark-blue min-h-screen'>
      <div className="flex flex-row items-center">
        <img
          // onClick={() => movieReview(movieDetail.movie_id)}
          src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
          alt=""
          style={{ width: '350px', height: '750px', objectFit: 'contain' }}
        />
        <div className="flex flex-col justify-center ml-4 gray-100 rounded-md p-4">
          <div className="mb-2">{movieDetail.title}</div>
          <div>{movieDetail.runtime} minutes</div>
          <div>{movieDetail.vote_average}</div>
          <div>{movieDetail.overview}</div>
          <button></button>
        </div>
      </div>
    </div>
  );
}
