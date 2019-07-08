import axios from 'axios'

import {ADD_POST,GET_ERRORS,GET_POSTS,ADD_LIKE} from './types.js'
export const addPost=(postData,history)=>dispatch=>{
    axios.post('http://localhost:1111/profile/postquery',postData).then(res=>{
        history.push('/dashboard')
    }).catch(err=>dispatch({type:GET_ERRORS,payload:err.response.data}))
}
export const getPost=()=>dispatch=>{
    axios.get('http://localhost:1111/profile/landing').then(res=>dispatch({type:GET_POSTS,payload:res.data})).catch(err=>dispatch({type:GET_POSTS,payload:null}))
}
export const addlike=id=>dispatch=>{
    console.log(id)
    axios.post(`http://localhost:1111/profile/postlike/${id}`).then(res=>dispatch({type:ADD_LIKE,payload:res.data})).catch(err=>dispatch({type:GET_ERRORS,payload:err.response.data}))
}
export const removelike=id=>dispatch=>{
    axios.post(`http://localhost:1111/profile/postdislike/${id}`).then(res=>dispatch(getPost())).catch(err=>dispatch({type:GET_ERRORS,payload:err.response.data}))
}
