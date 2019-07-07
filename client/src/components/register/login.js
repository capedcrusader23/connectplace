import React,{Component} from 'react'

class Login extends Component{
render(){
    console.log(this.props)
    return(
        <div>
       
	<div class="col s4 z-depth-6 card-panel">
		<form class="register-form">        
			<div class="row margin">
				<div class="input-field col s12">
					<i class="mdi-communication-email prefix"></i>
					<input id="user_email" type="email" class="validate" />
					<label for="user_email" class="center-align">Email</label>
				</div>
			</div>
			<div class="row margin">
				<div class="input-field col s12">
					<i class="mdi-action-lock-outline prefix"></i>
					<input id="user_passw" type="password" class="validate" />
					<label for="user_passw">Password</label>
				</div>
			</div>
			
			<div class="row">
				<div class="input-field col s12">
					<a href="register.html" class="btn waves-effect waves-light col s12">Register Now</a>
				</div>
				
			</div>
		</form>
	
</div>

        </div>



    )
}
}
export default Login