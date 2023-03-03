import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useToken } from "./useToken";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorFields, setErrorFields] = useState([]);
  const { login } = useToken();
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/token`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      localStorage.setItem("username", username);
      await login(username, password);
      navigate("/");
    } catch (e) {
      console.error(e);
      setErrorMessage("Incorrect username or password");
      setErrorFields(["username", "password"]);
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (errorFields.includes(id)) {
      setErrorFields(errorFields.filter((field) => field !== id));
      setErrorMessage("");
    }
    if (id === "username") {
      setUsername(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const getFieldClassNames = (fieldId) => {
    return `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
      errorFields.includes(fieldId) ? "border-red-500" : ""
    }`;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-darker rounded px-8 mb-4 border-card border-8">
        <div className="container mx-auto flex items-center py-4 justify-center">
          <div className="text-white font-Open Sans text-[50px]">
            Reel Review
          </div>
        </div>
        <div className="w-96 h-96">
          <form
            onSubmit={handleSubmit}
            className="bg-card shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="form-floating mb-3">
              <input
                placeholder="Username"
                type="text"
                id="username"
                value={username}
                onChange={handleInputChange}
                className={getFieldClassNames("username")}
              />
              {errorFields.includes("username") && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={handleInputChange}
                className={getFieldClassNames("password")}
              />
              {errorFields.includes("password") && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
              <p className="text-center text-gray-500 text-xs pt-4">
                Do not have an Account? <Link className="text-purple-500" to="/signup">Sign up</Link>
              </p>
          </form>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Popcorn Posse LLC. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
