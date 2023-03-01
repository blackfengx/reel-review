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
    <nav className="bg-gray-300 w-screen">
      <ul className="font-sans font-medium">
        <li>
          <Link className="dropdown-item" to="/reviews/list">
            Reviews
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/">
            Home Page
          </Link>
        </li>
        {/* <li>
          <Link className="dropdown-item" to="/profile">
            Profile
          </Link>
        </li> */}
        <li className="absolute right-10 top-5">
          <Logout />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
