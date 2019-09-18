import React,{Component} from 'react'
import {Autocomplete,Col,Row,Button,Icon,TextInput,Textarea, Card,Select} from 'react-materialize'
import Tag1 from './tag1.js'
import {addPost} from '../../action/post'
import {connect} from 'react-redux'
import {toast} from 'react-toastify';
import {withRouter} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
const lang= {"Gus Fring": null,"Saul Goodman": null,"Tuco Salamanca": 'https://placehold.it/250x250'};
const comp={"Gus Fring": null,"Saul Goodman": null,"Tuco Salamanca": 'https://placehold.it/250x250'};
class AddPost extends Component{
    constructor(props) {
        super(props);
        this.state = {
            langtags:[],
            comptags:[],
            category:'Interview Exprience',
            content:'',
            ques:'',
            val:''
        };

    }
    componentWillReceiveProps(nextProps)
    {
        console.log(nextProps.errors)
        if(nextProps.errors)
        {
            Object.keys(nextProps.errors).forEach(key=>{
				toast.error(nextProps.errors[key], {position: toast.POSITION.TOP_RIGHT,containerId:'A'});
			})
			
        }
    }
    change=(e)=>{
        console.log(e.target.value)
        this.setState({
            category:e.target.value
        })
        console.log(this.state.category)
    }
    change2=(e)=>{
        console.log(e.target.value)
        this.setState({
            ques:e.target.value
        })
        console.log(this.state.ques)
    }
    change3=(e)=>{
        console.log(e.target.value)
        this.setState({
            content:e.target.value
        })
    }
    enterPressed1 = (event) => {
        var code = event.keyCode || event.which;
        console.log(code)
        if(code === 13) { 
            var tmp=event.target.value;
            if(tmp!=="")
            { 
                const tmp1=this.state.langtags;
                console.log(tmp1)
                tmp1.push(tmp);
                this.setState({langtags:tmp1})
                console.log("!!!!!!111")
                
                console.log(this.state.val)
            }
            
            // alert(this.state.langtags);
        } 
    }
    enterPressed2 = (event) => {
        var code = event.keyCode || event.which;
        if(code === 13) { 
            var tmp=event.target.value;
            if(tmp!=="")
            {
                const tmp1=this.state.comptags;
                tmp1.push(tmp);
                this.setState({comptags:tmp1})
            }
            event.target.value='';
            // alert(this.state.comptags);
        } 
    }
    change4=(e)=>{
        console.log(this.state.val)
        this.setState({
            val:e.target.value
        })
    }
    submit=(e)=>{
        e.preventDefault();
        let data={
            category:this.state.category,
            content:this.state.content,
            ques:this.state.ques,
            language:this.state.langtags,
            topic:this.state.comptags
        }
        console.log(this.props.history)
       this.props.addPost(data,this.props.history)
    }
    def=(e)=>{
        e.preventDefault();
    }
    render(){
        return(
            <Row>
                <center>
                    <form>
                <Col m={2} s={12}></Col>
                <Col m={8} s={12}>
            
                <Card className="z-depth-5" 
                style={{color:"white",fontSize:'1.5em',borderRadius:"10px",backgroundImage:"linear-gradient(purple,indigo)"}}>
                <Row>
                    <div><center style={{fontSize:"1.5em",fontWeight:"500"}}>Write a post</center></div>
                    <hr style={{width:"75%"}}></hr>
                    <br></br><br></br>
                    
                    <Select value={this.state.category} onChange={this.change}>
                        <option disabled>
                        Select
                        </option>
                        <option value="Interview Exprience">
                        Interview Experience
                        </option>
                        <option value="General Query">
                        General Query
                        </option>
                        </Select>
                        {/* <br></br>
                        <div>Category :</div>
                        <Col s={1}></Col>
                        <center>
                        <Select value={this.state.category} onChange={this.change}>
                            <option disabled>
                            Select
                            </option>
                            <option value="Interview Exprience">
                            Interview Experience
                            </option>
                            <option value="General Query">
                            General Query
                            </option>
                            </Select>
                        </center> */}
                    </Row>
               
                    <Row>
                        <div>Title :</div>
                        <Col s={1}></Col>
                        <TextInput s={10} onChange={this.change2} value={this.ques}/>
                    </Row>

                    <Row>
                        <Col m={6} s={12}>
                        <div>Languages :</div>
                        <Col m={1} s={1}></Col>
                        <Autocomplete onKeyPress={this.enterPressed1.bind(this)}
                         m={10} s={10}
                         options={{data:lang}}
                         placeholder="Type and press Enter" />
                        <Col m={1} s={1}></Col>
                        {this.state.langtags.map((value, index) => {
                                    if(value!=="")
                                        return <Tag1 name={value}></Tag1>
                                    else
                                        return null;
                        })}
                        </Col>
                        <Col m={6} s={12}>
                        <div>Company :</div>
                        <Col s={1}></Col>
                        <Autocomplete onKeyPress={this.enterPressed2.bind(this)}
                         s={10} 
                         options={{data:comp}}
                         placeholder="Type and press Enter" />
                        <Col s={1}></Col>
                        {this.state.comptags.map((value, index) => {
                                    if(value!=="")
                                        return <Tag1 name={value}></Tag1>
                                    else
                                        return null;
                        })}
                        </Col>
                    </Row>
                    <Row style={{marginBottom:0}}>
                        <div>Description :</div>
                        <Col s={1}></Col>
                        <Textarea data-length={1000} style={{height:"10em",border:"1px solid white",padding:"1em"}}
                          s={10}
                          m={10}
                          l={10}
                          xl={10}
                            value={this.content}
                            onChange={this.change3}
                        />
                    </Row>
                    <Button type="button" waves="light" style={{marginBottom:"10px"}} onClick={this.submit}>
                        Submit
                        <Icon right>
                        send
                        </Icon>
                    </Button>
                </Card>
                </Col>
                <Col m={3} s={12}></Col>
                </form>
                </center>
            </Row>
        )
    }
}
const mapStateToProps=state=>({
    errors:state.errors
})


export default connect(mapStateToProps,{addPost})(withRouter(AddPost))