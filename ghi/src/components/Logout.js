import React, { useState } from "react";
import { navigate } from "react-router";
import { useToken } from "./useToken";

function Logout() {
  const { token, logout } = useToken();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await logout();
      // Signup successful, do something (e.g. redirect to home page)
      //   window.location.reload(false);
    } catch (e) {
      console.error(e);
    }
  };
}

export default Logout;
