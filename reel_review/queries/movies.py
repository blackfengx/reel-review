from fastapi import APIRouter, Depends
from pydantic import BaseModel
import requests
from .apimovies import MovieQueries, SearchOut
from typing import Union, List
from queries.pool import pool


class Error(BaseModel):
    message: str


class SearchIn(BaseModel):
    title: str


class SearchRepository:
    def search(self, title: str)-> List[SearchOut]:
        movie = MovieQueries()
        found_movies=movie.get_movie_by_name(title)
        return found_movies
