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
        navigate("/reviews");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title.title}</h1>
      <div>Leave a Reel Review</div>
      <label>
        Display Name:
        <input
          type="text"
          name="display_name"
          value={review.display_name}
          onChange={handleReviewChange}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          value={review.rating}
          onChange={handleReviewChange}
        />
      </label>
      <label>
        Comments:
        <textarea
          name="comments"
          value={review.comments}
          onChange={handleReviewChange}
        />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
}
