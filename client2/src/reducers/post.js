import {GET_COMPANY,REQUEST_POST,GET_POSTS} from '../actions/types'

const initState={
    show:false,
    posts:[],
    company:[]
}

export default function(state=initState,action)
{
    switch(action.type)
    {

        case REQUEST_POST:return{
            ...state,
            show:false
        }
        case GET_POSTS:return{
            ...state,
            posts:action.payload,
            show:true
        }
        case GET_COMPANY:return{
            ...state,
            show:true,
            company:action.payload
        }
        default:return state
    }
}