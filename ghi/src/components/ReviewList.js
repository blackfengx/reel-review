import React, {useEffect, useState} from 'react'
import { useAuthContext } from "./useToken";

export default function ReviewList() {
    const [reviews, setReviews] = useState([])
    const [movies, setMovies] = useState([])
    const {token} = useAuthContext()

    const fetchData = async () => {
        const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/reviews`
        const auth = {
                    headers: { Authorization: `Bearer ${token}` },
                    credentials: "include",}
        const response = await fetch(url, auth)
        const reviewsData = await response.json()
        setReviews(reviewsData)
    }

    const fetchMovieData = async () => {
        const movieTitleList = []
        for (let review of reviews){
            const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/movie/${review.movie_id}`
            const auth = {
                    headers: { Authorization: `Bearer ${token}` },
                    credentials: "include",}
            const response = await fetch(url, auth)
            const movieData = await response.json()
            review["title"] = movieData["title"]
            movieTitleList.push(review)
        }
        setMovies(movieTitleList)
    }


    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchMovieData()
    }, [reviews])


  return (
    <div>
        <h1>My Reviews</h1>
        <div className='card'>
            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Display Name</th>
                        <th>Rating</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
            {movies.map(review => (
                <tr key={review.id}>
                    <td>{review.title}</td>
                    <td>{review.display_name}</td>
                    <td>{review.rating}</td>
                    <td>{review.comments}</td>
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    </div>
  )
}
