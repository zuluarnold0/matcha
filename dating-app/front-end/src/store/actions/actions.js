import { SET_USER_TO_STATE, UNSET_USER_FROM_STATE, SET_USERS, UNSET_USERS } from '../constants/constants';

// user actions
export const setUserToState = (user) => {
    return {
        type: SET_USER_TO_STATE,
        payload: user
    }
}

export const unSetUserFromState = () => {
    return {
        type: UNSET_USER_FROM_STATE
    }
}

//users actions
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
}

export const unSetUsers = () => {
    return {
        type: UNSET_USERS
    }
}