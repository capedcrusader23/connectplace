import {SET_CURRENT_USER,GET_ERRORS,REQUEST_POST,GET_POSTS} from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
export const registeruser=(userData,history)=>dispatch=>{
    axios.post('http://localhost:1111/auth/register',userData).then(res=>history.push('/login')).catch(err=>dispatch({type:GET_ERRORS,payload:err.response.data}))
}
export const setCurrentUser=(decoded)=>{
    return{
        type:SET_CURRENT_USER,
        payload:decoded
    }
    }
export const loginuser=(userData,history)=>dispatch=>{
    axios.post('http://localhost:1111/auth/login',userData).then((res)=>{
    const {token}=res.data;
    localStorage.setItem('jwtToken',token);
    setAuthToken(token)
    const decoded=jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    }).catch(err=>dispatch({type:GET_ERRORS,payload:err.response.data}));
}

export const logout=()=>dispatch=>{
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}
function requestpost()
{
    return {
        type:REQUEST_POST
    }
}
export const getPost=()=>dispatch=>{
    dispatch(requestpost())
    axios.get('http://localhost:1111/profile/landing').then(res=>dispatch({type:GET_POSTS,payload:res.data})).catch(err=>dispatch({type:GET_POSTS,payload:null}))
}

export const addpost=(userData,history)=>dispatch=>{
    axios.post('http://localhost:1111/profile/postquery',userData).then(res=>history.push('/dashboard')).catch(err=>dispatch({type:GET_ERRORS,payload:err.response.data}))
}

