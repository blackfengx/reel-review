import React, { useEffect, useState } from "react";
import { useAuthContext } from "./useToken";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
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
            />
          </div>
          <div className="w-full lg:w-1/2 pl-4">
            <div className="flex flex-col justify-between h-full text-gray-200 bg-card p-5 shadow-xl">
              <div className="text-4xl mb-40 font-bold underline font-verdana">
                {movieDetail.title}
              </div>
              <div style={{ margin: "2px" }}>
                <div>Runtime: {movieDetail.runtime} minutes</div>
                <div>Rating: {movieDetail.vote_average}</div>
              </div>
              <div className="text-gray-200 mt-6">Overview:</div>
              <div className="text-gray-200" style={{ margin: "2px" }}>
                {movieDetail.overview}
              </div>
            </div>
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
  );
}
