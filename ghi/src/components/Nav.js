import { Link, NavLink } from "react-router-dom";
import Logout from "./Logout";

function Nav() {
  // the classname is the css
  // the "to" is what where it directs you when you click on the link, works with app js

  return (
    <ul>
      <li>
        <Link className="dropdown-item" to="/reviews">
          Reviews
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/">
          Home Page
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/movie/detail">
          Movie Detail
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/profile">
          Profile
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/login">
          <Logout />
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
