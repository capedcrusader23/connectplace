import React , {Component} from 'react'
import Profile from '../../assets/profile1.png'
import SideBar from '../sideBar/SideBar'
import Comment from './Comment'
class InterviewExperience extends Component {
    constructor() {
        super()
        // Fetch data using post_id and postType
        this.state = {
            authorName:'Username',
            company:'Amazon',
            jobDescription:'SDE',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam. Dictum at tempor commodo ullamcorper a lacus vestibulum. Amet facilisis magna etiam tempor orci eu lobortis. Mi bibendum neque egestas congue quisque. Pellentesque elit ullamcorper dignissim cras. ',
            liked:[],
            comments:[
                {
                    commentId:'1',userName:'Username',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam. Dictum at tempor commodo ullamcorper a lacus vestibulum. Amet facilisis magna etiam tempor orci eu lobortis. Mi bibendum neque egestas congue quisque. Pellentesque elit ullamcorper dignissim cras. ',
                },
                {
                    commentId:'2',userName:'Username',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam. Dictum at tempor commodo ullamcorper a lacus vestibulum. Amet facilisis magna etiam tempor orci eu lobortis. Mi bibendum neque egestas congue quisque. Pellentesque elit ullamcorper dignissim cras. ',
                },
                {
                    commentId:'3',userName:'Username',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam. Dictum at tempor commodo ullamcorper a lacus vestibulum. Amet facilisis magna etiam tempor orci eu lobortis. Mi bibendum neque egestas congue quisque. Pellentesque elit ullamcorper dignissim cras. ',
                },
                {
                    commentId:'4',userName:'Username',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam. Dictum at tempor commodo ullamcorper a lacus vestibulum. Amet facilisis magna etiam tempor orci eu lobortis. Mi bibendum neque egestas congue quisque. Pellentesque elit ullamcorper dignissim cras. ',
                },
                {
                    commentId:'5',userName:'Username',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam. Dictum at tempor commodo ullamcorper a lacus vestibulum. Amet facilisis magna etiam tempor orci eu lobortis. Mi bibendum neque egestas congue quisque. Pellentesque elit ullamcorper dignissim cras. ',
                }

            ]
        }
    }


    render() {

        let comments = this.state.comments.map(comment => {
            return <Comment authorName={comment.userName} comment={comment.comment}/>
        })

        let style = {
            Wrapper : {
                marginLeft:'20vw',
                paddingLeft:'5vw',
                paddingRight:'8vw',
                paddingTop:150,
                backgroundColor:'#E3E7F1',
                fontFamily:'Montserrat',
                minHeight:'100vh'

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
            },
            userRsp : {
                padding:20,
                backgroundColor:'#D7D7D7'
            },
            content :{
                fontWeight:300,
                textAlign:'justify'
            }
        }


        return (
            <div>
                <SideBar/>
                <div style={style.Wrapper}>
                    <h1>Interview Experience @ {this.state.company}</h1>
                    <hr/>
                    <p>
                        <b>Job Description:</b> {this.state.jobDescription}
                    </p>
                    <div>
                        <img src={Profile} style={{height:80,width:80,marginRight:4}}/>
                        {this.state.authorName}
                    </div>
                    <br/>
                    <p style={style.content}>
                        {this.state.content}
                    </p>
                    <div>
                        <i style={style.respBtnActive} className="fa fa-thumbs-up"></i> Upvote
                        <i style={style.respBtnInActive} className="fa fa-share"></i> Share
                    
                    </div>
                    <br/>
                    <form className="row" style={style.userRsp}>
                            <input type="text" className="col-9 mr-2" name="comment" id="comment"/>
                            <input type="Submit" className="col-2 ml-1" value="Add Comment"/>
                    </form>
                    <br/>
                    <div>
                        <h4>Comments</h4>
                        <br/>
                        {comments}
                    </div>
                </div>
            </div>
        )
    }
}
export default InterviewExperience