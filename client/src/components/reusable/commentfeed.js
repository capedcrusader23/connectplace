import React,{Component} from 'react';
import CommentItem from './commentitem'
class CommentFeed extends Component{
    render(){
        const {comment,postId}=this.props
        return comment.map(comment=><CommentItem key={comment._id} comment={comment.text} postId={postId} name={comment.name}></CommentItem>)
    }
}

export default CommentFeed;