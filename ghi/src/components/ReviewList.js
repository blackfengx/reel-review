import React, { useEffect, useState } from "react";
import { useAuthContext } from "./useToken";
import { useNavigate } from "react-router-dom";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [movies, setMovies] = useState([]);
  const { token } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([])
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredReviews = async () => {
    const searchResult = movies.filter((review) =>
      review.title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === ""
    );
    setFilteredMovies(searchResult);
  };

  useEffect(() => {
    filteredReviews();
  }, [searchTerm]);

  const fetchData = async () => {
    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/reviews`;
    const auth = {
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include",
    };
    const response = await fetch(url, auth);
    const reviewsData = await response.json();
    setReviews(reviewsData);
  };

  const sendToDetail = async (id) => {
    navigate(`/movie/detail/${id}`);
  }

  const fetchMovieData = async () => {
    const movieTitleList = [];
    for (let review of reviews) {
      const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/movie/${review.movie_id}`;
      const auth = {
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      };
      const response = await fetch(url, auth);
      const movieData = await response.json();
      review["title"] = movieData["title"];
      review["poster_path"] = movieData["poster_path"];
      movieTitleList.push(review);
    }
    setMovies(movieTitleList);
    setFilteredMovies(movieTitleList)
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchMovieData();
  }, [reviews]);
  return (
    <div className="min-h-screen">
      <div className="relative max-w-sm mx-auto">
        <input
          className="rounded p-1.5"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search by title"
        />
        <button type="button" onClick={filteredReviews}
          className="text-white m-3 p-1.5 rounded-xl bg-gradient-to-br to-purple-500 via-black from-purple-500 bg-size-200 hover:bg-right-bottom">
          Search
        </button>
      </div>
      <h1 className="mt-2 text-2xl text-white ml-8 mr-8 font-mono">My Reviews</h1>
      <div className="mt-2 flex flex-col ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" sm:rounded-lg bg-darker p-4 rounded-lg border-8 border-card">
              <div className="text-white gap-4 ml-8 mr-8">
                <table className="w-fullmin-w-full divide-y divide-gray-200 " style={{ borderCollapse: 'separate', borderSpacing: '0 10px' }}>
                  <thead className="text-2xl bg-gray-500 shadow-lg">
                    <tr>
                      <th className="pr-8 min-w-1/4 text-left rounded-l-lg">Movie Title</th>
                      <th className="pr-8 min-w-1/4 text-left"></th>
                      <th className="pr-8 min-w-1/4 text-left">Username</th>
                      <th className="pr-8 min-w-1/4 text-center">Rating</th>
                      <th className="pr-8 min-w-1/4 text-left rounded-r-lg">Comment</th>
                    </tr>
                  </thead>
                  <tbody className="shadow rounded-lg border-8 border-card">
                    {filteredMovies.map((review) => (
                      <tr key={review.id}>
                        <td className="border-b border-slate-600 -space-y-4">
                          <div className="object-scale-down h-72 w-36">
                            <img
                              src={`https://image.tmdb.org/t/p/original/${review.poster_path}`}
                              alt=""
                              className="border-4 border-card"
                              onClick={() => sendToDetail(review.movie_id)}
                            />
                          </div>
                        </td>
                        <td onClick={() => sendToDetail(review.movie_id)} className="min-w-1/4 border-b border-slate-600 ">{review.title}</td>
                        <td className="min-w-1/4 border-b border-slate-600">{review.display_name}</td>
                        <td className="min-w-1/4 border-b border-slate-600">{review.rating}</td>
                        <td className="min-w-1/4 border-b border-slate-600">{review.comments}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
