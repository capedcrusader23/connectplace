import React ,{Component} from 'react'
import SideBar from '../sideBar/SideBar'
import TrendingCompanies from '../TrendingCompanies/TrendingCompanies'
import Posts from '../Posts/Posts'
import PostsWrapper from '../Posts/PostsWrapper'
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
     
    render() {
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

                    <PostsWrapper>
                        <Posts posts={this.state.posts}/>
                    </PostsWrapper>
                </div>
                <TrendingCompanies/>
            </div>
        )
    }
    
}
export default Dashboard