import { userReducer } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user_reducer: userReducer
})

export default rootReducer;