import React, { useState } from "react";

export default function ReviewsForm(movies) {
  const [review, setReview] = useState({
    movie_id: "",
    display_name: "",
    rating: "",
    comments: "",
  });
  const [selectedMovieId, setSelectedMovieId] = useState({
    defaultValues: movies,
  });

  const handleReviewChange = (event) => {
    const { name, value } = event.target;
    setReview((review) => ({
      ...review,
      [name]: value,
      movie_id: setSelectedMovieId,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setReview({
      movie_id: "",
      display_name: "",
      rating: "",
      comments: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> {selectedMovieId}</h1>
      <div>Reviews Form</div>
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
