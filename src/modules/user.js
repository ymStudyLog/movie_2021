import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createSaga, { createRequestActionType } from '../lib/createSaga';

const TEMP_LOGEDIN = 'user/TEMP_LOGEDIN';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionType(
    'user/CHECK',
);
const LOGOUT = 'user/LOGOUT';

export const tempLogedIn = createAction(TEMP_LOGEDIN, user=>user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createSaga(CHECK, authAPI.check);

function checkFailureSaga() {
    try {
        localStorage.removeItem('user');
    } catch(e) {
        console.log('localStorage 오류');
    }
}

function* logoutSage() {
    try{
        yield call(authAPI.logout);
        localStorage.removeItem('user');
    } catch (e) {
        console.log(e);
    }
}

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSage);
}


const initialState = {
    user:null,
    checkError:null,
};

export default handleActions(
    {
        [TEMP_LOGEDIN]: (state, { payload: user }) => ({
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
    },
    initialState,
);
