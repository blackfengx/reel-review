from queries.reviews import (
    ReviewOut, ReviewIn, ReviewRepository
)
# from queries.reviews import ReviewUpdateIn
from fastapi import Depends, APIRouter
from typing import List
from authenticator import authenticator
from fastapi import HTTPException, status


router = APIRouter()


@router.post(
    "/api/reviews/create",
    response_model=ReviewOut,
    tags=["reviews"],
    status_code=status.HTTP_201_CREATED,
)
def create_review(
    review: ReviewIn,
    repo: ReviewRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if account_data is None:
        raise HTTPException(status_code=401, detail="Not logged in")
    return repo.create(review)


@router.delete(
    "/api/reviews/{review_id}",
    tags=["reviews"],
    status_code=status.HTTP_204_NO_CONTENT
)
def delete_review(
    review_id: int,
    repo: ReviewRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> bool:
    if account_data is None:
        raise HTTPException(status_code=401, detail="Not logged in")
    return repo.delete(review_id)


@router.get("/api/reviews", response_model=List[ReviewOut], tags=["reviews"])
def get_review_list(
    repo: ReviewRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if account_data is None:
        raise HTTPException(status_code=401, detail="Not logged in")
    return repo.get_reviews()


@router.get("/api/reviews/{review_id}",
            response_model=ReviewOut,
            tags=["reviews"])
def get_review(
    id: int,
    repo: ReviewRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if account_data is None:
        raise HTTPException(status_code=401, detail="Not logged in")
    return repo.get_review(id)
