/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useAuthContext } from "./useToken";
import { useNavigate } from "react-router-dom";
import MyReviews from "./MyReviews";
import AllReviews from "./AllReviews";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [movies, setMovies] = useState([]);
  const { token } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [myReviews, setMyReviews] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredReviews = async () => {
    const searchResult = movies.filter(
      (review) =>
        review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm === ""
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

  const handleToggleChange = async (e) => {
    setMyReviews(!myReviews);
  };

  const sendToDetail = async (id) => {
    navigate(`/movie/detail/${id}`);
  };

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
    setFilteredMovies(movieTitleList);
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
          className="rounded p-1.5 mt-3"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search by title"
        />
      </div>
      <div className="flex">
        <h1 className="mt-2 text-2xl text-white ml-8 mr-8 font-mono">
          {myReviews ? "My Reviews" : "Reviews"}
        </h1>
        <select onChange={handleToggleChange} name="myReviews" id="myReviews">
          <option key={1} value={false}>
            All Reviews
          </option>
          <option key={2} value={true}>
            My Reviews
          </option>
        </select>
      </div>
      <div className="mt-2 flex flex-col ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" sm:rounded-lg bg-darker p-4 rounded-lg border-8 border-card">
            <div className="text-white gap-4 ml-8 mr-8">
              <table
                className="w-fullmin-w-full divide-y divide-gray-200"
                style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}
              >
                <thead className="text-2xl bg-gray-500 shadow-lg">
                  <tr>
                    <th className="pr-8 min-w-1/4 text-left rounded-l-lg">
                      Movie Title
                    </th>
                    <th className="pr-8 min-w-1/4 text-left"></th>
                    <th className="pr-8 min-w-1/4 text-left">Username</th>
                    <th className="pr-8 min-w-1/4 text-center">Rating</th>
                    <th className="pr-8 min-w-1/4 text-left rounded-r-lg">
                      Comment
                    </th>
                  </tr>
                </thead>
                {myReviews ? (
                  <MyReviews
                    filteredMovies={filteredMovies}
                    sendToDetail={sendToDetail}
                  />
                ) : (
                  <AllReviews
                    sendToDetail={sendToDetail}
                    filteredMovies={filteredMovies}
                  />
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
