import {combineReducers} from 'redux';
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import postReducer from './postReducer'
import updateReducer from './updateReducer'

export default combineReducers({
    auth:authReducer,
    errors:errorReducer,
    post:postReducer,
    update:updateReducer
})