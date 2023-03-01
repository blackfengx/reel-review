import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuthContext } from "./useToken";

export default function ReviewsForm(movieDetail) {
  const { token } = useAuthContext();
  const { id } = useParams();
  const [title, setTitle] = useState("");

  const fetchData = async () => {
    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/movie/${id}`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include",
    });
    const movie = await response.json();
    setTitle(movie);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const [review, setReview] = useState({
    movie_id: id,
    display_name: "",
    rating: "",
    comments: "",
  });

  // const [selectedMovieId, setSelectedMovieId] = useState("");

  const handleReviewChange = (event) => {
    const { name, value } = event.target;
    setReview((review) => ({
      ...review,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reviewUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/reviews/create`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    };
    const response = await fetch(reviewUrl, fetchConfig);

    try {
      if (response.ok) {
        setReview({
          movie_id: id,
          display_name: "",
          rating: "",
          comments: "",
        });
        navigate("/reviews/list");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">{title.title}</h1>
        <div className="w-full md:w-3/4 mb-6 md:mb-0 text-2xl font-bold">
          Share a Reel Review
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-gray-100 border border-gray-300 py-2 px-4 leading-tight rounded-md focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name"
            type="text"
            name="display_name"
            placeholder="Display Name"
            value={review.display_name}
            onChange={handleReviewChange}
          />
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-gray-100 border border-gray-300 py-2 px-4 leading-tight rounded-md focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
            step={0.1}
            name="rating"
            placeholder="Rating"
            min={1}
            max={10}
            value={review.rating}
            onChange={handleReviewChange}
          />
        </div>
        <div className="w-full mb-6">
          <textarea
            className="appearance-none block w-full bg-gray-100 border border-gray-300 py-2 px-4 leading-tight rounded-md focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="What are your thoughts?"
            name="comments"
            value={review.comments}
            onChange={handleReviewChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
