import { userReducer, setUsersReducer } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user_reducer: userReducer,
    users_redu_cer: setUsersReducer
})

export default rootReducer;