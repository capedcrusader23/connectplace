import React,{Component} from 'react'
import {CardPanel,Col,Row,TextInput} from 'react-materialize'
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-materialize/lib/Button';
import {changedetails} from '../../action/post'
import {connect} from 'react-redux'
import {toast} from 'react-toastify';

class Settings extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            section:true,
            name:'',
            email:'',
            password:'',
            college:'',
            current:'',
            mobile:''
        };
    }
    reset()
    {
        this.setState({
            name:'',
            email:'',
            password:'',
            college:'',
            current:'',
            mobile:''
    })
    }
    componentWillReceiveProps(nextProps)
    {
        console.log(nextProps)
        if(nextProps.post.don.success)
        {
            
            Object.keys(nextProps.post.don).forEach(key=>{
				toast.success(nextProps.post.don[key], {position: toast.POSITION.TOP_RIGHT,containerId:'A'});
            })
            Object.keys(nextProps.post.don).forEach(key=>{
            delete nextProps.post.don[key];
            })
        

        }
        else if(nextProps.errors)
        {
            Object.keys(nextProps.errors).forEach(key=>{
				toast.error(nextProps.errors[key], {position: toast.POSITION.TOP_RIGHT,containerId:'A'});
            })
            Object.keys(nextProps.errors).forEach(key=>{
                delete nextProps.errors[key];
            
            })
        }
        
    }
    onClick1=()=> {
        console.log("Click1");
        this.setState({section:true});
    }
    onClick2=()=> {
        console.log("Click2");
        this.setState({section:false});
    }
    submit=(e)=>{
        
        e.preventDefault();
        this.props.changedetails(this.state)
     
        
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render()
    {
        
        if(this.state.section)
        {
            return(
                <Row style={{paddingTop:"2em"}}>
                    
                        <Col m={4} s={12}>
                            <CardPanel style={{borderRadius:"10px",}} className="z-depth-1 light-green accent-1">
                                <center>
                                <Button style={{borderRadius:"10px"}} className="indigo lighten-5 black-text" 
                                    onClick={this.onClick1}>
                                    Update Profile
                                </Button><br></br><br></br>
                                <Button style={{borderRadius:"10px"}} className="indigo lighten-5 black-text" 
                                    onClick={this.onClick2}>
                                    Update Work Experience
                                </Button>
                                </center>
                            </CardPanel>
                        </Col>
                        <Col m={8} s={12}>
                            <CardPanel className="z-depth-1 blue lighten-5 black-text flow-text" style={{borderRadius:"10px",padding:"1em"}}>
                                <div style={{fontWeight:"400"}}>Profile Settings</div>
                                <hr style={{marginBottom:"1.5em",border:"1px solid black"}}/>
                                <Row>
                                <form action="#" method="POST">
                                    <Col m={4} s={12}>Name: <br/> <TextInput placeholder="Name" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}} name="name" value={this.name} onChange={this.change}/>        </Col>
                                    
                                    <Col m={4} s={12}>Email:<br/> <TextInput  placeholder="Email" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}} name="email" value={this.email} onChange={this.change}   />     </Col>
    
                                    <Col m={4} s={12}>Password:<br/> <TextInput password placeholder="Password" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}} name="password" value={this.password} onChange={this.change} />       </Col>
    
                                    
                                    <Col m={4} s={12}>College:<br/> <TextInput placeholder="College" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}} name="college" onChange={this.change}/>        </Col>
                                    
                                    <Col m={4} s={12}>Current Year:<br/> <TextInput placeholder="Current Year" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}} name="current" onChange={this.change}/>      </Col>
    
                                    <Col m={4} s={12}>Mobile:<br/> <TextInput placeholder="Mobile" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}} name="mobile" onChange={this.change}/>        </Col>
                                        
                                    <center>
                                    <Col m={6} s={6} style={{marginTop:"1.5em"}}>
                                        <input type="reset" value="Clear Fields" style={{backgroundColor:"#ef6c00",padding:"0.3em",borderRadius:"10px"}}/>
                                    </Col>
                                    <Col>
                                    <input type="submit" value="Save Changes" style={{backgroundColor:"lime",padding:"0.3em",borderRadius:"10px"}} onClick={this.submit}/>
                                    </Col>
                                    </center>
                                </form>
    
                                </Row>
                            </CardPanel>
                        </Col>
                        <Col m={1} s={12}></Col>
                        
                </Row>
            )
        }
        else
        {
            return(
                <Row style={{paddingTop:"2em"}}>
                    
                        <Col m={4} s={12}>
                            <CardPanel style={{borderRadius:"10px"}} className="z-depth-1 light-green accent-1">
                                <center>
                                <Button style={{borderRadius:"10px"}} className="indigo lighten-5 black-text" 
                                    onClick={this.onClick1}>
                                    Update Profile
                                </Button><br></br><br></br>
                                <Button style={{borderRadius:"10px"}} className="indigo lighten-5 black-text" 
                                    onClick={this.onClick2}>
                                    Update Work Experience
                                </Button>
                                </center>
                            </CardPanel>
                        </Col>
                        <Col m={8} s={12}>
                            <CardPanel className="z-depth-1 blue lighten-5 black-text flow-text" style={{borderRadius:"10px",padding:"1em"}}>
                                <div style={{fontWeight:"400"}}>Update Work Experience</div>
                                <hr style={{marginBottom:"1.5em",border:"1px solid black"}}/>
                                <Row>
                                <form action="#" method="POST">
    
                                        <Col m={12}> Working at: </Col>
                                        <Col m={12} className="center-align">
                                            <input type="text" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",maxWidth:"90%",borderRadius:"10px"}}/>
                                        </Col>
                                        <Col m={12}>
                                            <Col m={6} s={6}> from:
                                                <input type="date" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",maxWidth:"90%",borderRadius:"10px"}}/>
                                            </Col>
                                            com                           <Col m={6} s={6}> to: 
                                                <input type="date" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",maxWidth:"90%",borderRadius:"10px"}}/>
                                            </Col>
                                        </Col>
                                    <center>
                                    <Col m={6} s={6} style={{marginTop:"1.5em"}}>
                                        <input type="reset" value="Clear Fields" style={{backgroundColor:"#ef6c00",padding:"0.3em",borderRadius:"10px"}}/>
                                    </Col>
                                    <Col m={6} s={6} style={{marginTop:"1.5em"}}>
                                        <input type="submit" value="Save Changes" style={{backgroundColor:"lime",padding:"0.3em",borderRadius:"10px"}}/>
                                    </Col>
                                    </center>
                                </form>
    
                                </Row>
                            </CardPanel>
                        </Col>
                        <Col m={1} s={12}></Col>
                        
                </Row>
            );
        }
    }        
}
let mapStateToProps=state=>({
    errors:state.errors,
    post:state.post
})

export default connect(mapStateToProps,{changedetails})(Settings)