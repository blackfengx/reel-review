from fastapi import APIRouter, Depends, Request
from queries.movies import  SearchRepository
from queries.movies_api import SearchOut, MovieDetail
from typing import List

router = APIRouter()

@router.get('/api/movies/search', response_model=List[SearchOut], tags=["movies"])
def get_movie_list(
    title: str,
    repo: SearchRepository = Depends()
):
    # repo = SearchRepository()
    return repo.search(title)

@router.get("/api/movie", response_model=MovieDetail, tags=["movies"])
def movie_detail(
    id: int
    # repo: SearchRepository = Depends()
):
    repo = SearchRepository()
    return repo.detail(id)

@router.get("/api/movies/trending", response_model=List[SearchOut], tags=["movies"])
def get_trending_movies():
    repo = SearchRepository()
    return repo.trending()
