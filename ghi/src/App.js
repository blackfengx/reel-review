import { useEffect, useState } from "react";
import Construct from "./Construct.js";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import MainPage from "./MainPage.js";
import Login from "./components/Login.js";
import { AuthProvider, useToken } from "./components/useToken";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp.js";
import WelcomePage from "./components/WelcomePage.js";
import MovieDetail from "./components/MovieDetail.js";
import Reviews from "./components/Reviews.js";
import ReviewsForm from "./components/ReviewsForm.js";
import Profile from "./components/Profile.js";
import Nav from "./components/Nav.js";

function GetToken() {
  // Get token from JWT cookie (if already logged in)
  useToken();
  return null;
}

function App() {
  // const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
  //     console.log('fastapi url: ', url);
  //     let response = await fetch(url);
  //     console.log("------- hello? -------");
  //     let data = await response.json();

  //     if (response.ok) {
  //       console.log("got launch data!");
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       console.log("drat! something happened");
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, [])

  // <Route path="/welcome" element={<WelcomePage/>} />
  // <Route path="/signup" element={<SignUp />} />
  // const {token} = useToken();

  return (
    <div>
      {/* {!token ? (
        <BrowserRouter>
          <AuthProvider>
            <GetToken />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/welcome" element={<WelcomePage />} />
            </Routes>
          </AuthProvider>
      </BrowserRouter>
      ) :null} */}

      <BrowserRouter>
        <AuthProvider>
          <Nav></Nav>
          <GetToken />
          <ErrorNotification error={error} />
          {/* <Construct info={launch_info} /> */}

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/movie/detail/:id" element={<MovieDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/create/:id" element={<ReviewsForm />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/welcome" element={<WelcomePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

// signup
// welcomePage
// movie detail page
// review form page
// Edit profile
// review page
