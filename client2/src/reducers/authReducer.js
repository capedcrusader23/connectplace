import {REGISTER_USER,SET_CURRENT_USER} from '../actions/types.js'
import isEmpty from '../validation/is-empty'
const initState=
{
    isAuthenticated:false,
    user:{}
}

export default function(state=initState,action)
{
switch(action.type)
{
    case REGISTER_USER:
        return {
            ...state,
            user:action.payload
        }
    case SET_CURRENT_USER:
        return{
            ...state,
            isAuthenticated:!isEmpty(action.payload),
            user:action.payload
        }

    default:return state
}
}

