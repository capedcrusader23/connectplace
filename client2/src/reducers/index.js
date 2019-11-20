import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './error'
import postReducer from './post'
export default combineReducers({
    auth:authReducer,
    error:errorReducer,
    post:postReducer
});

