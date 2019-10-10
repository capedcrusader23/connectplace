import React,{Component} from 'react';

class CommentFeed extends Component{
    render(){
        return(
        <div style={{ textAlign: "justify" }}>
        <div style={{ margin: "0.5em", fontSize: "0.8em", fontWeight: "400" }}>{this.props.name}</div>
        <div className="white" style={{ borderRadius: "20px", padding: "0.6em", maxWidth: "90%", height: "auto", fontSize: "0.6em", marginLeft: "2em", color: "black" }}>{this.props.comment}</div>
    </div>
        )
    }
}

export default CommentFeed;