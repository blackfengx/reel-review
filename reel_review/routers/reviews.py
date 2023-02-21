from queries.reviews import ReviewOut, ReviewIn, ReviewRepository, ReviewUpdateIn
from fastapi import Depends, APIRouter
from typing import List

router = APIRouter()

@router.post("/api/reviews/create", response_model=ReviewOut, tags=["reviews"])
def create_review(
    review: ReviewIn,
    repo: ReviewRepository = Depends()
):
    return repo.create(review)

@router.delete("/api/reviews/{review_id}", tags=["reviews"])
def delete_review(
    review_id: int,
    repo: ReviewRepository = Depends(),
) -> bool:
    return repo.delete(review_id)

@router.get("/api/reviews", response_model=List[ReviewOut], tags=["reviews"])
def get_review_list(
    repo: ReviewRepository = Depends(),
):
    return repo.get_reviews()

@router.get("/api/reviews/{review_id}", response_model=ReviewOut, tags=["reviews"])
def get_review(
    id: int,
    repo: ReviewRepository = Depends(),
):
    return repo.get_review(id)

@router.put("/api/reviews/{review_id}", response_model=ReviewOut, tags=["reviews"])
def update_review(
    review_id: int,
    review: ReviewIn,
    repo: ReviewRepository = Depends(),
) -> ReviewOut:
    return repo.update(review_id, review)
