import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootReducer, {rootSaga} from "./modules/index";
import { tempLoggedIn, check } from "./modules/user";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

function checkUser() {
  try{
    const user = localStorage.getItem('user');
    if(!user) return;  //로그인 안하면 암것도 안함
    store.dispatch(tempLoggedIn(JSON.parse(user))); 
    store.dispatch(check()); //로그인 되어있으면 user 저장
  } catch(e) {
    console.log("localStorage 오류");
  } 
}

sagaMiddleware.run(rootSaga);
checkUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
