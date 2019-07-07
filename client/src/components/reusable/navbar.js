import React,{Component} from 'react'
import {Navbar,NavItem} from 'react-materialize'
import {Link} from 'react-router-dom'
class Nav extends Component{

    render(){
        return(
            <Navbar  alignLinks="right" className="#212121 grey darken-4 cent">
<NavItem>
<Link to="/login">Login</Link>
</NavItem>
<NavItem>
<Link to="/register"> SignUp</Link>
</NavItem>
</Navbar>
        )
    }
}
export default Nav