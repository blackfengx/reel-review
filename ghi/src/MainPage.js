import React, { useState, useEffect } from "react";
import TrendingMovies from "./components/TrendingMovies";
import Search from "./components/Search";
import SearchedMovies from "./components/SearchedMovies";
import { useToken } from "./components/useToken";
import { useNavigate } from "react-router";

export default function MainPage() {
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const {token} = useToken()
  const navigate = useNavigate()


  const searchingstuff = (input) => {
    if (input !== "") {
      setSearching(true)
      setSearchTerm(input)
    }
    else {
      setSearching(false)
    }

  }
const redirect = () => {
if (!token) {
    navigate("/welcome")
  }
}
  useEffect(() =>{
    redirect()
}, [])

      if (!searching) {
    return <div>
      <Search searchingstuff={searchingstuff}/>
      <TrendingMovies />
      </div>;
  }
  return <div>
    <Search searchingstuff={searchingstuff}/>
    <SearchedMovies searchTerm={searchTerm}/>
    </div>;
}
