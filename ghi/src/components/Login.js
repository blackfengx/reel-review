// import { useState } from "react";
// import { useToken } from "./auth";
// import { useNavigate } from "react-router-dom";

// function LoginComponent() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [token, login] = useToken();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const resp = await login(username, password);
//       if (resp !== false) {
//         setUsername("");
//         setPassword("");
//         navigate("/");
//         window.location.reload(false);
//       } else {
//         alert("Invalid email or password");
//       }
//       console.log(token);
//     } catch (error) {
//       console.log(error);
//       console.log("Wrong email or password!");
//     }
//   };

//   return (
//     <div className="positioning">
//       <div className="container2">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label
//               htmlFor="username"
//               className="form-label"
//               style={{ color: "#E23E57" }}
//             >
//               Username
//             </label>
//             <input
//               onChange={(e) => setUsername(e.target.value)}
//               value={username}
//               type="username"
//               className="form-control"
//               id="username"
//             />
//           </div>
//           <div className="mb-3">
//             <label
//               htmlFor="password"
//               className="form-label"
//               style={{ color: "#E23E57" }}
//             >
//               Password
//             </label>
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               type="password"
//               className="form-control"
//               id="password"
//             />
//           </div>
//           <button
//             className="btn btn-outline-light my-2 my-sm-0"
//             type="submit"
//             style={{ color: "#E23E57" }}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default LoginComponent;
