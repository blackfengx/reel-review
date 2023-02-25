import React, { useState, useEffect } from "react";
import { useAuthContext } from "./useToken";

export default function Profile() {
  const [account, setAccount] = useState(null);
  const { token } = useAuthContext();

  const fetchAccount = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts/${username}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          credentials: "include",
        }
      );
      if (response.ok) {
        const accountData = await response.json();
        setAccount(accountData);
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Account Details</h2>
      <div>First Name: {account.firstName}</div>
      <div>Last Name: {account.lastName}</div>
      <div>Email: {account.email}</div>
      <div>Username: {account.username}</div>
      <div>Password: {account.password}</div>
    </div>
  );
}
