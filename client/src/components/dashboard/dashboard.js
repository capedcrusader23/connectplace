import React,{Component} from 'react'
import Post from '../reusable/post.js'
import {connect} from 'react-redux'
import {getPost} from '../../action/post'
import Popular from '../register/mostpopular'
import { Row,Col } from 'react-materialize'
import { Scrollbars } from 'react-custom-scrollbars';

class Dashboard extends Component
{
componentDidMount()
{
this.props.getPost();
console.log(this.props)
}

render(){
    const {posts}=this.props.post;
    console.log(posts)
    let postConetent;
    if(posts === null)
    {
       postConetent=<div><h4>No Posts </h4></div>
    }
    else
    {
        postConetent=posts.map(post=><Post company={post.company} key={post._id} title={post.ques} author={post.per} tags={post.language} upvotes={post.upvotes} downvotes={post.downvotes} id2={post._id} ></Post>)
    }
    return(
        <div>
            {/* <Row style={{overflow:"hidden", marginTop:"20px"}}>
            <Col m={3} s={12}>
                <Popular></Popular>
            </Col>
            <Col m={9} s={12}>
                <Scrollbars style={{width:"100%",minHeight:"88vh",padding:"40px"}}>
                    {postConetent}
                </Scrollbars>
            </Col>
            </Row> */}
            <Row style={{marginTop:40,marginLeft:20}}>
                <Col m={8} s={12}>
                    <div style={{columnCount:2}}>
                        {postConetent}
                    </div> 
                </Col>
                <Col m={3} s={12}>
                    <Popular></Popular>
                </Col>
            </Row>
        </div>
        
    )
}
}

const mapStateToProps=state=>({
    post:state.post
})
export default connect(mapStateToProps,{getPost})(Dashboard)
