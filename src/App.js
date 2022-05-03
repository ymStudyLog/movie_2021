import React from "react";
import { Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <div>
      <Route component={HomePage} path={['/@:username','/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={MoviePage} path="/movie" />
    </div>
  );
};

export default App;
