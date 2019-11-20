import React , {Component} from 'react'
import {Link} from 'react-router-dom'
class Post extends Component {
    constructor(props) {
        super(props)
        // keep post details as props so you can do anything you want

    }
    render() {

        let style = {
            CardWrapper : {
                position:'relative',
                backgroundColor:'white',
                breakInside: 'avoid-column',
                padding:10,
                margin:10,
                marginTop:0,
                marginRight:0,
                marginLeft:5,
                fontFamily:'Montserrat'
            },
            ReadMore : {
                display:'flex',
                justifyContent:'flex-end',
                fontSize:12,
                color:'blue',
                cursor:'pointer'
            },
            CardWrapperMainHeading: {
                fontSize:22,
                fontWeight:300
            },
            postedOn:{
                fontSize:12,
                fontWeight:300
            },
            content:{
                fontSize:16,
                fontWeight:400,
                marginBottom:4
            },
            postType: {
                position:'absolute',
                top:10,
                right:10,
                fontSize:12,
                fontWeight:300
            },
            company :{
                fontSize:12,
                fontWeight:300
            },
            respBtnInActive : {
                opacity:0.5,
                fontSize:20,
                marginLeft:10
            },
            respBtnActive: {
                fontSize:20,
                marginLeft:10,
                color:'blue'
            }
            // You have to toggle betweent to styles 
        }

        let link
        if(this.props.type=="Interview Exprience")
        {
            link=`/viewpost/${this.props.id}`
        }
        else
        {
            link=`/viewpost2/${this.props.id}`
        }


        return (
            <div style={style.CardWrapper}>
                <h3 style={style.CardWrapperMainHeading}>{this.props.name}</h3>
                <h4 style={style.postedOn}>Posted On {this.props.created}</h4>
                <h5 style={style.postType}>{this.props.type}</h5>
                <p style={style.content}>
                    {this.props.content.substring(0.120)}
                </p>
                <h5 style={style.company}>Company Name:</h5>
                <div style={style.ReadMore}>
                    {/* Link to /post/post_id */}
                    <a href={link}>Read More</a>
                </div>
                <div>
                    {/* Check whether user_id from jwt token exists in props.post.likes */}
                    <i style={style.respBtnActive} className="fa fa-thumbs-up"></i>
                    <i style={style.respBtnInActive} className="fa fa-share"></i>
                    
                </div>
            </div>
        )
    }
}
export default Post