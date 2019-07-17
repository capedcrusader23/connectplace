import axios from 'axios'

import {ADD_POST,GET_ERRORS,GET_POSTS,ADD_LIKE,GET_COMPANY,GET_LANG,GET_LAN,GET_COMP,DOWN_LIKE,LIKE_ERROR} from './types.js'
export const addPost=(postData,history)=>dispatch=>{
    axios.post('http://localhost:1111/profile/postquery',postData).then(res=>{
        console.log(res)
        history.push('/dashboard')
    }).catch(err=>dispatch({type:GET_ERRORS,payload:err.response.data}))
}
export const getPost=()=>dispatch=>{
    axios.get('http://localhost:1111/profile/landing').then(res=>dispatch({type:GET_POSTS,payload:res.data})).catch(err=>dispatch({type:GET_POSTS,payload:null}))
}
export const addlike=id=>dispatch=>{
    console.log(id)
    axios.post(`http://localhost:1111/profile/postlike/${id}`).then(res=>dispatch({type:ADD_LIKE,payload:res.data})).catch(err=>dispatch({type:LIKE_ERROR,payload:err.response.data}))
}
export const removelike=id=>dispatch=>{
    axios.post(`http://localhost:1111/profile/postdislike/${id}`).then(res=>dispatch({type:DOWN_LIKE,payload:res.data})).catch(err=>dispatch({type:GET_ERRORS,payload:err.response.data}))
}
export const fetchcompanies=()=>dispatch=>{
    axios.get('http://localhost:1111/profile/getcomp').then(res=>dispatch({type:GET_COMPANY,payload:res.data}))
}
export const fetchlang=()=>dispatch=>{
    axios.get('http://localhost:1111/profile/getlang').then(res=>dispatch({type:GET_LANG,payload:res.data}))
}
export const fetchlangsp=(id)=>dispatch=>{
    axios.get(`http://localhost:1111/profile/getl/${id}`).then(res=>dispatch({type:GET_LAN,payload:res.data}))
}
export const fetchcompsp=(id)=>dispatch=>{
    axios.get(`http://localhost:1111/profile/getc/${id}`).then(res=>dispatch({type:GET_COMP,payload:res.data}))
}
