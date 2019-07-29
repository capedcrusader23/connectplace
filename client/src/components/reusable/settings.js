import React,{Component} from 'react'
import {CardPanel,Col,Row,TextInput} from 'react-materialize'
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-materialize/lib/Button';


class Settings extends Component
{
    constructor(props)
    {
        super(props);
        this.state={section:true};
    }
    onClick1=()=> {
        console.log("Click1");
        this.setState({section:true});
    }
    onClick2=()=> {
        console.log("Click2");
        this.setState({section:false});
    }
    render()
    {
        
        if(this.state.section)
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
                                <div style={{fontWeight:"400"}}>Profile Settings</div>
                                <hr style={{marginBottom:"1.5em",border:"1px solid black"}}/>
                                <Row>
                                <form action="#" method="POST">
                                    <Col m={4} s={12}>Name:<br/> <TextInput placeholder="Name" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}}/> </Col>
                                    
                                    <Col m={4} s={12}>Email:<br/> <TextInput placeholder="Email" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}}/> </Col>
    
                                    <Col m={4} s={12}>Password:<br/> <TextInput placeholder="Password" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}}/> </Col>
    
                                    
                                    <Col m={4} s={12}>College:<br/> <TextInput placeholder="College" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}}/> </Col>
                                    
                                    <Col m={4} s={12}>Current Year:<br/> <TextInput placeholder="Current Year" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}}/> </Col>
    
                                    <Col m={4} s={12}>Mobile:<br/> <TextInput placeholder="Mobile" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}}/> </Col>
                                    
                                    <center>
                                    <Col m={3} s={3}>
                                        Date of Birth:
                                    </Col>
                                    </center>
                                    <Col m={7} s={7}>
                                        <input type="date" style={{backgroundColor:"white",border:"1px solid black",paddingLeft:"1em",borderRadius:"10px"}}/>
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
                                            <Col m={6} s={6}> to: 
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

export default Settings