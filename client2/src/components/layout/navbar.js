import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {logout} from '../../actions/authActions'

class Navbar extends Component
{
  style = {
    backgroundColor:"#202150",
    position:'fixed',
    width:'100%',
    zIndex:3
  }
  logout(e)
  {
    e.preventDefault();
    this.props.logout();
  }
render()
{
return(
  <nav className="navbar navbar-dark" style={this.style}>
  <a className="navbar-brand" href="#">Connect Place</a>
  </nav>
)
}
}

const mapStateToProps=(state)=>({
  auth:state.auth
})

export default connect(mapStateToProps,{logout})(Navbar)
