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
    <nav className="bg-blue-700 w-screen h-24">
      <ul className="font-sans font-medium flex justify-between">
        <div className=" ml-10 flex">
          <Link to="/">
          <img src="https://www.clipartmax.com/png/middle/481-4817973_clapperboard-clipart-chalk-movie-clapper-board-png.png" alt="clapper" className="h-20" />
        </Link>
        <li className="ml-8 mr-4 mt-8 text-2xl">
          <Link className="" to="/">
            Home Page
          </Link>
        </li>
         <li className=" ml-2 mt-8 mr-4 text-2xl">
          <Link className="" to="/reviews/list">
            Reviews
          </Link>
        </li>
        </div>
        {/* <li>
          <Link className="dropdown-item" to="/profile">
            Profile
          </Link>
        </li> */}
        <li className="mr-10 mt-8 text-2xl">
          <Logout />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
