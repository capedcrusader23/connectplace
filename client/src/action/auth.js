import {GET_ERRORS,SET_CURRENT_USER} from './types'
import axios from 'axios';
import setAuthToken from '../utils/setAuthtoken.js'
import jwt_decode from 'jwt-decode'
export const registeruser=(userData,history)=>dispatch=>{
  console.log(userData)
  axios.post('http://localhost:1111/auth/register',userData)
  .then((res)=>{
    console.log(res)    
    history.push('/login')
  })
  .catch(err=> dispatch({type:GET_ERRORS,payload:err.response.data}))
}
export const loginuser=(userData)=>dispatch=>{
  axios.post('http://localhost:1111/auth/login',userData).then((res)=>{
    console.log(res)
  //Save to localStorage
  let {token}=res.data
  //set token to storage
  localStorage.setItem('jwtToken',token);
  //set it to the auth header
  setAuthToken(token)
  //decode token
  let decoded=jwt_decode(token)
  //set  current user
  console.log(decoded)
  dispatch(setCurrentUser(decoded))
  }).catch(err=>{
    console.log(err)
    dispatch({
      type:GET_ERRORS,
      payload:err.response.data
    })  
  })
}

export const setCurrentUser=(decoded)=>{
  return{
    type:SET_CURRENT_USER,
    payload:decoded
  }
}
export const logoutuser=()=>dispatch=>{
  localStorage.removeItem('jwtToken');
  //remove auth header from future request
  setAuthToken(false)
  dispatch(setCurrentUser({}));
}