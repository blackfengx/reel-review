import React, { useState } from "react";
import TrendingMovies from "./components/TrendingMovies";
import Search from "./components/Search";
import SearchedMovies from "./components/SearchedMovies";
import { useToken } from "./components/useToken";
import { useNavigate } from "react-router";

export default function MainPage() {
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  const searchingstuff = (input) => {
    if (input !== "") {
      setSearching(true)
      setSearchTerm(input)
    }
    else {
      setSearching(false)
    }

  }


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
