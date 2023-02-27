import React, { useState } from "react";

export default function ReviewsForm({ movie }) {
  const [review, setReview] = useState({
    movie_id: movie.id,
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
    setReview({
      movie_id: movie.id,
      display_name: "",
      rating: "",
      comments: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{movie.title}</h1>
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
