import requests
import os
from pydantic import BaseModel
from typing import Optional

API_KEY = os.environ.get("MOVIE_KEY")


class SearchOut(BaseModel):
    movie_id: int
    title: str
    poster_path: Optional[str]
    vote_average: float


class MovieDetail(BaseModel):
    movie_id: Optional[int]
    title: Optional[str]
    poster_path: Optional[str]
    runtime: Optional[int]
    vote_average: Optional[float]
    overview: Optional[str]
    trailer: Optional[str]


class MovieQueries:
    def get_movie_list(self, title: str):
        returned_movies = []
        res = requests.get(
            f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}"
            + f"&language=en-US&query={title}&page=1&include_adult=false"
        )
        data = res.json()
        for movie in data["results"]:
            movie["movie_id"] = movie["id"]
            returned_movies.append(SearchOut(**movie))
        return returned_movies

    def movie_detail(self, id: int):
        res = requests.get(
            f"https://api.themoviedb.org/3/movie/{id}"
            + f"?api_key={API_KEY}&language=en-US"
        )
        data = res.json()
        trailer_res = requests.get(
            f"https://api.themoviedb.org/3/movie/{id}"
            + f"/videos?api_key={API_KEY}&language=en-US"
        )
        trailer_data = trailer_res.json()
        for trailer in trailer_data["results"]:
            try:
                if trailer["type"] == "Trailer" \
                        and trailer["site"] == "YouTube":
                    data["trailer"] = trailer["key"]
            except KeyError:
                pass
        data["movie_id"] = data["id"]
        return MovieDetail(**data)

    def trending_movies(self):
        res = requests.get(
            "https://api.themoviedb.org/3/trending"
            + f"/movie/week?api_key={API_KEY}"
        )
        results = []
        movie_data = res.json()
        movie_data["results"] = movie_data["results"][:10]
        for movie in movie_data["results"]:
            movie["movie_id"] = movie["id"]
            results.append(SearchOut(**movie))
        return results
