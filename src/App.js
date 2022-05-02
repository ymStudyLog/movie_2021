import React from "react";
import { Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MoviePage from "./pages/MoviePage";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <div>
      <Route component={HomePage} path={['/@:username','/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={MoviePage} path="/movie" />
      <Route component={MyPage} path="/@:username/:myPage" />  {/* 개인 페이지 이렇게 구현하는거 맞음.? */}
    </div>
  );
};

export default App;
