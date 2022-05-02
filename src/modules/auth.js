import { createAction, handleActions } from 'redux-actions';

const SAMPLE = 'auth/SAMPLE';

export const sampleAction = createAction(SAMPLE);

const initialState = {};

const auth = handleActions(
    {
        [SAMPLE]: (state, action) => {
            state,
            console.log(action)
        },
    },
    initialState
);

export default auth;
