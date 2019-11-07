import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './error'
export default combineReducers({
    auth:authReducer,
    error:errorReducer
});

