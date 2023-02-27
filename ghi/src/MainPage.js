import React, { useState, useEffect } from "react";
import TrendingMovies from "./components/TrendingMovies";
import Search from "./components/Search";

export default function MainPage() {
  const [searching, setSearching] = useState(false);


  const searchingstuff = (input) => {
    console.log(input)
  }



      if (!searching) {
    return <div>
      <Search searchingstuff={searchingstuff}/>
      <TrendingMovies />
      </div>;
  }
  return <div>
     <Search searchingstuff={searchingstuff}/>
     <div>movies</div>
     </div>;
}
