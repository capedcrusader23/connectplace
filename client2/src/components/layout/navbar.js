import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {logout} from '../../actions/authActions'

class Navbar extends Component
{
  logout(e)
  {
    e.preventDefault();
    this.props.logout();
  }
render()
{
  console.log(this.props.auth)
  const authLinks=(
 <ul className="navbar-nav ml-auto">
          
          <li className="nav-item">
          <button className="nav-link" onClick={this.logout.bind(this)}>Logout</button>
          </li>
        </ul>
  )
  const guestlink=(
    <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
          </li>
        </ul>
  )
return(
<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div className="container">
      <p>DevConnector</p>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
          </li>
         {this.props.auth.isAuthenticated?authLinks:guestlink}
        </ul> 
      </div>
    </div>
  </nav>   
)
}


}

const mapStateToProps=(state)=>({
  auth:state.auth
})

export default connect(mapStateToProps,{logout})(Navbar)
