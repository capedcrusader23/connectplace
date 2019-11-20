import {REQUEST_POST,GET_POSTS} from '../actions/types'

const initState={
    show:false,
    posts:[]
}

export default function(state=initState,action)
{
    switch(action.type)
    {

        case REQUEST_POST:return{
            ...state,
            show:false
        }
        case GET_POSTS:{
            ...state,
            posts:action.payload,
            show:true
        }
    }
}