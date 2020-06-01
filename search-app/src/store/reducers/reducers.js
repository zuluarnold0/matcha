import { SEARCH_INPUT_CHANGE, FETCH_USER_SUCCESS } from '../constants/constants';

const initStateSearch = {
    searchField: ""
}

export const searchChangeReducer = (state=initStateSearch, action={}) => {
    switch (action.type) {
        case SEARCH_INPUT_CHANGE:
            return {
                ...state,
                searchField: action.payload
            }
        default:
            return state;
    }
}

const initStateUsers = {
    isLoading: true,
    users: []
}

export const fetchUsersReducer = (state=initStateUsers, action={}) =>{
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}
