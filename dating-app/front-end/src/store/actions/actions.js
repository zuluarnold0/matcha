import { SET_USER_TO_STATE, UNSET_USER_FROM_STATE } from '../constants/constants';

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
