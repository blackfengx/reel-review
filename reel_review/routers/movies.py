# from fastapi import APIRouter, Depends
# from pydantic import BaseModel
from queries.movies import SearchRepository
# from typing import List, Union
from fastapi import APIRouter, Depends, Request
from pydantic import BaseModel
from queries.movies import  SearchRepository
from queries.apimovies import SearchOut
from typing import List

# # router = APIRouter()

# @router.get('/api/movies/search', response_model=Union[Error, List[List[SearchOut]]])
# def get_movie_by_title(
#     # title: str,
#     # # repo: SearchRepository = Depends()
# ):
#     print("HELLOOOOOOOOOOOOOOOOOOOOOOO")
#     repo = SearchRepository()
    return repo.search(title)
