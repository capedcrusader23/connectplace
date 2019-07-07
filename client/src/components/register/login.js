import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Register extends Component{
	constructor()
	{
		super()
		this.state={
			name:'',
			email:'',
			password:'',
			Password2:'',
			errors:{}
		}
	this.onchange=this.onchange.bind(this)
	this.onsubmit=this.onsubmit.bind(this)
	}
	onchange(e){
	this.setState({[e.target.name]:e.target.value})
	}
	onsubmit(e)
	{
		e.preventDefault();
		console.log(this.state)
	}
render(){
    return(
        <div>
	<div style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginTop:"5px"}}>
		<form class="register-form" onSubmit={this.onsubmit}>        
		
			<div class="row margin">
				<div class="input-field col s12">
					<i class="mdi-communication-email prefix"></i>
					<input id="user_email" type="email" value={this.state.email} name="email" onChange={this.onchange} />
					<label for="user_email" class="center-align">Email</label>
				</div>
			</div>
			<div class="row margin">
				<div class="input-field col s12">
					<i class="mdi-action-lock-outline prefix"></i>
					<input id="user_passw" type="password"  value={this.state.password} name="password" onChange={this.onchange}/>
					<label for="user_passw">Password</label>
				</div>
			</div>
		
			<div class="row">
				<div class="input-field col s12">
					<button  class="btn waves-effect waves-light col s12">Login	</button>
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
export default Register