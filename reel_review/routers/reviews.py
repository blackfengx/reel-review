from queries.reviews import ReviewOut, ReviewIn, ReviewRepository
from fastapi import Depends, APIRouter

router = APIRouter()

@router.post("/api/reviews/create", response_model=ReviewOut)
def create_review(
    review: ReviewIn,
    repo: ReviewRepository = Depends()
):
    return repo.create(review)
