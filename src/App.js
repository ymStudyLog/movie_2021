import React from "react";
import { Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <div className="routeHome">
      <Route component={HomePage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={MyPage} path="/mypage" />
    </div>
  );
};

export default App;
