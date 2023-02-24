import React, { useState } from "react";
import { useToken } from "./useToken";

function Logout() {
  const { token, logout } = useToken();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await logout();
    } catch (e) {
      console.error(e);
    }
  };
}

export default Logout;
