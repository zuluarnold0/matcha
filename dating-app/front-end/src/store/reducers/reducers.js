import { SET_USER_TO_STATE, UNSET_USER_FROM_STATE,  UNSET_USERS, SET_USERS } from '../constants/constants';

//user reducer
const initUserState = {
    user: null,
    loading: true
}

export const userReducer = (state=initUserState, action={}) => {
    switch(action.type) {
        case SET_USER_TO_STATE:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case UNSET_USER_FROM_STATE:
            return {
                ...state,
                user: null,
                loading: false
            }
        default:
            return state;
    }
}

//users reducer
const initUsers = {
    users: [],
    isLoading: true
}

export const setUsersReducer = (state=initUsers, action={}) => {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case UNSET_USERS:
            return {
                ...state,
                users: [],
                isLoading: false
            }
        default:
            return state;
    }
}