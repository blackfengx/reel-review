import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ReviewsForm(movieDetail) {
  const { movie_id } = useParams();

  console.log(movie_id, "--------------------------------------------");

  const navigate = useNavigate();
  const [review, setReview] = useState({
    movie_id: movie_id,
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
    try {
      setReview({
        movie_id: movie_id,
        display_name: "",
        rating: "",
        comments: "",
      });
      navigate("/reviews");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{movieDetail.title}</h1>
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
