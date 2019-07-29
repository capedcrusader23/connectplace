import React,{Component} from 'react'
import Post from '../reusable/post.js'
import {connect} from 'react-redux'
import {getPost} from '../../action/post'
import Popular from '../register/mostpopular'
import { Row,Col } from 'react-materialize'
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
    if(posts==null)
    {
       postConetent=<div>No Post</div>
    }
    else
    {
        postConetent=posts.map(post=><Post company={post.company} key={post._id} title={post.ques} author={post.per} tags={post.language} upvotes={post.upvotes} downvotes={post.downvotes} id2={post._id} ></Post>)
    }
    return(
        <Row style={{overflow:"hidden"}}>
            <Col m={3} s={12}>
                <Popular></Popular>
            </Col>
            <Col m={6} s={12} style={{height:"90vh",overflowY:"scroll"}}>
                {postConetent}
            </Col>
            <Col m={3} s={12}>
                <Popular></Popular>
            </Col>
        </Row>
    )
}
}

const mapStateToProps=state=>({
    post:state.post
})
export default connect(mapStateToProps,{getPost})(Dashboard)
