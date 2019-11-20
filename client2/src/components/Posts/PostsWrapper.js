import React from 'react'

const PostsWrapper = props => {
    const style = {
        wrapper: {
            columnCount:'2',
            }
    }

    return (
        <div style={style.wrapper}>
            {props.children}
        </div>
    )
}
export default PostsWrapper