import React from 'react'
import { useAuthContext } from "./useToken";
export default function MovieDetail() {
  const { token } = useAuthContext();
const fetchData = async () => {
    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/movie/{550}`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }, credentials: "include"
    });
    const trendingMovies = await response.json();
    console.log((trendingMovies));
  };




  return (
    <div>MovieDetail</div>
  )
}
