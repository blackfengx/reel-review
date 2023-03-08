import React, { useEffect, useState } from "react";
import { useAuthContext } from "./useToken";
import { useParams, useNavigate } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Carousel from "./Carousel";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Autoplay]);

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
    console.log(movie);
  };

  const movieReview = (movie_id) => {
    navigate(`/reviews/create/${movie_id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="mx-20 py-16">
        <div className="flex flex-row items-center bg-darker p-4 rounded-lg border-8 border-card">
          <div className="w-full lg:w-1/2 pr-4">
            <Carousel
              trailer={movieDetail.trailer}
              posterPath={movieDetail.poster_path}
              movie_id={movieDetail.movie_id}
            />
          </div>
          <div className="w-full lg:w-1/2 pl-4">
            <div className="flex flex-col justify-between h-full text-gray-200 bg-card p-5 rounded">
              <div className="flex flex-col justify-center items-center">
                <div className="text-5xl mb-40 font-bold underline font-verdana pt-5">
                  {movieDetail.title}
                </div>
                <div style={{ margin: "2px" }}>
                  <div className="text-gray-200 mt-6 text-2xl font-bold mb-2">
                    Runtime
                  </div>
                  <div className="text-lg">{movieDetail.runtime} minutes</div>
                  <div className="text-gray-200 mt-6 text-2xl font-bold mb-2">
                    Rating
                  </div>
                  <div className="text-lg">{movieDetail.vote_average}</div>
                </div>
                <div className="text-gray-200 mt-6 text-2xl font-bold mb-2">
                  Overview
                </div>
                <div className="text-gray-200 mb-6 text-lg">
                  {movieDetail.overview}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                className="border w-fit p-2 mt-10 hover:border-yellow-500 text-white hover:text-yellow-500"
                onClick={() => movieReview(movieDetail.movie_id)}
              >
                Review This Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
