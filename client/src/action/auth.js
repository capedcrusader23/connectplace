import {GET_ERRORS} from './types'
import axios from 'axios';
const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
export const registeruser=(userData,history)=>dispatch=>{
    console.log(userData)
axios.post('http://localhost:1111/auth/register',userData).then((res)=>{
console.log(res)    
history.push('/login')}).catch(err=> dispatch({type:GET_ERRORS,payload:err.response.data}))
}