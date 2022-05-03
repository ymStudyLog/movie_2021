import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createSaga, { createRequestActionType } from '../lib/createSaga';

const TEMP_LOGEDIN = 'user/TEMP_LOGEDIN';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionType(
    'user/CHECK',
);

export const tempLogedIn = createAction(TEMP_LOGEDIN, user=>user);
export const check = createAction(CHECK);

const checkSaga = createSaga(CHECK, authAPI.check);
export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
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
    },
    initialState,
);
