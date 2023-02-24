import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useToken } from "./useToken";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, login } = useToken();
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/token`;

  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(username, password);
      // Login successful, do something (e.g. redirect to home page)
      navigate("/");
      window.location.reload(false);
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
