import { userReducer, setUsersReducer, setTablesReducer } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user_reducer: userReducer,
    users_redu_cer: setUsersReducer,
    tables_reducer: setTablesReducer
})

export default rootReducer;