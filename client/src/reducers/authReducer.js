import {SET_CURRENT_USER} from '../action/types.js'
import isEmpty from '../validation/is-empty.js'
const initialState={
    isAuthenticatetd:false,
    user:{}
}
export default function(state=initialState,action)
{
  
    switch(action.type)
    {
        case SET_CURRENT_USER:
            console.log(!isEmpty(action.payload))
            return{
                ...state,
                isAuthenticatetd:!isEmpty(action.payload),
                user:action.payload
        }
        default:
            return state;
    }
}