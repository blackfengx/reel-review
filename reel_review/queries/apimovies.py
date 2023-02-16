import requests
import os
from keys import MOVIE_KEY

API_KEY = MOVIE_KEY
print(API_KEY)


class MovieQueries:
    def get_movie_by_name(self, title: str):
        res = requests.get(f'https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&language=en-US&query={title}&page=1&include_adult=false')
        print(res)
        data = res.json()
        return data

movie = MovieQueries()
print(movie.get_movie_by_name(title = 'Shawshank'))
