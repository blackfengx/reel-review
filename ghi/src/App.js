import ErrorNotification from "./ErrorNotification";
import "./App.css";
import MainPage from "./MainPage.js";
import Login from "./components/Login.js";
import { AuthProvider, useToken } from "./components/useToken";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp.js";
import WelcomePage from "./components/WelcomePage.js";
import MovieDetail from "./components/MovieDetail.js";
import ReviewsForm from "./components/ReviewsForm.js";
import Nav from "./components/Nav.js";
import ReviewList from "./components/ReviewList.js";

function GetToken() {
  useToken();
  return null;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <GetToken />
          <Nav></Nav>
          <ErrorNotification error={null} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/movie/detail/:id" element={<MovieDetail />} />
            <Route path="/reviews/list" element={<ReviewList />} />
            <Route path="/reviews/create/:id" element={<ReviewsForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
