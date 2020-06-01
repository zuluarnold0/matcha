import { searchChangeReducer, fetchUsersReducer } from '../reducers/reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    searchReducer: searchChangeReducer,
    userReducer: fetchUsersReducer
});