import requests
import os

api_key = os.environ.get("MOVIE_KEY")
print(api_key, '**************')

class MovieQueries:
    def get_movie_by_name(self, title: str):
        res = requests.get(f'https://api.themoviedb.org/3/search/movie?api_key={api_key}&language=en-US&query={title}&page=1&include_adult=false')
        data = res.json()
        return data

movie = MovieQueries()
print(movie.get_movie_by_name(title = 'Shawshank'))
