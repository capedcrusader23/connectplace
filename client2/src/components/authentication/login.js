import React,{Component} from 'react'
import {connect} from 'react-redux';
import {loginuser} from '../../actions/authActions'
class Login extends Component
{
    constructor()
    {
        super();
        this.state={
            email:'',
            password:'',
            errors:{}
        }
        this.onChange=this.onChange.bind(this);
          this.onSubmit=this.onSubmit.bind(this);
      }

    onChange(e)
    {
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    onSubmit(e)
    {
      e.preventDefault();
      this.props.loginuser(this.state)
    }

componentWillReceiveProps(nextProps)
{
  if(nextProps.auth.isAuthenticated)
  {
    console.log(nextProps.auth)
    this.props.history.push('/dashboard')
  }


  if(nextProps.error)
  {
    this.setState({
      errors:nextProps.error
    })
  }
}
render(){
 
    return(
        <div className="register">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Login</h1>
          <p className="lead text-center"></p>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="email" className="form-control form-control-lg" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} />
            </div>
         
            <div className="form-group">
              <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" password={this.state.password} onChange={this.onChange}/>
            </div>
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
    )
    }

} 

const mapStatetoProps=(state)=>({
  auth:state.auth,
  errors:state.error
})
export default connect(mapStatetoProps,{loginuser})(Login)