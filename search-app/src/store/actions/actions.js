import { SEARCH_INPUT_CHANGE, FETCH_USER_SUCCESS } from '../constants/constants';
import { users } from '../../search_components/Profile';

export const searchChangeAction = (searchValue) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_INPUT_CHANGE,
            payload: searchValue
        });
    }
}

export const fetchUsersAction = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: users
        })
    }
}