import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../../action/post'
import { Card, Col, Row, Button, CardPanel } from 'react-materialize'


class CommentForm extends Component{
constructor(props)
{
    super(props);
    this.state={
        text:''
    }
}

change=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
submit=(e)=>{
    e.preventDefault();
    let data={
        text:this.state.text,
        name:this.props.name,
    }
   
  this.props.addComment(this.props.id2,data);
}
    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
            <input className="white" style={{ marginLeft: "2em", maxWidth: "90%", borderRadius: "20px", padding: "0.6em", height: "auto", fontSize: "0.6em", color: "black" }} placeholder="Write Comment" onChange={this.change} name="text"></input>
            <center><Button className="cyan pulse" waves="light" style={{ borderRadius: "30px", marginTop: "1em" }}>Add Comment</Button></center>
            </form>
        </div>
        )
    }
}

           
                
export default connect(null,{addComment})(CommentForm)