import { SET_CHATS, SET_USER_TO_STATE, UNSET_USER_FROM_STATE, SET_USERS, UNSET_USERS, SET_LIKES, SET_MATCHES, SET_VIEWS } from '../constants/constants';

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

//likes actions
export const setLikes = (likes) => {
    return {
        type: SET_LIKES,
        payload: likes
    }
}

//views actions
export const setViews = (views) => {
    return {
        type: SET_VIEWS,
        payload: views
    }
}

//matches actions
export const setMatches = (matches) => {
    return {
        type: SET_MATCHES,
        payload: matches
    }
}

//unset user action
export const unSetUsers = () => {
    return {
        type: UNSET_USERS
    }
}

//set chats actions
export const setChats = (chats) => {
    return {
        type: SET_CHATS,
        payload: chats
    }
}