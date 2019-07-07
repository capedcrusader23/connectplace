import React,{Component} from 'react'
import {Navbar,NavItem} from 'react-materialize'
class Nav extends Component{

    render(){
        return(
            <Navbar  alignLinks="right" className="#212121 grey darken-4 cent">
<NavItem>
Login
</NavItem>
<NavItem>
SignUp
</NavItem>
</Navbar>
        )
    }
}
export default Nav