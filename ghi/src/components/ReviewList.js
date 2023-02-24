import React, {useEffect, useState} from 'react'

export default function ReviewList() {
    const [reviews, setReviews] = useState([])
    const [movies, setMovies] = useState([])

    const fetchData = async () => {
        const response = await fetch(`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/reviews`)
        const reviewsData = await response.json()
        setReviews(reviewsData)
    }

    const fetchMovieData = async () => {
        const movieTitleList = []
        for (let review of reviews){
            // console.log(review)
            const response = await fetch(`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/movie/${review.movie_id}`)
            const movieData = await response.json()
            // movieTitleList.push(movieData)
            review["title"] = movieData["title"]
            movieTitleList.push(review)
        }
        setMovies(movieTitleList)
        // console.log(movieTitleList)
        // count = 0
        // for (let review of reviews){
        //     review["title"] =
        // }

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
