import {GET_POSTS,ADD_LIKE,ADD_POST,GET_COMPANY,GET_LANG,GET_LAN,GET_COMP} from '../action/types'
const initialState={
    posts:[],
    post:{},
    loading:false,
    categories:[],
    lang:[]
}
export default function(state=initialState,action)
{ 
    console.log(action.payload)
    switch(action.type){
        case GET_LAN:return{
            ...state,
            lang:action.payload
        }
        case GET_COMP:return{
            ...state,
            lang:action.payload
        }
        case GET_LANG:return{
            ...state,
            lang:action.payload
        }
        case GET_COMPANY:return {
            ...state,
            categories:action.payload
        }
        case ADD_LIKE:return{
                    ...state,
                    post:action.payload
                }
        case GET_POSTS:
           return{
               ...state,
             posts:action.payload
            }
        default:return state
    }
} 