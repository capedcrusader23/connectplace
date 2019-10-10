import React, { Component } from 'react'
import {Col, Row, Button, CardPanel } from 'react-materialize'
import Tag from './tag.js'
import { getdatacomp,getuser} from '../../action/post'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner'
import CommentFeed from './commentfeed'
import CommentPost from './comment'
class ViewPost extends Component {
    constructor(props) {
        super(props);
    this.state={
        post:{},
        show:false
    }        
    }
    componentWillMount() {
        setTimeout(()=>{this.props.getdatacomp(this.props.match.params.id)},3000);
        this.props.getuser(this.props.auth.user.id)
    }
    componentWillReceiveProps(next)
    {
        console.log(next)
        this.setState({
            post:next.post.post
        })
        this.setState({
            show:next.post.show
        })
    }

    

    render() {
     
        if(this.state.show===false)
        {
            return (<div className="valign-wrapper center-align">
            <center>
            <Loader 
        type="CradleLoader"
        color="#00BFFF"
        height="300"	
        width="300"
     /> 
     </center>  
       </div>)
        }
        else
        {
            return (
                <Row style={{ paddingTop: "2em" }}>
                    <center>
                        <Col m={3} s={12}>
                            <div className="z-depth-3 deep-purple lighten-1 white-text" style={{ borderRadius: "20px", padding: "1em", height: "auto", fontSize: "1em", margin: "0.5em", color: "black" }}>
                                <span style={{ fontWeight: "400", fontSize: "1.2em" }}>Languages:</span> <br /><br />
                                {
                    this.state.post.language.map((value, index) => {
                        return <Link to={`/topic/${value.language}`}><Tag name={value.name}></Tag></Link>
                    })}
                                
                            </div>
                            <br></br>
                            <div className="z-depth-3 indigo lighten-1 white-text" style={{ borderRadius: "20px", padding: "1em", height: "auto", fontSize: "1em", margin: "0.5em", color: "black" }}>
                                <span style={{ fontWeight: "400", fontSize: "1.2em" }}>Company:</span> <br /><br />
                                {
                this.state.post.company.map((value, index) => {
                    return <Link to={`/company/${value.company}`}><Tag name={value.name}></Tag></Link>
                })}
                            </div>
                        </Col>
                        <Col m={9} s={12}>
                            <CardPanel className="z-depth-5 white-text flow-text"
                             style={{ borderRadius: "10px",backgroundImage:"linear-gradient(#4a148c,#b388ff)" }}>
                                <div className="cyan lighten-5" style={{ color: "black", fontWeight: "500", borderRadius: "10px", padding: "1em", height: "auto", fontSize: "1em", margin: "0.5em" }}>{this.state.post.ques}</div>
                                By: <Button className="orange" waves="light" style={{ borderRadius: "40%", fontSize: "1em", margin: "0.5em" }}>{this.state.post.per.name}</Button>
                                <div className="deep-orange lighten-5" style={{ borderRadius: "20px", padding: "1em", height: "auto", fontSize: "1em", margin: "0.5em", color: "black" }}>
                                    <div style={{ fontWeight: "500", margin: "0.5em" }}>Description:</div>
                                    <hr style={{width:"75%"}}></hr>
                                    <div style={{ textAlign: "justify", margin: "0.5em" }}>{this.state.post.content}</div>
                                </div>
    
                                <Row>
                                    <Col m={1} s={1}></Col>
                                    <Col m={5} s={5}><Button
                                        floating
                                        large
                                        className="green pulse"
                                        waves="light"
                                        icon="thumb_up"
                                    // onClick={this.doup.bind(this,this.props.id2)}
                                    />
                                        {/* <p>{this.state.upvotes.length}</p> */}
                                    </Col>
                                    <Col m={5} s={5}><Button
                                        floating
                                        large
                                        className="red pulse"
                                        waves="light"
                                        icon="thumb_down"
                                    // onClick={this.dodown.bind(this,this.props.id2)}
                                    />
                                        {/* <p>{this.state.downvotes.length}</p> */}
                                    </Col>
                                    <Col m={1} s={1}></Col>
                                </Row>
                <CommentFeed postId={this.state.post._id} comment={this.state.post.comments} ></CommentFeed>
    <CommentPost id2={this.state.post._id} name={this.state.post.per.name} ></CommentPost>
    
                                
                            </CardPanel>
                        </Col>
                    </center>
                </Row>
            )
        }

        }
        
}
const mapStateToProps = state => ({
    post: state.post,
    auth:state.auth
})
export default connect(mapStateToProps, { getdatacomp ,getuser})(ViewPost)