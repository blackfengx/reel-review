// import { useState } from "react";
// import { useToken } from "./auth";

// function LoginComponent() {
//   const [token, login] = useToken();
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const handleSubmit = async (event) => {
//     try {
//       await login(username, password);
//     } catch (e) {
//       console.error(e);
//     }
//   };
//   // Other code, here

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         username
//         <input type="text" value={username} />
//       </label>
//       <br />
//       <label>
//         password
//         <input type="password" value={password} />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginComponent;
