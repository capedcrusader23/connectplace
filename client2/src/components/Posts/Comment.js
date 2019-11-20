import React from 'react'
import Profile from '../../assets/profile1.png'

const Comment = (props) => {
    const style= {
        content: {
            fontWeight:300,
            fontSize:16
        }
    }
    return (
        <div>
            <div>
                <img src={Profile} style={{height:80,width:80,marginRight:4}}/>
                {props.authorName}
            </div>
                <br/>
                <p style={style.content}>
                    {props.comment}
                </p>
            <hr/>
        </div>
    )
}
export default Comment