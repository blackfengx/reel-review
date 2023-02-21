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
    movie_id: int
    title: str
    poster_path: str
    runtime: int
    vote_average: float
    overview: str

class MovieQueries:
    def get_movie_list(self, title: str):
        returned_movies = []
        res = requests.get(f'https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&language=en-US&query={title}&page=1&include_adult=false')
        data = res.json()
        for movie in data["results"]:
            movie["movie_id"] = movie["id"]
            returned_movies.append(SearchOut(
                # movie_id=movie["id"],
                # title=movie["title"],
                # poster_path=movie["poster_path"],
                # vote_average=movie["vote_average"]
                **movie
            ))
        return returned_movies

    def movie_detail(self, id: int):
        res = requests.get(f'https://api.themoviedb.org/3/movie/{id}?api_key={API_KEY}&language=en-US')
        data = res.json()
        # result = []
        # print(data, '------------------------------')
        data["movie_id"] = data["id"]
        # print(data, '-----------------------------')
        # return MovieDetail(
        #         movie_id=data["id"],
        #         title=data["title"],
        #         poster_path=data["poster_path"],
        #         runtime = data["runtime"],
        #         vote_average=data["vote_average"],
        #         overview = data["overview"],
        # )
        return MovieDetail(**data)
        # movie = MovieDetail(data)
        # print(movie, '------------------------------')
        # return movie

    def trending_movies(self):
        res = requests.get(f"https://api.themoviedb.org/3/trending/movie/week?api_key={API_KEY}")
        results = []
        movie_data = res.json()
        movie_data["results"] = movie_data["results"][:8]
        for movie in movie_data["results"]:
            movie["movie_id"] = movie["id"]
            results.append(SearchOut(**movie))
        return results
