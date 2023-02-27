import React, { useState, useEffect } from "react";
import { useAuthContext } from "./useToken";

export default function Profile() {
  const [account, setAccount] = useState([]);
  const { token } = useAuthContext();

  const fetchAccount = async () => {
    try {
      console.log(account.username)
      const response = await fetch(
        `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts/${account.username}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          credentials: "include",
        }
      );
      if (response.ok) {
        const accountData = await response.json();
        console.log(accountData)
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
      <div>First Name: {account.first_name}</div>
      <div>Last Name: {account.last_name}</div>
      <div>Email: {account.email}</div>
      <div>Username: {account.username}</div>
      <div>Password: {account.password}</div>
    </div>
  );
}
