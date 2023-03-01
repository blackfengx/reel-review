import React, { useEffect, useState } from "react";
import { useAuthContext } from "./useToken";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [movies, setMovies] = useState([]);
  const { token } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([])

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
      <h1>My Reviews</h1>
      <div className="text-white gap-4 ml-8 mr-8">
        <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '0 10px' }}>
          <thead className="text-2xl">
            <tr>
              <th className="pr-8 min-w-1/4 text-left">Movie Title</th>
              <th className="pr-8 min-w-1/4 text-left">Display Name</th>
              <th className="pr-8 min-w-1/4 text-left">Rating</th>
              <th className="pr-8 min-w-1/4 text-left">Comment</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.map((review) => (
              <tr key={review.id}>
                <td className="min-w-1/4">{review.title}</td>
                <td className="min-w-1/4">{review.display_name}</td>
                <td className="min-w-1/4">{review.rating}</td>
                <td className="min-w-1/4">{review.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
