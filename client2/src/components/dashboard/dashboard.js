import React ,{Component} from 'react'
import SideBar from '../sideBar/SideBar'
import TrendingCompanies from '../TrendingCompanies/TrendingCompanies'
import Posts from '../Posts/Post'
import PostsWrapper from '../Posts/PostsWrapper'
import {connect} from 'react-redux'
import {getPost} from './../../actions/authActions'
import Loader from 'react-loader-spinner'
import AddPost from '../Posts/addPost'
class Dashboard extends Component {
    constructor () {
        // Rereieve posts from here
        super()
        this.state = {
            posts:[
                {
                    'authorName' :'Author Name',
                    postedOn:'24/12/1997',
                    content:'My Interview was went to bad that the employer asked me to pay him for bearing with them. My engineering went wrong, I’m going into designing now. Which college should I apply for ??',
                    postType:'Query',
                    companyName:'Amazon',
                    postId:1,
                    likes:[
                        '12','34','34'
                        // This is user ids so u can whether current user liked the post or not yet :D
                    ]
                },
                {
                    'authorName' :'Author Name',
                    postedOn:'24/12/1997',
                    content:'My Interview was went to bad that the employer asked me to pay him for bearing with them. My engineering went wrong, I’m going into designing now. Which college should I apply for ??',
                    postType:'Query',
                    companyName:'Amazon',
                    postId:1,
                    likes:[
                        '12','34','34'
                        // This is user ids so u can whether current user liked the post or not yet :D
                    ]
                },
                {
                    'authorName' :'Author Name',
                    postedOn:'24/12/1997',
                    content:'My Interview was went to bad that the employer asked me to pay him for bearing with them. My engineering went wrong, I’m going into designing now. Which college should I apply for ??',
                    postType:'Query',
                    companyName:'Amazon',
                    postId:1,
                    likes:[
                        '12','34','34'
                        // This is user ids so u can whether current user liked the post or not yet :D
                    ]
                },
                {
                    'authorNMoreame' :'Author Name',
                    postedOn:'24/12/1997',
                    content:'My Interview was went to bad that the employer asked me to pay him for bearing with them. My engineering went wrong, I’m going into designing now. Which college should I apply for ??',
                    postType:'Query',
                    companyName:'Amazon',
                    postId:1,
                    likes:[
                        '12','34','34'
                        // This is user ids so u can whether current user liked the post or not yet :D
                    ]
                },
                {
                    'authorName' :'Author Name',
                    postedOn:'24/12/1997',
                    content:'My Interview was went to bad that the employer asked me to pay him for bearing with them. My engineering went wrong, I’m going into designing now. Which college should I apply for ??',
                    postType:'Query',
                    companyName:'Amazon',
                    postId:1,
                    likes:[
                        '12','34','34'
                        // This is user ids so u can whether current user liked the post or not yet :D
                    ]
                },
                {
                    'authorName' :'Author Name',
                    postedOn:'24/12/1997',
                    content:'My Interview was went to bad that the employer asked me to pay him for bearing with them. My engineering went wrong, I’m going into designing now. Which college should I apply for ??',
                    postType:'Query',
                    companyName:'Amazon',
                    postId:1,
                    likes:[
                        '12','34','34'
                        // This is user ids so u can whether current user liked the post or not yet :D
                    ]
                },
                {
                    'authorName' :'Author Name',
                    postedOn:'24/12/1997',
                    content:'My Interview was went to bad that the employer asked me to pay him for bearing with them. My engineering went wrong, I’m going into designing now. Which college should I apply for ??',
                    postType:'Query',
                    companyName:'Amazon',
                    postId:1,
                    likes:[
                        '12','34','34'
                        // This is user ids so u can whether current user liked the post or not yet :D
                    ]
                },
                {
                    'authorName' :'Author Name',
                    postedOn:'24/12/1997',
                    content:'My Interview was went to bad that the employer asked me to pay him for bearing with them. My engineering went wrong, I’m going into designing now. Which college should I apply for ??',
                    postType:'Query',
                    companyName:'Amazon',
                    postId:1,
                    likes:[
                        '12','34','34'
                        // This is user ids so u can whether current user liked the post or not yet :D
                    ]
                },{
                    'authorName' :'Author Name',
                    postedOn:'24/12/1997',
                    content:'My Interview was went to bad that the employer asked me to pay him for bearing with them. My engineering went wrong, I’m going into designing now. Which college should I apply for ??',
                    postType:'Query',
                    companyName:'Amazon',
                    postId:1,
                    likes:[
                        '12','34','34'
                        // This is user ids so u can whether current user liked the post or not yet :D
                    ]
                }
            ]
            // Fetch this from Backend and send the whole array as props
        }
    }
    componentWillMount()
    {
        
        this.props.getPost();
    }
    componentWillReceiveProps(nextProps)
    {
        console.log(nextProps)
    }
     
    render() {

        let postContent;
        if(this.props.post.posts.length==0)
        {
            postContent= (<h3> No Content </h3>)

        }
        else
        {
            postContent=this.props.post.posts.map((x)=>{
                return <Posts key={x._id} id={x._id} name={x.per.name} content={x.content} company={x.company} type={x.category} created={x.createdAt} upvotes={x.upvotes} ></Posts>
            })
        }

        const style = {
            DashboardWrapper :{
                marginLeft:'20vw',
                backgroundColor:'#E3E7F1',
                minHeight:'100vh',
                paddingTop:150,
                paddingLeft:'2vw',
                paddingRight:'20vw'
            }
        }
        return (
            <div>
                <SideBar/>
                <div style={style.DashboardWrapper}>
                    <AddPost/>
                    <PostsWrapper>
                      {postContent}
                    </PostsWrapper>
                </div>
                <TrendingCompanies/>
            </div>
        )
    }
    
}
const mapStatetoProps=(state)=>({
    auth:state.auth,
    post:state.post
})
export default connect(mapStatetoProps,{getPost})(Dashboard)