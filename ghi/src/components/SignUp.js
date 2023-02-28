import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useToken } from "./useToken";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, signup } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(firstName, lastName, username, email, password);
      // Signup successful, do something (e.g. redirect to home page)
      navigate("/");
      //   window.location.reload(false);
    } catch (e) {
      console.error(e);
    }
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="container mx-auto flex items-center py-4 justify-center">
        <div className="text-white font-Open Sans text-[50px]">Reel Review</div>
      </div>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="form-floating mb-3">
            <input
              htmlFor="firstName"
              onChange={handleFirstNameChange}
              value={firstName}
              placeholder="First Name"
              required
              type="text"
              name="firstName"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="form-floating mb-3">
            <input
              htmlFor="lastName"
              onChange={handleLastNameChange}
              value={lastName}
              placeholder="Last Name"
              required
              type="text"
              name="lastName"
              id="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="form-floating mb-3">
            <input
              htmlFor="username"
              onChange={handleUsernameChange}
              value={username}
              placeholder="Username"
              required
              type="text"
              name="username"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="form-floating mb-3">
            <input
              htmlFor="email"
              onChange={handleEmailChange}
              value={email}
              placeholder="Email"
              required
              type="text"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="form-floating mb-3">
            <input
              htmlFor="password"
              onChange={handlePasswordChange}
              value={password}
              placeholder="Password"
              required
              type="password"
              name="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-sky-900 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign up
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 Popcorn Posse LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
}
