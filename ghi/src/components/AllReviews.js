import React from 'react'

export default function AllReviews(props) {
    const {sendToDetail, filteredMovies} = props
  return (
    <tbody>
    {filteredMovies.map((review) => (
                      <tr key={review.id}>
                        <td className="border-b border-slate-600">
                          <div className="object-scale-down h-72 w-36">
                            <img
                              src={`https://image.tmdb.org/t/p/original/${review.poster_path}`}
                              alt=""
                              className="border-4 border-card"
                              onClick={() => sendToDetail(review.movie_id)}
                            />
                          </div>
                        </td>
                        <td onClick={() => sendToDetail(review.movie_id)} className="min-w-1/4 border-b border-slate-600 ">{review.title}</td>
                        <td className="min-w-1/4 border-b border-slate-600">{review.display_name}</td>
                        <td className="min-w-1/4 border-b border-slate-600">{review.rating}</td>
                        <td className="min-w-1/4 border-b border-slate-600 break-all">{review.comments}</td>
                      </tr>
                    ))}
                    </tbody>
  )
}
