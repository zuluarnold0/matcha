import { SET_USER_TO_STATE, UNSET_USER_FROM_STATE } from '../constants/constants';

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
                user: {},
                loading: false
            }
        default:
            return state;
    }
}

