import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {registeruser} from '../../action/auth.js'
import classnames from 'classnames'
import {withRouter} from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Register extends Component{
	constructor()
	{
		super()
		this.state={
			name:'',
			email:'',
			password:'',
			Password2:'',
			errors:{},
			dd:23,
			mm:23,
			yy:198
		}
	this.onchange=this.onchange.bind(this)
	this.onsubmit=this.onsubmit.bind(this)
	}
	componentDidMount(){

		if(this.props.auth.isAuthenticatetd)
		{
			this.props.history.push('/dashboard')
		}
	}
	componentWillReceiveProps(nextProps)
	{
		if(nextProps.errors)
		{
			
			console.log(nextProps.errors)
			Object.keys(nextProps.errors).forEach(key=>{
				toast.error(nextProps.errors[key], {position: toast.POSITION.TOP_RIGHT,containerId:'A'});
			})
			this.setState({
				errors:nextProps.errors
			})

		} 
	}
	onchange(e){
	this.setState({[e.target.name]:e.target.value})
	}
	onsubmit(e)
	{
		e.preventDefault();
		let  data={
			name:this.state.name,
			email:this.state.email,
			password:this.state.password,
			dd:this.state.dd,
			mm:this.state.mm,
			yy:this.state.yy
		}
		this.props.registeruser(data,this.props.history)
	}
render(){
	const {errors}=this.state
    return(
        <div>
	<div style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginTop:"5px"}}>
		<form class="register-form" onSubmit={this.onsubmit}>        
			<div class="row margin">
				<div class="input-field col s12">
					<i class="mdi-social-person-outline prefix"></i>
					<input id="user_name" type="text"  name="name" value={this.state.name} onChange={this.onchange} className={classnames('form-control form-control-lg',{'invalid':errors.name})}/>
					{errors.name&&(<div className="invalid">{errors.name}</div>)}
					<label for="user_name" class="center-align">Username</label>
				</div>
			</div>
			<div class="row margin">
				<div class="input-field col s12">
					<i class="mdi-communication-email prefix"></i>
					<input id="user_email" type="email" value={this.state.email} name="email" onChange={this.onchange} className={classnames('form-control form-control-lg',{'invalid':errors.email})} />
					{errors.email&&(<div className="invalid">{errors.email}</div>)}	
					<label for="user_email" class="center-align">Email</label>
				</div>
			</div>
			<div class="row margin">
				<div class="input-field col s12">
					<i class="mdi-actioncc-lock-outline prefix"></i>
					<input id="user_passw" type="password"  value={this.state.password} name="password" onChange={this.onchange} className={classnames('form-control form-control-lg',{'invalid':errors.password})}/>
					{errors.password&&(<div className="invalid">{errors.password}</div>)}
					<label for="user_passw">Password</label>
				</div>
			</div>
		
			<div class="row">
				<div class="input-field col s12">
					<button  class="btn waves-effect waves-light col s12">Register Now</button>
				</div>
				<div className="input-field col s12">
					<p className="mootstrapargin center medium-small sign-up">Already have an account? <Link to="/login">Login</Link></p>
				</div>
			</div>
		</form>
	
</div>
</div>
    )
}
}

Register.propTypes={
	registeruser:PropTypes.func.isRequired,
	auth:PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
	auth:state.auth,
	errors:state.errors
})
export default connect(mapStateToProps,{registeruser})(withRouter(Register))