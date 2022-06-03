import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import createSaga, { createRequestActionType } from "../lib/createSaga";
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const CHANGE_INPUT = "auth/CHANGE_INPUT";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionType("auth/REGISTER");
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionType("auth/LOGIN");
const [MODIFY_PASSWORD, MODIFY_PASSWORD_SUCCESS, MODIFY_PASSWORD_FAILURE] = 
  createRequestActionType("auth/MODIFY_PASSWORD");

export const changeInput = createAction(
  CHANGE_INPUT,
  ({ form, key, value }) => ({
    form, //register 혹은 login
    key, //username, password, passwordConfirm
    value, //실제 입력된 값
  })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form); //register 혹은 login

export const register = createAction(REGISTER, ({ username, password })=>({
  username,
  password,
}));

export const login = createAction(LOGIN, ({ username, password })=>({
  username,
  password,
}));

export const modify = createAction(MODIFY_PASSWORD, password => password);

//사가 생성 
const registerSaga = createSaga(REGISTER, authAPI.register);
const loginSaga = createSaga(LOGIN, authAPI.login);
const modifySaga = createSaga(MODIFY_PASSWORD, authAPI.modify);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(MODIFY_PASSWORD, modifySaga);
}

const initialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
  auth:null,
  authError:null,
  switchAuth:null,
  switchError:null,
};

const auth = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; //value 값 저장 예-state.register.username=새로운 값
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form], //빈 폼으로 덮어씀
      authError: null, //모든 다른 state 값들도 초기화
      switchAuth: null,
      switchError: null,    
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError:null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError:error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError:null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError:error,
    }),
    [MODIFY_PASSWORD_SUCCESS] : (state) => ({
      ...state,
      switchError:null,
      switchAuth:true,
    }),
    [MODIFY_PASSWORD_FAILURE] : (state, { payload: error }) => ({
      ...state,
      switchError:error,
    })
  },
  initialState
);

export default auth;
