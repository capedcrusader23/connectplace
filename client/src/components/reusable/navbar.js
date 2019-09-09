import React,{Component} from 'react'
import {Navbar,NavItem} from 'react-materialize'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {logoutuser} from '../../action/auth'

class Nav extends Component{

onLogoutClick(e)
{
e.preventDefault();
this.props.logoutuser();
}

    render(){
const {isAuthenticatetd,user}=this.props.auth
const authLinks=
(
    <Navbar  alignLinks="right" className="#212121 grey darken-4 cent">
<NavItem>
<Link to="/addPost" >Add Post</Link>
</NavItem>
<NavItem>
<Link to="/dashboard" > Feeds</Link>
</NavItem>
<NavItem>
<Link to="/settings" >Settings</Link>
</NavItem>

<NavItem>
<a href="#" onClick={this.onLogoutClick.bind(this)}> Logout</a>
</NavItem>
</Navbar>
)
const guestLinks=
(
    <Navbar  alignLinks="right" className="#212121 grey darken-4 cent">
<NavItem>
<Link to="/login">Login</Link>
</NavItem>
<NavItem>
<Link to="/register"> SignUp</Link>
</NavItem>
</Navbar>
)
return(<div>
{isAuthenticatetd ? authLinks:guestLinks}
</div>
)
}
}
Nav.propTypes={
    logoutuser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
}
const mapStateToprops=(state)=>({
    auth:state.auth
})
export default connect(mapStateToprops,{logoutuser})( Nav)