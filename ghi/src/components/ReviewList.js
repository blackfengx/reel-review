import React, {useEffect, useState} from 'react'

export default function ReviewList() {
    const [reviews, setReviews] = useState([])

    const fetchData = async () => {
        const response = await fetch("http://localhost:8000/api/reviews")
        const reviewsData = await response.json()
        console.log(reviewsData)
        setReviews(reviewsData)

    }


    useEffect(() => {
        fetchData()
    }, [])


  return (
    <div>
        <div className='card'>
            {reviews.map(review => (
                <div key={review.id}>
                    <div>{review.display_name}</div>
                    <div>{review.rating}</div>
                    <div>{review.comments}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
