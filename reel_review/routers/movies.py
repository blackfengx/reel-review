from fastapi import APIRouter, Depends
from pydantic import BaseModel
from queries.movies import SearchOut, SearchRepository

router = APIRouter()

@router.get('/api/movies/search', response_model=SearchOut)
def get_movie_by_title(
    title: str,
    repo: SearchRepository = Depends()
):
    return repo.search(title)
