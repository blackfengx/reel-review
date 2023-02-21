from fastapi import APIRouter, Depends, Request
from pydantic import BaseModel
from queries.movies import  SearchRepository
from queries.movies_api import SearchOut
from typing import List

router = APIRouter()

@router.get('/api/movies/search', response_model=List[SearchOut])
def get_movie_list(
    title: str,
    # repo: SearchRepository = Depends()
):
    repo = SearchRepository()
    return repo.search(title)
