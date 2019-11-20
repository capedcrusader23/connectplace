import React from 'react'
import Post from './Post'
const Posts = (props) => props.posts.map ((post,index) => {
        return <Post key={index} post={post}/>
    })
    
export default Posts