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
  this.setState({
      text:''
  })
}
    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
            <div> {this.props.name}:</div>
            <input className="white" style={{ marginLeft: "2em", maxWidth: "90%", borderRadius: "20px", padding: "0.6em", height: "auto", fontSize: "0.6em", color: "black" }} placeholder="Write Comment" onChange={this.change} name="text"></input>
            <center><Button className="cyan pulse" waves="light" style={{ borderRadius: "30px", marginTop: "1em" }}>Add Comment</Button></center>
            </form>
        </div>
        )
    }
}
            /*<div className="deep-orange lighten-5" style={{ borderRadius: "20px", padding: "1em", height: "auto", fontSize: "1em", margin: "0.5em", color: "black" }}>
                                    <div style={{ fontWeight: "500", margin: "0.5em" }}>Comments:</div>                            
                                    <div style={{ textAlign: "justify" }}>
                                    /*
                                    <div style={{ margin: "0.5em", fontSize: "0.8em", fontWeight: "400" }}>Uphaar Dubey
                                        </div>
                                        <div className="white" style={{ borderRadius: "20px", padding: "0.6em", maxWidth: "90%", height: "auto", fontSize: "0.6em", marginLeft: "2em", color: "black" }}>Nice Post</div>
                                        <div style={{ margin: "0.5em", fontSize: "0.8em", fontWeight: "400" }}>Shriyam Verma
                                        </div>
                                        <div className="white" style={{ borderRadius: "20px", padding: "0.6em", maxWidth: "90%", height: "auto", fontSize: "0.6em", marginLeft: "2em", color: "black" }}>Thanks ;)</div>
                                    */
                                   /*
                                        <div style={{ margin: "0.5em", fontSize: "0.8em", fontWeight: "400" }}>{this.props.name}
                                        </div>
                                        <div>
                                            <input className="white" style={{ marginLeft: "2em", maxWidth: "90%", borderRadius: "20px", padding: "0.6em", height: "auto", fontSize: "0.6em", color: "black" }} placeholder="Write Comment" onChange={this.onChange} name="text"></input>
                                            <center><Button className="cyan pulse" waves="light" style={{ borderRadius: "30px", marginTop: "1em" }}>Add Comment</Button></center>
                                        </div>
                                    </div>
                                </div>
                </div>
                */
export default connect(null,{addComment})(CommentForm)