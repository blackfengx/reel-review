import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center h-screen ">
        <p className="text-white text-[50px] font-Open font-mono hover:font-serif">
          Welcome to Reel Review
        </p>
        <div className="text-white">Your ever evolving movie rating system</div>
        <br></br>
        <Link
          className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-blue-500 bg-size-200 hover:bg-right-bottom"
          to="/login"
        >
          LOGIN
        </Link>
        <br></br>
        <Link
          className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-purple-500 bg-size-200 hover:bg-right-bottom"
          to="/signup"
        >
          CREATE NEW ACCOUNT
        </Link>
      </div>
    </div>
  );
}
