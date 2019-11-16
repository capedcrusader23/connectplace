import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {logout} from '../../actions/authActions'

class Navbar extends Component
{
  style = {
    backgroundColor:"#202150"
  }
  logout(e)
  {
    e.preventDefault();
    this.props.logout();
  }
render()
{
return(
  <nav class="navbar navbar-dark" style={this.style}>
  <a class="navbar-brand" href="#">Connect Place</a>
  </nav>
)
}


}

const mapStateToProps=(state)=>({
  auth:state.auth
})

export default connect(mapStateToProps,{logout})(Navbar)
