from fastapi import APIRouter, Depends, HTTPException
from queries.movies import  SearchRepository
from queries.movies_api import SearchOut, MovieDetail
from typing import List
from authenticator import authenticator


router = APIRouter()

@router.get('/api/movies/{title}', response_model=List[SearchOut], tags=["movies"])
def get_movie_list(
    title: str,
    repo: SearchRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if account_data is None:
        raise HTTPException(status_code=401, detail="Not logged in")
    return repo.search(title)

@router.get("/api/movie/{id}", response_model=MovieDetail, tags=["movies"])
def movie_detail(
    id: int,
    repo: SearchRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if account_data is None:
        raise HTTPException(status_code=401, detail="Not logged in")
    return repo.detail(id)

@router.get("/api/movies/trending",
response_model=List[SearchOut],
tags=["movies"])
def get_trending_movies(account_data: dict = Depends(authenticator.get_current_account_data),) -> bool:
    if account_data is None:
        raise HTTPException(status_code=401, detail="Not logged in")
    repo = SearchRepository()
    return repo.trending()
