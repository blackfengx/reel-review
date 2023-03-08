/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useAuthContext } from "./useToken";

export default function DetailReviews(props) {
  const [reviews, setReviews] = useState([]);
  const [detailReviews, setDetailReviews] = useState([]);
  const { token } = useAuthContext();

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

  const filterReviews = () => {
    const detailReviewFilter = reviews.filter(
      (review) =>
        review.movie_id === props.movie_id && review.comments.length <= 90
    );
    const detailReviewList = [];
    let counter = 0;
    for (let i = detailReviewFilter.length - 1; i > 0; i -= 1) {
      counter += 1;
      detailReviewList.push(detailReviewFilter[i]);
      if (counter === 5) {
        break;
      }
    }
    setDetailReviews(detailReviewList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterReviews();
  }, [reviews]);

  return (
    <>
      <h4 className="text-white text-4xl text-center pb-6">Reviews</h4>
      {detailReviews.length > 0 ? (
        <ul className="pl-16 pr-16 max-h-max">
          {detailReviews.map((review) => (
            <div
              key={review.id}
              className="border-gray-200 shadow rounded-lg border-2"
            >
              <div className="flex">
                <li className="min-w-1/4 border-b border-slate-600 text-white pr-4">
                  Username: {review.display_name}
                </li>
                <li className="min-w-1/4 border-b border-slate-600 text-white pr-4">
                  User Rating: {review.rating}
                </li>
              </div>
              <br />
              <li className="min-w-1/4 border-slate-600 text-white pr-4 text-xl">
                Comments:
              </li>
              <li className="min-w-1/4 border-b border-slate-600 text-white pb-4 max-w-fit">
                {review.comments}
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <p className="text-white text-xl text-center">
          This movie doesn't have any reviews yet.
        </p>
      )}
    </>
  );
}
