import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useToken } from "./useToken";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, login } = useToken();
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/token`;

  //   const form = new FormData();
  //   form.append("username", username);
  //   form.append("password", password);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(username, password);
      // Login successful, do something (e.g. redirect to home page)
      navigate("/");
      //   window.location.reload(false);
    } catch (e) {
      console.error(e);
      // Login failed, show error message to user
    }
    // if (response.ok) {
    //   const tokenUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/token`;

    //   try {
    //     const response = await fetch(tokenUrl, {
    //       method: "post",
    //       credentials: "include",
    //       body: form,
    //     });
    //     if (response.ok) {
    //       const data = await response.json();
    //       const token = data.access_token;

    //       useToken(token);
    //       // DO SOMETHING WITH THE TOKEN SO YOU CAN USE IT
    //       // IN REQUESTS TO YOUR NON-ACCOUNTS SERVICES
    //     }
    //   } catch (e) {}
    // } else {
    //   let error = await response.json();
    //   // DO SOMETHING WITH THE ERROR, IF YOU WANT
    // }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="container mx-auto flex items-center py-4 justify-center">
        <div className="text-white font-Open Sans text-[50px]">Reel Review</div>
      </div>
      <div className="w-96 h-96">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="form-floating mb-3">
            <input
              placeholder="Username"
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="form-floating mb-3">
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
      </div>
      <p class="text-center text-gray-500 text-xs">
        &copy;2023 Popcorn Posse LLC. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
