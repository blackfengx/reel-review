import React, {useEffect, useState} from 'react'
import { useAuthContext } from "./useToken";

export default function DetailReviews(props) {
    const [reviews, setReviews] = useState([])
    const [detailReviews, setDetailReviews] = useState([])
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
    const detailReviewList = reviews.filter((review) =>
      review.movie_id === props.movie_id
    );
    setDetailReviews(detailReviewList);
    console.log(detailReviewList)
    }

    useEffect(() => {
    fetchData()
  },[])

    useEffect(() => {
    filterReviews()
  },[reviews])



    return (
    <>
    <h4 className='text-white text-2xl text-center'>Movie Reviews</h4>
     <ul>
            {detailReviews.map((review) => (
                <div key={review.id} className="border-gray-200 shadow rounded-lg border-2 border-card">
                    <div className='flex'>
                <li className="min-w-1/4 border-b border-slate-600 text-white pr-4">Username: {review.display_name}</li>
                <li className="min-w-1/4 border-b border-slate-600 text-white pr-4">User Rating: {review.rating}</li>
                    </div>
                    <br />
                    <li className="min-w-1/4 border-slate-600 text-white pr-4 text-xl">Comments:</li>
                <li className="min-w-1/4 border-b border-slate-600 text-white pb-4">{review.comments}</li>
                </div>
            ))}
</ul>
    </>

  )
}
