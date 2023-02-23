// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// let internalToken = null;

// // Get Token

// export function getToken() {
//   return internalToken;
// }


// export async function getTokenInternal() {
//   const url = `${process.env.REACT_APP_TUNEWORLD_API_HOST}/token`;
//   try {
//     const response = await fetch(url, {
//       credentials: "include",
//     });
//     if (response.ok) {
//       const data = await response.json();
//       internalToken = data.access_token;
//       return internalToken;
//     }
//   } catch (e) {}
//   return false;
// }


// export const AuthContext = createContext({
//   token: null,
//   setToken: () => null,
// });

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(null);

//   return (
//     <AuthContext.Provider value={{ token, setToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => useContext(AuthContext);

// export function useToken() {
//   const { token, setToken } = useAuthContext();
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchToken() {
//       const token = await getTokenInternal();
//       setToken(token);
//     }
//     if (!token) {
//       fetchToken();
//     }
//   }, [setToken, token]);

//   async function logout() {
//     if (token) {
//       const url = `${process.env.REACT_APP_TUNEWORLD_API_HOST}/token`;
//       await fetch(url, { method: "delete", credentials: "include" });
//       internalToken = null;
//       setToken(null);
//       navigate("/");
//     }
//   }

//   async function login(email, password) {
//     const url = `${process.env.REACT_APP_TUNEWORLD_API_HOST}/token`;
//     const form = new FormData();
//     form.append("username", email.toLowerCase());
//     form.append("password", password);
//     const response = await fetch(url, {
//       method: "post",
//       credentials: "include",
//       body: form,
//     });
//     if (response.ok) {
//       const token = await getTokenInternal();
//       setToken(token);
//       return;
//     }
//     await response.json();
//     return false;
//   }

//   async function signup(password, email, full_name) {
//     const url = `${process.env.REACT_APP_TUNEWORLD_API_HOST}/token`;
//     const response = await fetch(url, {
//       method: "post",
//       body: JSON.stringify({
//         password,
//         email,
//         full_name: full_name,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.ok) {
//       await login(email, password);
//     }
//     return false;
//   }

//   async function update(username, password, email, full_name) {
//     const url = `${process.env.REACT_APP_TUNEWORLD_API_HOST}/api/accounts`;
//     const response = await fetch(url, {
//       method: "patch",
//       body: JSON.stringify({
//         username,
//         password,
//         email,
//         full_name: full_name,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.ok) {
//       await login(username, password);
//     }
//     return false;
//   }

//   return [token, login, logout, signup, update];
// }
