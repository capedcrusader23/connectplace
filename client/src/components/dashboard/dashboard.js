import React,{Component} from 'react'
import Post from '../reusable/post.js'
import {connect} from 'react-redux'
import {getPost} from '../../action/post'
import Popular from '../register/mostpopular'
class Dashboard extends Component
{
componentDidMount()
{
this.props.getPost();
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
        <div>
            <Popular></Popular>
            {postConetent}
        </div>
    )
}
}

const mapStateToProps=state=>({
    post:state.post
})
export default connect(mapStateToProps,{getPost})(Dashboard)
