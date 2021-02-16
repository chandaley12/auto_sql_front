import {createAction, handleActions} from 'redux-actions'

const LOGIN = 'User/LOGIN';
const LOGOUT = 'User/LOGOUT';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);

export const initialState = {
    id: 0,
    email: '',
    name: '',
    imageUrl: '',
    expires_in: 0,
};

const UserReducer = handleActions({
    [LOGIN] : (state, action) => {
        return Object.assign({}, state, action.payload);
    },
    [LOGOUT] : (state) => {
        return initialState
    },
}, initialState);

export default UserReducer;