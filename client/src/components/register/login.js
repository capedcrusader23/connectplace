import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Proptypes from 'prop-types'
import {connect} from 'react-redux'
import {loginuser} from '../../action/auth.js'
import classnames from 'classnames'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({
	autoClose: 5000,
	draggable: true,
  });
class Register extends Component{
	constructor()
	{
		super()
		this.state={
			email:'',
			password:'',
			
			errors:{}
		}
	this.onchange=this.onchange.bind(this)
	this.onsubmit=this.onsubmit.bind(this)
	this.notify=this.notify.bind(this)
	}
	notify(e)
	{
		
		toast.success("Success Notification !",{containerId:'A',position:toast.POSITION.TOP_RIGHT});
	}
	onchange(e){
	this.setState({[e.target.name]:e.target.value})
	}
	onsubmit(e)
	{
		e.preventDefault();
		let data=
		{
			email:this.state.email,
			password:this.state.password
		}
		this.props.loginuser(data)
	}
	componentDidMount(){

		if(this.props.auth.isAuthenticatetd)
		{
			this.props.history.push('/dashboard')
		}
	}

	componentWillReceiveProps(nextProps)
	{
		console.log(nextProps.auth.isAuthenticatetd)
		if(nextProps.auth.isAuthenticatetd)
		{
			this.props.history.push('/dashboard');
		}
		if(nextProps.errors)
		{
			console.log(nextProps.errors)
			this.setState({errors:nextProps.errors})
			Object.keys(nextProps.errors).forEach(key=>{
				toast.error(nextProps.errors[key], {position: toast.POSITION.TOP_RIGHT,containerId:'A'});
			})
				console.log(nextProps.errors[0])
				

		}
	}
render(){
	const {errors}=this.state
	
    return(
        <div>
			<ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_LEFT} />
	<h1>Login</h1>
	<div style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginTop:"10vh"}}>
		<form class="register-form" onSubmit={this.onsubmit}>        
		
			<div className="row margin">
				<div className="input-field col s12">
					<i className="mdi-communication-email prefix"></i>
					<input id="user_email" type="text" value={this.state.email} name="email" onChange={this.onchange} className={classnames('form-control form-control-lg',{'invalid':errors.email})}/>
					<label  className="center-align">Email</label>
				</div>
			</div>
			<div className="row marccgin">
				<div className="input-field col s12">
					<i className="mdi-action-lock-outline prefix"></i>
					<input id="user_passw" type="password"  value={this.state.password} name="password" onChange={this.onchange} className={classnames('form-control form-control-lg',{'invalid':errors.password})}/>
					<label >Password</label>
				</div>
			</div>
		
			<div className="row">
				<div className="input-field col s12">
					<button  className="btn waves-effect waves-light col s12">Login	</button>
					
				</div>
				<div className="input-field col s12">
					<p className="margin center medium-small sign-up">Don't have account? Register <Link to="/register">register</Link></p>
				</div>
			</div>
		</form>
	
</div>

        </div>



    )
}
}
Register.propTypes={
	loginuser:Proptypes.func.isRequired,
	auth:Proptypes.object.isRequired
} 

const mapStatetoProps=(state)=>({
	auth:state.auth,
	errors:state.errors
})

export default connect(mapStatetoProps,{loginuser})(Register)