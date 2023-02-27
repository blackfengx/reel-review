import React, { useState, useEffect } from "react";
import TrendingMovies from "./components/TrendingMovies";
import Search from "./components/Search";

export default function MainPage() {
  const [searching, setSearching] = useState(false);


  const searchingstuff = (input) => {

  }



      if (!searching) {
    return <div>
      <Search/>
      <TrendingMovies />
      </div>;
  }
  return <div>
     <Search />
     <div>movies</div>
     </div>;
}
