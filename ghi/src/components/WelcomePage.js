import React from 'react'
import { Link} from "react-router-dom";

export default function WelcomePage() {
  return (
    <div>
      <div>WelcomePage</div>
      <div></div>
      <Link className="dropdown-item" to="/login">
          LOGIN
      </Link>
      <Link className="dropdown-item" to="/signup">
          CREATE NEW ACCOUNT
      </Link>
    </div>
  )
}
