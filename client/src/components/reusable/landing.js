import React,{Component} from 'react'

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
return(
<div>

</div>
) 
}
}
export default Landing 