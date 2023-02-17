# from fastapi import APIRouter, Depends
# from pydantic import BaseModel
from queries.movies import SearchRepository
# from typing import List, Union

# router = APIRouter()

# @router.get('/api/movies/search', response_model=Union[Error, List[SearchOut]])
# def get_movie_by_title(
#     # title: str,
#     # repo: SearchRepository = Depends()
# ):
#     print("HELLOOOOOOOOOOOOOOOOOOOOOOO")
#     return repo.search(title)
