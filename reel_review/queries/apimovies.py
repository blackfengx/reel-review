import requests
from keys import MOVIE_KEY

class MovieQueries:
    def get_movie_by_name(self, SearchIn: str):
        res = requests.get(f'https://api.themoviedb.org/3/search/movie?api_key={MOVIE_KEY}&language=en-US&query={SearchIn}&page=1&include_adult=false')
        data = res.json()
        return data
