import React, { useEffect, useState } from "react";

export default function MyReviews(props) {
  const [myReviews, setMyReviews] = useState([]);
  const { filteredMovies } = props;
  const user = localStorage.getItem("username");

  const myFilteredReviews = async () => {
    const filteredMovieList = filteredMovies.filter(
      (review) => review.display_name === user
    );
    setMyReviews(filteredMovieList);
  };

  useEffect(() => {
    myFilteredReviews();
  }, []);

  return (
    <tbody className="shadow rounded-lg border-8 border-card">
      {myReviews.map((review) => (
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
          <td className="min-w-1/4 border-b border-slate-600 ">
            {review.title}
          </td>
          <td className="min-w-1/4 border-b border-slate-600">
            {review.display_name}
          </td>
          <td className="min-w-1/4 border-b border-slate-600">
            {review.rating}
          </td>
          <td className="min-w-1/4 border-b border-slate-600 break-all">
            {review.comments}
          </td>
          <td>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
          </td>
          <td>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700"
              onClick="this.classList.add('ring-2', 'ring-red-500', 'ring-opacity-50')"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
