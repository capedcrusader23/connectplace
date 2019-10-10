import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchcompsp,fetchlangsp} from '../../action/post'
import Post from '../reusable/post'
class Dashboard extends Component
{
componentDidMount()
{
    
    console.log(this.props.match.params.id)
this.props.fetchcompsp(this.props.match.params.id);
}

render(){
    const {sortcomp}=this.props.post;
    let postConetent;
    
     if(sortcomp)
    {
        postConetent=sortcomp.map(post=><Post company={post.company} key={post._id} title={post.ques} author={post.per} tags={post.language} upvotes={post.upvotes} downvotes={post.downvotes} id2={post._id}></Post>)
    }
    
    
    return(
        <div>
            
            {postConetent}
        </div>
    )
}
}

const mapStateToProps=state=>({
    post:state.post
})
export default connect(mapStateToProps,{fetchcompsp,fetchlangsp})(Dashboard)
