import {GET_POSTS,ADD_LIKE,ADD_POST} from '../action/types'
const initialState={
    posts:[],
    post:{},
    loading:false
}
export default function(state=initialState,action)
{ 
    console.log(action.payload)
    switch(action.type){
    
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