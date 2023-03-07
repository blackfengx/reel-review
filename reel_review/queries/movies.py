# from fastapi import APIRouter, Depends
from pydantic import BaseModel
# import requests
from .movies_api import MovieQueries, SearchOut, MovieDetail
from typing import List
# from typing import Union
# from queries.pool import pool


class Error(BaseModel):
    message: str


class SearchIn(BaseModel):
    title: str


class SearchRepository:
    def search(self, title: str) -> List[SearchOut]:
        movie = MovieQueries()
        found_movies = movie.get_movie_list(title)
        return found_movies

    def detail(self, id: int) -> MovieDetail:
        movie = MovieQueries()
        movie_result = movie.movie_detail(id)
        return movie_result

    def trending(self) -> List[SearchOut]:
        movie = MovieQueries()
        trending_movies = movie.trending_movies()
        return trending_movies
