import React,{Component} from 'react'
import Register from '../register/register.js'
import Login from '../register/login.js'

class Landing extends Component{
    constructor()
    {
        super()
        this.state=
        {
            toggle:true
        }
        this.change=this.change.bind(this)
        this.onchange2=this.onchange2.bind(this)
    }
    change()
    {  
            this.setState({
                toggle:false
            })   
    }
    onchange2()
    {  
            this.setState({
                toggle:true
            })   
            console.log(this.state)
    }
   
render()
{
if(this.state.toggle) 
{
    return(
        <div>
<Register></Register>
    <div class="input-field col s12">
	<button class="margin center medium-small sign-up" onClick={this.change}>Login</button>
	</div>
        </div>
    ) 
    
}
else
{
    return (
    <div>
    <Login></Login>
    <div class="input-field col s12">
        <p>{this.state.toggle}</p>
			<button class="margin center medium-small sign-up" onClick={this.onchange2}>Login</button>
				</div>
                </div>
    )
}
}
}
export default Landing 