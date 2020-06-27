import { SET_USER_TO_STATE, UNSET_USER_FROM_STATE, SET_USERS, UNSET_USERS, SET_LIKES, SET_MATCHES, SET_VIEWS } from '../constants/constants';

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

//users reducer
const initTables = {
    likes: [],
    views: [],
    matches: []
}

export const setTablesReducer = (state=initTables, action={}) => {
    switch(action.type) {
        case SET_LIKES:
            return {
                ...state,
                likes: action.payload
            }
        case SET_VIEWS:
            return {
                ...state,
                views: action.payload
            }
        case SET_MATCHES:
            return {
                ...state,
                matches: action.payload
            }
        default:
            return state;
    }
}