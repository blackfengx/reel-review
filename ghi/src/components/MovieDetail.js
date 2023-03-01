import React, { useEffect, useState } from "react";
import { useAuthContext } from "./useToken";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player/youtube';

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
    console.log(movie)
  };

  const movieReview = (movie_id) => {
    navigate(`/reviews/create/${movie_id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-screen">
        <div className="mx-20 flex justify-center px-8 py-16">
          <div className="flex flex-row items-center bg-card p-4 rounded-lg">
            <ReactPlayer
              className="video"
              url={`https://www.youtube.com/embed/${movieDetail.trailer}`}
              width="720px"
              height="405px"
              margin="auto"
              pip={true}
              playing={false}
              loop={true}
              muted={false}
              controls={true}
            />
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                alt=""
                className="border-4 border-gradient-to-r from-bg-dark-blue to to-blue-900"
              />
            </div>
            <div className="flex flex-col justify-center ml-4 text-2xl">
              <div className="text-5xl mb-40 text-white">{movieDetail.title}</div>
              <div className="text-white" style={{ margin: "2px" }}>
                Runtime: {movieDetail.runtime} minutes
              </div>
              <div className="text-white" style={{ margin: "2px" }}>
                Rating: {movieDetail.vote_average}
              </div>
              <br></br>
              <div className="text-" >Overview:</div>
              <div className="text-white" style={{ margin: "2px" }}>{movieDetail.overview}</div>
              <button
                className="mt-40 border w-fit p-2 hover:border-black text-white"
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
