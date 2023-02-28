import React from 'react'

export default function SearchedMovies(props) {
    const { token } = useAuthContext();
    const fetchData = async () => {
    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/movies/trending`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }, credentials: "include"
    });
    const trendingMovies = await response.json();
    setTrending(trendingMovies);
  };

  const movieDetail = (movie_id) => {
    navigate(`/movie/detail/${movie_id}`)

  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>SearchedMovies</div>
  )
}
