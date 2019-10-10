import {ADD_LIKE,DOWN_LIKE,LIKE_ERROR} from '../action/types'

const initialState={
post:{},
err:{}
}
export default function(state=initialState,action)
{ 
    switch(action.type)
    {
        case ADD_LIKE:   
        return{
            ...state,
            post:action.payload
        }
    case DOWN_LIKE:return{
        ...state,
        up:action.payload
    }
    case LIKE_ERROR:return{
        ...state,
        err:action.payload
    }
   default:return state;
    }    
}


