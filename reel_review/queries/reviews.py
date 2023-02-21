from pydantic import BaseModel
from queries.pool import pool
from typing import Optional


class ReviewIn(BaseModel):
    movie_id: int
    display_name: str
    rating: float
    comments: str


class ReviewOut(ReviewIn):
    id: int


class ReviewRepository:
    def create(self, review: ReviewIn) -> ReviewOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    result = cur.execute(
                        """
                        INSERT INTO reviews
                            (movie_id, display_name, rating, comments)
                        VALUES
                            (%s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                        review.movie_id,
                        review.display_name,
                        review.rating,
                        review.comments
                        ]
                    )
                    id = result.fetchone()[0]
                    old_data = review.dict()
                    return ReviewOut(id=id, **old_data)
        except Exception as e:
            print(e)
            return None
