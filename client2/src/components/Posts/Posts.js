import React from 'react'
import Post from './Post'
const Posts = (props) => props.posts.map ((post,index) => {
        return <Post key={index} id={index} name={post.authorName} created={post.postedOn} type={post.postType} />
    })
    
export default Posts


