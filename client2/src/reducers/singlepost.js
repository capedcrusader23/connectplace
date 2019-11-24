import {GET_POST} from '../actions/types'
let initState=
{
post:{},
show:false
}

export default function(state=initState,action)
{
    console.log(action.payload)
switch(action.type)
{
    
case GET_POST:return{
    ...state,
    post:action.payload,
    show:true
}
default:return state
}
}