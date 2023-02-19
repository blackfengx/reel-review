import requests
import os
from pydantic import BaseModel

API_KEY = os.environ.get("MOVIE_KEY")
print(API_KEY)

class SearchOut(BaseModel):
    movie_id: int
    title: str
    poster_path: str
    vote_average: float

class MovieQueries:
    def get_movie_by_name(self, title: str):
        returned_movies = []
        res = requests.get(f'https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&language=en-US&query={title}&page=1&include_adult=false')
        data = res.json()
        for movie in data["results"]:
            returned_movies.append(SearchOut(
                movie_id=movie["id"],
                title=movie["title"],
                poster_path=movie["poster_path"],
                vote_average=movie["vote_average"]
            ))
        return returned_movies
