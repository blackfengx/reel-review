from fastapi import APIRouter, Depends
from pydantic import BaseModel
from queries.apimovies import MovieQueries

router = APIRouter()

@router.get('api/movies/{title}')
def get_movie_by_title(
    title: str,
    repo: MovieQueries = Depends()
):
    return repo.get_movie_by_name(title)
