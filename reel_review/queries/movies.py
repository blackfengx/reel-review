from fastapi import APIRouter, Depends
from pydantic import BaseModel
import requests
from apimovies import MovieQueries
from typing import Union, List
from queries.pool import pool


class Error(BaseModel):
    message: str

class SearchOut(BaseModel):
    movie_id: int
    title: str
    poster_path: str
    vote_average: float

class SearchRepository:
    def search(self) -> Union[Error, List[SearchOut]]:
        