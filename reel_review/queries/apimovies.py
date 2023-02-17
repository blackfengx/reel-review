import requests
import os

API_KEY = os.environ.get("MOVIE_KEY")
print(API_KEY)


class MovieQueries:
    def get_movie_by_name(self, title: str):
        returned_movies = []
        res = requests.get(f'https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&language=en-US&query={title}&page=1&include_adult=false')
        data = res.json()
        for movie in data["results"]:
            temp = {}
            temp["movie_id"]= movie["id"]
            temp["title"] = movie["title"]
            temp["poster_path"]= movie["poster_path"]
            temp["vote_average"]= movie["vote_average"]
            returned_movies.append(temp)
        print(returned_movies)
        return returned_movies
