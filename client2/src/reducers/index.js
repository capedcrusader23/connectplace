import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './error'
import postReducer from './post'
import singlepostReducer from './singlepost'
export default combineReducers({
    auth:authReducer,
    error:errorReducer,
    post:postReducer,
    singlepost:singlepostReducer
});

