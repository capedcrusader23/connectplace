import  React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const Private=({component:Component,auth,...rest})=>(
    <Route 
    {...rest}
    render={props=>
    auth.isAuthenticatetd===true?(
        <Component {...props} />
    ):(
        <Redirect to="/login" />
    )}
    />
);

const mapStateToProps=state=>({
    auth:state.auth
})


export default connect(mapStateToProps)(Private)