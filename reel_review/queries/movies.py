from fastapi import APIRouter, Depends
from pydantic import BaseModel
import requests


class SearchIn(BaseModel):
    title: str

class SearchOut(BaseModel):
    "movie_id": int
    "title ": str
    "poster_path": str
    "vote_average": float
