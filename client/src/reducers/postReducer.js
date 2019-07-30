import {CURRENT_USER,GET_POSTS,ADD_LIKE,ADD_POST,GET_COMPANY,GET_LANG,GET_LAN,GET_COMP,GET_COMP_DATA} from '../action/types'
const initialState={
    show:false,
    posts:[],
    post:{},
    loading:false,
    categories:[],
    lang:[],
    sortcomp:[],
    sortlang:[],
    use:{}
}
export default function(state=initialState,action)
{ 
    console.log(action.payload)
    switch(action.type){
        case GET_LAN:return{
            ...state,
            sortlang:action.payload
        }
        case CURRENT_USER:return{
            ...state,
            use:action.payload
        }
        case GET_COMP_DATA:return{
            ...state,
            post:action.payload,
            show:true
        }
        case GET_COMP:return{
            ...state,
            sortcomp:action.payload
        }
        case GET_LANG:return{
            ...state,
            lang:action.payload
        }
        case GET_COMPANY:return {
            ...state,
            categories:action.payload
        }
        
        case GET_POSTS:
           return{
               ...state,
             posts:action.payload
            }
        default:return state
    }
} 