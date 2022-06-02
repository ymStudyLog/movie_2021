import React from "react";
import { Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MoviePage from "./pages/MoviePage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <div className="routeHome">
      <Route component={HomePage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={MoviePage} path="/movie" />
      <Route component={UserPage} path="/mypage" />
    </div>
  );
};

export default App;
