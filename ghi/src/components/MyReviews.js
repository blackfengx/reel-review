import React, { useEffect, useState } from "react";

export default function MyReviews(props) {
    const[myReviews, setMyReviews] = useState([])
    const { filteredMovies, token } = props;
    const user = localStorage.getItem("username");

    const myFilteredReviews = async () => {
    const filteredMovieList = filteredMovies.filter((review) =>
      review.display_name === user
    );
    setMyReviews(filteredMovieList);
  };

  const deleteButton = async (id) => {
    const url = (`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/reviews/${id}`)
    const fetchConfig = {
      method: 'DELETE',
      credentials: "include",
      headers:{Authorization: `Bearer ${token}`}
    }
    await fetch(url, fetchConfig);
  }


    useEffect(() => {
    myFilteredReviews();
  },[]);

  return (
    <div>{myReviews.map((review) => (
        <tr key={review.id}>
        <td className="border-b border-slate-600">
        <div className="object-scale-down h-72 w-36">
        <img
        src={`https://image.tmdb.org/t/p/original/${review.poster_path}`}
        alt=""
        className="border-4 border-card"
        // onClick={() => sendToDetail(review.movie_id)}
        />
        </div>
        </td>
        <td className="min-w-1/4 border-b border-slate-600 ">{review.title}</td>
        <td className="min-w-1/4 border-b border-slate-600">{review.display_name}</td>
        <td className="min-w-1/4 border-b border-slate-600">{review.rating}</td>
        <td className="min-w-1/4 border-b border-slate-600 break-all">{review.comments}</td>
        <td><button>Edit</button></td>
        <td><button onClick={()=>deleteButton(review.id)}>Delete</button></td>
        </tr>
    ))}</div>
  )
}
