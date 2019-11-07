import React,{Component} from 'react'
import {connect} from 'react-redux';
import {registeruser} from '../../actions/authActions'
import {withRouter} from 'react-router-dom'
class Register extends Component
{
    constructor()
    {
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            errors:{}
        }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    } 
componentWillReceiveProps(nextProps)
{
  if(nextProps.errors)
  {
    console.log(nextProps.errors)
    this.setState({
      errors:nextProps.errors
    })
  }
}
    onSubmit(e)
    {
      e.preventDefault();
      this.props.registeruser(this.state,this.props.history)  
      }
    onChange(e)
    {
      this.setState({
        [e.target.name]:e.target.value
      })
    }   
render(){

    return(
      
        <div className="register">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your DevConnector account</p>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="text" className="form-control form-control-lg" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange}  />
            </div>
            <div className="form-group">
              <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email}  onChange={this.onChange}   />
              <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" password={this.state.password} onChange={this.onChange}  />
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
export default connect(mapStatetoProps,{registeruser})(withRouter(Register));