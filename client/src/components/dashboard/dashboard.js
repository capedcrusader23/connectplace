import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addlike,getPost} from '../../action/post'
import { Row,Col } from 'react-materialize'
import { Scrollbars } from 'react-custom-scrollbars';
import Loader from 'react-loader-spinner'
import Post from '../reusable/post.js'
class Dashboard extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            posts:[],
            show:false
        }
    }
componentWillMount()
{
this.props.getPost();
}
componentWillReceiveProps(nextProps)
{
console.log(nextProps.post.posts)
  this.setState({
      show:nextProps.post.show,
      posts:nextProps.post.posts
  }) 
}

doup(id)
{
    this.props.addlike(id)
}

render()
{

    const posts=this.state.post;
  
    let postConetent;
    if(posts === null)
    {
       postConetent=<div>No Posts </div>
    }
    else
    {
    let showstate=this.state.show;
    
    if(showstate==false&&this.state.length==0)
    {
        postConetent=<Loader></Loader>
    }
    else
    { 
   
        postConetent=this.state.posts.map((x)=>{
           return <Post key={x._id} id2={x._id} author={x.per} content={x.content} company={x.company} upvotes={x.upvotes} downvotes={x.downvotes} lang={x.language} addlike={this.doup.bind(this,x._id)}></Post>
        })
        
        
    }    

    }
    return(
        <div>
            {/* <Row style={{overflow:"hidden", marginTop:"20px"}}>
            <Col m={3} s={12}>
                
            </Col>
            <Col m={9} s={12}>
                <Scrollbars style={{width:"100%",minHeight:"88vh",padding:"40px"}}>
                    {postConetent}
                </Scrollbars>
            </Col>
            </Row> */}
            <Row style={{marginTop:40,marginLeft:20}}>
                <Col m={8} s={12}>
                    <div style={{columnCount:2}}>
                        {postConetent}
                    </div> 
                </Col>
                <Col m={3} s={12}>
                   
                </Col>
            </Row>
        </div>
        
    )
}
}

const mapStateToProps=state=>({
    post:state.post,
    update:state.update
})
export default connect(mapStateToProps,{addlike,getPost})(Dashboard)
