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
      <div className="w-screen">
        <div className="mx-20 flex justify-center px-8 py-16">

          <div className="flex flex-row items-center bg-gray-500 p-4 rounded-lg">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center ml-4 text-2xl">
              <div className="text-5xl mb-40">{movieDetail.title}</div>
              <div style={{ margin: '2px' }}>Runtime: {movieDetail.runtime} minutes</div>
              <div style={{ margin: '2px' }}>Rating: {movieDetail.vote_average}</div>
              <br></br>
              <div>Overview:</div>
              <div style={{ margin: '2px' }}>{movieDetail.overview}</div>
              <button className="mt-40 border w-fit p-2" onClick={() => movieReview(movieDetail.movie_id)}>Review This Movie</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
