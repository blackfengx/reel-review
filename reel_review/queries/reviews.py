from pydantic import BaseModel
from queries.pool import pool
from typing import Optional, List


class ReviewIn(BaseModel):
    movie_id: int
    display_name: str
    rating: float
    comments: str


class ReviewUpdateIn(BaseModel):
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
                            review.comments,
                        ],
                    )
                    id = result.fetchone()[0]
                    old_data = review.dict()
                    return ReviewOut(id=id, **old_data)
        except Exception as e:
            print(e)
            return None

    def delete(self, id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        DELETE FROM reviews
                        WHERE id = %s
                        """,
                        [id],
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def get_reviews(self) -> List[ReviewOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    result = cur.execute(
                        """
                        SELECT
                        id
                        , movie_id
                        , display_name
                        , rating
                        , comments
                        FROM reviews
                        """
                    )
                    result = []
                    for record in cur:
                        review = ReviewOut(
                            id=record[0],
                            movie_id=record[1],
                            display_name=record[2],
                            rating=record[3],
                            comments=record[4],
                        )
                        result.append(review)
                    return result
        except Exception as e:
            print(e)
            return {"message": "Error"}

    def get_review(self, id: int) -> Optional[ReviewOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    result = cur.execute(
                        """
                        SELECT *
                        FROM reviews
                        WHERE id = %s
                        """,
                        [id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_review_out(record)
        except Exception as e:
            print(e)
            return {"message": "Error"}

    def record_to_review_out(self, record):
        return ReviewOut(
            id=record[0],
            movie_id=record[1],
            display_name=record[2],
            rating=record[3],
            comments=record[4],
        )
