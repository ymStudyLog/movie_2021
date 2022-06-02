import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createSaga, { createRequestActionType } from '../lib/createSaga';

const TEMP_LOGGEDIN = 'user/TEMP_LOGGEDIN';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionType(
    'user/CHECK',
);
const LOGOUT = 'user/LOGOUT';
const WITHDRAWAL = 'user/WITHDRAWAL';

export const tempLoggedIn = createAction(TEMP_LOGGEDIN, user=>user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
export const withdrawal = createAction(WITHDRAWAL);

const checkSaga = createSaga(CHECK, authAPI.check);

function checkFailureSaga() {
    try {
        localStorage.removeItem('user');
    } catch(e) {
        console.log('localStorage is not working');
    }
}

function* logoutSaga() {
    try{
        yield call(authAPI.logout);
        localStorage.removeItem('user');
    } catch (e) {
        console.log(e);
    }
}

function* withdrawalSaga() {
    try{
        yield call(authAPI.withdrawal);
        localStorage.removeItem('user');
        console.log('Successfully withdrew');
    } catch (e) {
        console.log(e);
    }
}

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(WITHDRAWAL, withdrawalSaga);
}


const initialState = {
    user:null,
    checkError:null,
};

export default handleActions(
    {
        [TEMP_LOGGEDIN]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [CHECK_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            checkError:null,
        }),
        [CHECK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            user:null,
            checkError:error,
        }),
        [LOGOUT] : state => ({
            ...state,
            user:null,
        }),
        [WITHDRAWAL] : state => ({
            ...state,
            user:null,
        })
    },
    initialState,
);
