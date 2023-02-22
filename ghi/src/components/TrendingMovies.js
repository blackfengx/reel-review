import React, {useEffect, useState} from 'react'

export default function TrendingMovies() {
    const [trending, setTrending] = useState([])


    const fetchData = async () => {
        const response = await fetch("http://localhost:8000/api/movies/trending")
        const trendingMovies = await response.json()
        setTrending(trendingMovies)

    }


    useEffect(() => {
        fetchData()
    }, [])


  return (
    <div>
        <div className='card'>
            {trending.map(movie => (
                <div key={movie.movie_id}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                <div>{movie.title}</div>
                <div>{movie.vote_average}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
