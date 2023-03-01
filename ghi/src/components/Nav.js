import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useAuthContext, useToken } from "./useToken";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Nav() {
  const { pathname } = useLocation();
  const { token } = useAuthContext();
  const navigate = useNavigate();

  const redirect = () => {
    if (
      token &&
      (pathname === "/welcome" ||
        pathname === "/login" ||
        pathname === "/signup")
    ) {
      console.log("in 2nd");
      navigate("/");
    }
    if (
      !token &&
      (pathname !== "/welcome" ||
        pathname !== "/login" ||
        pathname !== "/signup")
    ) {
      console.log("in 1st");
      console.log(token);
      navigate("/welcome");
    }
  };

  useEffect(() => {
    redirect();
  }, [token]);

  if (!token) {
    // navigate("/welcome")
    return null; // hide the navigation bar if the user is not logged in
  }

  return (
    <nav className="bg-blue-700 w-screen h-20 flex justify-between items-center">
      <Link to="/" className="flex items-center ml-10">
        <img
          src="https://www.clipartmax.com/png/middle/481-4817973_clapperboard-clipart-chalk-movie-clapper-board-png.png"
          alt="clapper"
          className="h-12 shadow-lg"
        />

        <span className="text-white text-xl font-bold ml-2">Reel Review</span>
      </Link>
      <div className="flex items-center mr-10">
        <Link
          to="/"
          className="text-white font-medium mr-8 hover:text-gray-400 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/reviews/list"
          className="text-white font-medium mr-8 hover:text-gray-400 transition duration-300"
        >
          Reviews
        </Link>
        <Logout />
      </div>
    </nav>
  );
}

export default Nav;
