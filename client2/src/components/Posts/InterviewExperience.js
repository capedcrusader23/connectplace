import React , {Component} from 'react'
import Profile from '../../assets/profile1.png'
import SideBar from '../sideBar/SideBar'
import Comment from './Comment'
import {getpost} from '../../actions/authActions'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'
class InterviewExperience extends Component {
    constructor(props) {
        super(props)
        this.state={
            show:false,
            post:{}
        }
    }
    componentWillReceiveProps(nextProps)
    {
        console.log(nextProps)
        this.setState({
            show:nextProps.post.show,
            post:nextProps.post.post
        })
    }
    componentWillMount()
    {
        this.props.getpost(this.props.match.params.id)
    }

    render() {


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

        if(this.state.show==false)
        {
            return(
                <div>
                    <Loader></Loader>
                </div>
            )
        }
        else
        {
            return (
                <div>
                    <SideBar/>
                    <div style={style.Wrapper}>
                        <h1>Interview Experience @ {this.state.post.company.name}</h1>
                        <hr/>
                        <p>
                            <b>Job Description:</b>
                        </p>
                        <div>
                            <img src={Profile} style={{height:80,width:80,marginRight:4}}/>
                           
                        </div>
                        <br/>
                        <p style={style.content}>
                        {this.state.post.content}
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
                           
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}

const mapStateToProps=(state)=>({
    post:state.singlepost
})
export default connect(mapStateToProps,{getpost})(InterviewExperience)