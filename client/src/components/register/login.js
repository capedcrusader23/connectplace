import React,{Component} from 'react'

class Login extends Component{
render(){
    console.log(this.props)
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginTop:"5px"}}>
    
	<div className="col s4 z-depth-6 card-panel" style={{width:"500px",display: 'flex',  justifyContent:'center'}}>
		<form className="register-form">        
			<div className="row margin">
				<div className="input-field col s12">
					<i className="mdi-communication-email prefix"></i>
					<input id="user_email" type="email" className="validate" />
					<label for="user_email" class="center-align">Email</label>
				</div>
			</div>
			<div className="row margin">
				<div className="input-field col s12">
					<i className="mdi-action-lock-outline prefix"></i>
					<input id="user_passw" type="password" className="validate" />
					<label for="user_passw">Password</label>
				</div>
			</div>
			
			<div className="row margin">
				<div className="input-field col s12">
					<a href="register.html" className="btn waves-effect waves-light col s12">Register Now</a>
				</div>
				<div className="input-field col s12">
					<p className="margin center medium-small sign-up">Already have an account? <a href="login.php">Login</a></p>
				</div>
			</div>
		</form>
	
</div>

        </div>



    )
}
}
export default Login