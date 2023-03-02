import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center h-screen ">
        <p className="text-white text-[50px] font-Open font-mono">
          Welcome to Reel Review
        </p>
        <div className="text-white">Your ever evolving movie rating system</div>
        <br></br>
        <div>
          <div className="text-white">
            What you have access to when you download this app:
          </div>
          <div className="text-white">
            -Quick access to your favorite movies
          </div>
          <div className="text-white">-Personalized ratings</div>
          <div className="text-white">-More coming soon</div>
          <div className="text-white">
            -Free Hugs to Anyone who Signs up!(hugs not included*)
          </div>
        </div>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <Link
            className="m-2 p-8 text-white rounded-xl bg-gradient-to-br to-blue-500 via-black from-blue-500 bg-size-200 hover:bg-right-bottom"
            to="/login"
          >
            LOGIN
          </Link>
          <Link
            className="m-2 p-8 text-white rounded-xl bg-gradient-to-br to-purple-500 via-black from-purple-500 bg-size-200 hover:bg-right-bottom"
            to="/signup"
          >
            CREATE NEW ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
}
