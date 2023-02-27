import React, { useState, useEffect } from "react";
import TrendingMovies from "./components/TrendingMovies";
import Search from "./components/Search";

export default function MainPage() {
  const [searching, setSearching] = useState(false);






      if (searching) {
    return <TrendingMovies />;
  }
  return <Search />;
}
